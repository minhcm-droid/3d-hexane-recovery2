import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  EQUIPMENTS,
  CONTROL_VALVES,
  INSTRUMENT_SIGNALS,
  PIPELINES
} from '../data/hexane700Data';

export default function Hexane3DCanvas({
  selectedItem,
  onSelectItem,
  activeSubsystem,
  focusTarget,
  layers,
  scenario,
  isPlaying,
  flowSpeed
}) {
  const containerRef = useRef(null);
  const [projectedBadges, setProjectedBadges] = useState([]);

  const stateRef = useRef({
    selectedItem,
    activeSubsystem,
    layers,
    scenario,
    isPlaying,
    flowSpeed
  });

  useEffect(() => {
    stateRef.current = {
      selectedItem,
      activeSubsystem,
      layers,
      scenario,
      isPlaying,
      flowSpeed
    };
  }, [selectedItem, activeSubsystem, layers, scenario, isPlaying, flowSpeed]);

  const cameraGoalRef = useRef(null);
  useEffect(() => {
    if (focusTarget) {
      cameraGoalRef.current = {
        pos: new THREE.Vector3(...focusTarget.pos),
        target: new THREE.Vector3(...focusTarget.target),
        alpha: 0
      };
    }
  }, [focusTarget]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#060b14');
    scene.fog = new THREE.FogExp2('#060b14', 0.0055);

    // Camera
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.5, 450);
    camera.position.set(-18, 34, 48);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.maxPolarAngle = Math.PI * 0.485;
    controls.minDistance = 6;
    controls.maxDistance = 140;
    controls.target.set(0, 4, 0);

    // Lighting
    const hemiLight = new THREE.HemisphereLight('#bae6fd', '#0f172a', 1.15);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight('#ffffff', 1.55);
    dirLight.position.set(35, 65, 40);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 180;
    const d = 58;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight('#38bdf8', 0.65);
    rimLight.position.set(-45, 30, -40);
    scene.add(rimLight);

    // Industrial Concrete Pad & Grid
    const floorGeo = new THREE.PlaneGeometry(130, 86);
    const floorMat = new THREE.MeshStandardMaterial({
      color: '#0b1220',
      roughness: 0.88,
      metalness: 0.12
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const gridHelper = new THREE.GridHelper(120, 60, '#1e3a5f', '#111c2e');
    gridHelper.position.y = 0.02;
    scene.add(gridHelper);

    // Subsystem Unit Zone Pads
    const zonePads = [
      { x: -31, z: 11.5, w: 20, d: 16, color: '#06b6d4' }, // Washing
      { x: -10.5, z: -4.5, w: 15, d: 13, color: '#3b82f6' }, // Stripping
      { x: 10, z: 9, w: 28, d: 18, color: '#f97316' }, // Low Polymer & Flaker
      { x: 6, z: -15, w: 28, d: 11, color: '#10b981' }, // Purification
      { x: 27, z: -14, w: 16, d: 11, color: '#22c55e' }, // Distribution
      { x: -28, z: -14, w: 22, d: 11, color: '#eab308' }, // Slop
      { x: 28, z: 4.5, w: 18, d: 14, color: '#a855f7' }, // Oligomer
      { x: -14.5, z: 21, w: 21, d: 8, color: '#ec4899' } // pH Treatment
    ];
    zonePads.forEach((zp) => {
      const padGeo = new THREE.PlaneGeometry(zp.w, zp.d);
      const padMat = new THREE.MeshBasicMaterial({
        color: zp.color,
        transparent: true,
        opacity: 0.08
      });
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.rotation.x = -Math.PI / 2;
      pad.position.set(zp.x, 0.04, zp.z);
      scene.add(pad);

      const edges = new THREE.EdgesGeometry(padGeo);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: zp.color, transparent: true, opacity: 0.35 })
      );
      line.rotation.x = -Math.PI / 2;
      line.position.set(zp.x, 0.05, zp.z);
      scene.add(line);
    });

    // Collections for interaction & animation
    const clickableObjects = [];
    const equipmentMeshes = {};
    const valveMeshes = {};
    const pipelineMeshes = {};
    const rotatingParts = [];
    const flowParticles = [];
    const signalLines = [];
    const labelAnchors = [];

    // Shared materials
    const steelDarkMat = new THREE.MeshStandardMaterial({ color: '#334155', metalness: 0.7, roughness: 0.35 });
    const steelLightMat = new THREE.MeshStandardMaterial({ color: '#94a3b8', metalness: 0.75, roughness: 0.25 });
    const motorMat = new THREE.MeshStandardMaterial({ color: '#1e3a8a', metalness: 0.5, roughness: 0.4 });
    const valveActuatorMat = new THREE.MeshStandardMaterial({
      color: '#facc15',
      emissive: '#ca8a04',
      emissiveIntensity: 0.25,
      metalness: 0.3,
      roughness: 0.35
    });
    const sdvActuatorMat = new THREE.MeshStandardMaterial({
      color: '#ef4444',
      emissive: '#b91c1c',
      emissiveIntensity: 0.35,
      metalness: 0.3,
      roughness: 0.35
    });

    // ==================== BUILD EQUIPMENTS ====================
    EQUIPMENTS.forEach((eq) => {
      const group = new THREE.Group();
      group.position.set(...eq.position);

      const [w, h, dSize] = eq.size;
      const bodyMat = new THREE.MeshStandardMaterial({
        color: eq.color,
        metalness: 0.48,
        roughness: 0.32
      });

      const glassMat = new THREE.MeshPhysicalMaterial({
        color: eq.color,
        transparent: true,
        opacity: 0.36,
        roughness: 0.15,
        metalness: 0.1
      });

      if (eq.type === 'tower') {
        const radius = w * 0.45;
        // Skirt
        const skirt = new THREE.Mesh(
          new THREE.CylinderGeometry(radius * 0.96, radius * 1.04, 1.4, 24),
          steelDarkMat
        );
        skirt.position.y = 0.7;
        skirt.castShadow = true;
        group.add(skirt);

        // Translucent shell
        const shell = new THREE.Mesh(
          new THREE.CylinderGeometry(radius, radius, h - 2.2, 24),
          glassMat
        );
        shell.position.y = 1.4 + (h - 2.2) / 2;
        shell.castShadow = true;
        group.add(shell);

        // Top Dome
        const dome = new THREE.Mesh(
          new THREE.SphereGeometry(radius, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
          bodyMat
        );
        dome.position.y = h - 0.8;
        group.add(dome);

        // Sieve trays & platform rings
        const trayCount = 7;
        for (let i = 1; i <= trayCount; i++) {
          const ty = 1.6 + ((h - 2.8) * i) / (trayCount + 1);
          const tray = new THREE.Mesh(
            new THREE.CylinderGeometry(radius * 0.95, radius * 0.95, 0.1, 20),
            steelLightMat
          );
          tray.position.y = ty;
          group.add(tray);

          if (i % 2 === 0) {
            const platform = new THREE.Mesh(
              new THREE.TorusGeometry(radius * 1.18, 0.06, 8, 24),
              steelDarkMat
            );
            platform.rotation.x = Math.PI / 2;
            platform.position.y = ty;
            group.add(platform);
          }
        }

        // Liquid bottom
        if (eq.liquidColor) {
          const liqH = (h - 2.4) * (eq.liquidLevel || 0.4);
          const liq = new THREE.Mesh(
            new THREE.CylinderGeometry(radius * 0.9, radius * 0.9, liqH, 20),
            new THREE.MeshStandardMaterial({
              color: eq.liquidColor,
              emissive: eq.liquidColor,
              emissiveIntensity: 0.25,
              roughness: 0.2
            })
          );
          liq.position.y = 1.4 + liqH / 2;
          group.add(liq);
        }
      } else if (eq.type === 'horizontal_drum') {
        const radius = h * 0.42;
        const len = w * 0.78;
        // Saddles
        [-len * 0.3, len * 0.3].forEach((sx) => {
          const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.45, radius * 1.1, radius * 1.5), steelDarkMat);
          saddle.position.set(sx, radius * 0.55, 0);
          group.add(saddle);
        });

        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 24), glassMat);
        cyl.rotation.z = Math.PI / 2;
        cyl.position.y = radius * 1.35;
        cyl.castShadow = true;
        group.add(cyl);

        // End caps
        [-len / 2, len / 2].forEach((cx) => {
          const cap = new THREE.Mesh(new THREE.SphereGeometry(radius, 20, 12), bodyMat);
          cap.scale.set(0.55, 1, 1);
          cap.position.set(cx, radius * 1.35, 0);
          group.add(cap);
        });

        // Boot leg underneath
        const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.7, 14), steelLightMat);
        boot.position.set(len * 0.25, radius * 0.35, 0);
        group.add(boot);

        if (eq.liquidColor) {
          const liq = new THREE.Mesh(
            new THREE.CylinderGeometry(radius * 0.88, radius * 0.88, len * 0.94, 20),
            new THREE.MeshStandardMaterial({
              color: eq.liquidColor,
              emissive: eq.liquidColor,
              emissiveIntensity: 0.25
            })
          );
          liq.rotation.z = Math.PI / 2;
          liq.scale.set(eq.liquidLevel || 0.6, 1, 0.9);
          liq.position.y = radius * 1.18;
          group.add(liq);
        }
      } else if (eq.type === 'agitator_vessel') {
        const radius = w * 0.45;
        const bodyH = h - 1.3;
        // 4 Support Legs
        [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1]
        ].forEach(([lx, lz]) => {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.0, 8), steelDarkMat);
          leg.position.set(lx * radius * 0.68, 0.5, lz * radius * 0.68);
          group.add(leg);
        });

        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, bodyH, 24), glassMat);
        cyl.position.y = 0.9 + bodyH / 2;
        cyl.castShadow = true;
        group.add(cyl);

        const topLid = new THREE.Mesh(new THREE.CylinderGeometry(radius * 1.02, radius * 1.02, 0.2, 24), bodyMat);
        topLid.position.y = 0.9 + bodyH;
        group.add(topLid);

        // Agitator Motor + Shaft
        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.85, 16), motorMat);
        motor.position.y = 0.9 + bodyH + 0.55;
        group.add(motor);

        const shaftGroup = new THREE.Group();
        shaftGroup.position.y = 0.9 + bodyH * 0.45;
        const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, bodyH * 0.85, 8), steelLightMat);
        shaftGroup.add(shaft);
        const blade = new THREE.Mesh(new THREE.BoxGeometry(radius * 1.3, 0.16, 0.28), steelLightMat);
        blade.position.y = -bodyH * 0.22;
        shaftGroup.add(blade);
        group.add(shaftGroup);
        rotatingParts.push({ mesh: shaftGroup, axis: 'y', speed: 3.5 });

        if (eq.liquidColor) {
          const liqH = bodyH * (eq.liquidLevel || 0.7);
          const liq = new THREE.Mesh(
            new THREE.CylinderGeometry(radius * 0.9, radius * 0.9, liqH, 20),
            new THREE.MeshStandardMaterial({
              color: eq.liquidColor,
              emissive: eq.liquidColor,
              emissiveIntensity: 0.22
            })
          );
          liq.position.y = 0.9 + liqH / 2;
          group.add(liq);
        }
      } else if (eq.type === 'pump') {
        // Skid baseplate
        const skid = new THREE.Mesh(new THREE.BoxGeometry(w, 0.22, dSize * 0.85), steelDarkMat);
        skid.position.y = 0.11;
        skid.castShadow = true;
        group.add(skid);

        // Electric Motor
        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, w * 0.46, 16), motorMat);
        motor.rotation.z = Math.PI / 2;
        motor.position.set(-w * 0.2, 0.65, 0);
        motor.castShadow = true;
        group.add(motor);

        // Coupling spinner
        const coupling = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.35, 12), valveActuatorMat);
        coupling.rotation.z = Math.PI / 2;
        coupling.position.set(w * 0.08, 0.65, 0);
        group.add(coupling);
        rotatingParts.push({ mesh: coupling, axis: 'x', speed: 8.0 });

        // Centrifugal Volute Casing
        const volute = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.42, 20), bodyMat);
        volute.rotation.x = Math.PI / 2;
        volute.position.set(w * 0.3, 0.68, 0);
        volute.castShadow = true;
        group.add(volute);

        // Discharge nozzle
        const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.55, 12), steelLightMat);
        nozzle.position.set(w * 0.3, 1.25, 0);
        group.add(nozzle);
      } else if (eq.type === 'exchanger') {
        const radius = h * 0.42;
        const len = w * 0.82;
        // Saddles
        [-len * 0.28, len * 0.28].forEach((sx) => {
          const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.35, radius * 1.1, radius * 1.4), steelDarkMat);
          saddle.position.set(sx, radius * 0.55, 0);
          group.add(saddle);
        });

        // Main TEMA Shell
        const shell = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 22), bodyMat);
        shell.rotation.z = Math.PI / 2;
        shell.position.y = radius * 1.3;
        shell.castShadow = true;
        group.add(shell);

        // Channel Header & Rear Bonnet Flanges
        [-len * 0.44, len * 0.44].forEach((fx) => {
          const flange = new THREE.Mesh(
            new THREE.CylinderGeometry(radius * 1.14, radius * 1.14, 0.18, 22),
            steelLightMat
          );
          flange.rotation.z = Math.PI / 2;
          flange.position.set(fx, radius * 1.3, 0);
          group.add(flange);
        });

        // Top & Bottom Nozzles
        const topNoz = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.5, 12), steelLightMat);
        topNoz.position.set(-len * 0.22, radius * 2.35, 0);
        group.add(topNoz);

        const botNoz = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.5, 12), steelLightMat);
        botNoz.position.set(len * 0.22, radius * 0.35, 0);
        group.add(botNoz);
      } else if (eq.type === 'flaker') {
        // Frame structure
        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(w, h, dSize),
          new THREE.MeshStandardMaterial({
            color: eq.color,
            transparent: true,
            opacity: 0.32,
            roughness: 0.4
          })
        );
        frame.position.y = h / 2;
        group.add(frame);

        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, dSize)),
          new THREE.LineBasicMaterial({ color: '#fb923c' })
        );
        edges.position.y = h / 2;
        group.add(edges);

        // Twin Chilled Main Rollers (M-761A/B)
        [-1.1, 1.1].forEach((rx) => {
          const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 1.6, 24), steelLightMat);
          roller.rotation.x = Math.PI / 2;
          roller.position.set(rx, 2.1, 0);
          group.add(roller);
          rotatingParts.push({ mesh: roller, axis: 'z', speed: -1.8 });
        });

        // Screw Conveyor FD-762
        const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, w * 0.85, 16), steelDarkMat);
        screw.rotation.z = Math.PI / 2;
        screw.position.set(0, 0.95, 0);
        group.add(screw);
      } else {
        // Vertical Drum or Storage Tank (tank / vertical_drum)
        const radius = w * 0.45;
        const isTank = eq.type === 'tank';
        const baseOffset = isTank ? 0.25 : 1.0;

        if (!isTank) {
          [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ].forEach(([lx, lz]) => {
            const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 1.0, 8), steelDarkMat);
            leg.position.set(lx * radius * 0.7, 0.5, lz * radius * 0.7);
            group.add(leg);
          });
        } else {
          const pad = new THREE.Mesh(new THREE.CylinderGeometry(radius * 1.06, radius * 1.08, 0.25, 28), steelDarkMat);
          pad.position.y = 0.125;
          group.add(pad);
        }

        const bodyH = h - baseOffset - (isTank ? 0.6 : 0.7);
        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, bodyH, 28), glassMat);
        cyl.position.y = baseOffset + bodyH / 2;
        cyl.castShadow = true;
        group.add(cyl);

        const roof = isTank
          ? new THREE.Mesh(new THREE.ConeGeometry(radius * 1.02, 0.75, 28), bodyMat)
          : new THREE.Mesh(
              new THREE.SphereGeometry(radius, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
              bodyMat
            );
        roof.position.y = baseOffset + bodyH + (isTank ? 0.37 : 0);
        group.add(roof);

        if (eq.liquidColor) {
          const liqH = bodyH * (eq.liquidLevel || 0.65);
          const liq = new THREE.Mesh(
            new THREE.CylinderGeometry(radius * 0.92, radius * 0.92, liqH, 24),
            new THREE.MeshStandardMaterial({
              color: eq.liquidColor,
              emissive: eq.liquidColor,
              emissiveIntensity: 0.22
            })
          );
          liq.position.y = baseOffset + liqH / 2;
          group.add(liq);
        }
      }

      // Hitbox for smooth clicking
      const hitMesh = new THREE.Mesh(
        new THREE.BoxGeometry(Math.max(w, 1.8), Math.max(h, 1.6), Math.max(dSize, 1.8)),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      hitMesh.position.y = Math.max(h, 1.6) / 2;
      hitMesh.userData = { kind: 'equipment', item: eq };
      group.add(hitMesh);
      clickableObjects.push(hitMesh);

      // Selection Halo Ring
      const halo = new THREE.Mesh(
        new THREE.RingGeometry(Math.max(w, dSize) * 0.58, Math.max(w, dSize) * 0.72, 32),
        new THREE.MeshBasicMaterial({
          color: '#38bdf8',
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0
        })
      );
      halo.rotation.x = -Math.PI / 2;
      halo.position.y = 0.08;
      group.add(halo);

      scene.add(group);
      equipmentMeshes[eq.id] = { group, halo, data: eq };
      labelAnchors.push({
        id: eq.id,
        kind: 'equipment',
        tag: eq.tag,
        tp: `${eq.opTemp} | ${eq.opPress}`,
        subsystem: eq.subsystem,
        category: eq.category,
        worldPos: new THREE.Vector3(eq.position[0], eq.position[1] + h + 0.85, eq.position[2]),
        item: eq
      });
    });

    // ==================== BUILD CONTROL VALVES ====================
    const valvesGroup = new THREE.Group();
    scene.add(valvesGroup);

    CONTROL_VALVES.forEach((cv) => {
      const vGroup = new THREE.Group();
      vGroup.position.set(...cv.position);

      // Valve body (double-cone globe profile)
      const body1 = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.45, 12), steelLightMat);
      body1.rotation.z = Math.PI / 2;
      body1.position.x = -0.18;
      vGroup.add(body1);

      const body2 = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.45, 12), steelLightMat);
      body2.rotation.z = -Math.PI / 2;
      body2.position.x = 0.18;
      vGroup.add(body2);

      // Stem
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.55, 8), steelLightMat);
      stem.position.y = 0.28;
      vGroup.add(stem);

      // Pneumatic Diaphragm Dome
      const isSDV = cv.tag.startsWith('SDV');
      const dome = new THREE.Mesh(
        new THREE.CylinderGeometry(0.34, 0.34, 0.24, 16),
        isSDV ? sdvActuatorMat : valveActuatorMat
      );
      dome.position.y = 0.62;
      vGroup.add(dome);

      // Hitbox
      const hit = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 10, 10),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      hit.position.y = 0.35;
      hit.userData = { kind: 'valve', item: cv };
      vGroup.add(hit);
      clickableObjects.push(hit);

      // Selection Ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.55, 0.05, 8, 24),
        new THREE.MeshBasicMaterial({ color: '#facc15', transparent: true, opacity: 0 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.3;
      vGroup.add(ring);

      valvesGroup.add(vGroup);
      valveMeshes[cv.id] = { group: vGroup, ring, data: cv };

      labelAnchors.push({
        id: cv.id,
        kind: 'valve',
        tag: `${cv.tag} (${cv.opening})`,
        tp: `${cv.temp} | ${cv.press}`,
        subsystem: cv.subsystem,
        worldPos: new THREE.Vector3(cv.position[0], cv.position[1] + 1.05, cv.position[2]),
        item: cv
      });
    });

    // ==================== BUILD PIPELINES ====================
    PIPELINES.forEach((pipe) => {
      const vecPoints = pipe.points.map((p) => new THREE.Vector3(...p));
      const curve = new THREE.CatmullRomCurve3(vecPoints, false, 'catmullrom', 0.08);

      const tubeGeo = new THREE.TubeGeometry(curve, 48, 0.14, 10, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: pipe.color,
        emissive: pipe.color,
        emissiveIntensity: 0.18,
        roughness: 0.35,
        metalness: 0.4
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      tubeMesh.userData = { kind: 'pipeline', item: pipe };
      scene.add(tubeMesh);
      clickableObjects.push(tubeMesh);
      pipelineMeshes[pipe.id] = { mesh: tubeMesh, material: tubeMat, data: pipe };

      // Flow Particles along pipeline
      const particleCount = 4;
      for (let i = 0; i < particleCount; i++) {
        const pMesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.21, 10, 10),
          new THREE.MeshBasicMaterial({ color: '#ffffff' })
        );
        scene.add(pMesh);
        flowParticles.push({
          mesh: pMesh,
          curve,
          t: i / particleCount,
          speed: 0.16 + (i % 2) * 0.03
        });
      }

      // Midpoint label anchor for Pipeline T/P & Purpose
      const midPoint = curve.getPoint(0.5);
      labelAnchors.push({
        id: pipe.id,
        kind: 'pipeline',
        tag: pipe.tag,
        tp: `${pipe.temp} | ${pipe.press}`,
        subsystem: pipe.subsystem,
        worldPos: new THREE.Vector3(midPoint.x, midPoint.y + 0.55, midPoint.z),
        item: pipe
      });
    });

    // ==================== BUILD INSTRUMENT SIGNAL LINES ====================
    const signalsGroup = new THREE.Group();
    scene.add(signalsGroup);

    INSTRUMENT_SIGNALS.forEach((sig) => {
      const fromEq = EQUIPMENTS.find((e) => e.id === sig.from);
      const toValve = CONTROL_VALVES.find((v) => v.id === sig.toValve);
      const toEq = EQUIPMENTS.find((e) => e.id === sig.toEquipment);

      if (!fromEq || (!toValve && !toEq)) return;

      const startPos = new THREE.Vector3(
        fromEq.position[0],
        fromEq.position[1] + fromEq.size[1] * 0.72,
        fromEq.position[2]
      );
      const endPos = toValve
        ? new THREE.Vector3(toValve.position[0], toValve.position[1] + 0.75, toValve.position[2])
        : new THREE.Vector3(toEq.position[0], toEq.position[1] + 1.3, toEq.position[2]);

      const midPos = startPos.clone().lerp(endPos, 0.5);
      midPos.y += 2.4;

      // Transmitter Bubble on Source Equipment
      const txSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 12, 12),
        new THREE.MeshStandardMaterial({
          color: '#38bdf8',
          emissive: '#0284c7',
          emissiveIntensity: 0.65
        })
      );
      txSphere.position.copy(startPos);
      signalsGroup.add(txSphere);

      // Dashed Control Signal Curve
      const curve = new THREE.QuadraticBezierCurve3(startPos, midPos, endPos);
      const pts = curve.getPoints(32);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lineMat = new THREE.LineDashedMaterial({
        color: '#38bdf8',
        dashSize: 0.45,
        gapSize: 0.25,
        transparent: true,
        opacity: 0.85
      });
      const dashedLine = new THREE.Line(lineGeo, lineMat);
      dashedLine.computeLineDistances();
      signalsGroup.add(dashedLine);
      signalLines.push(dashedLine);

      labelAnchors.push({
        id: sig.id,
        kind: 'signal',
        tag: `${sig.loop}: ${sig.setpoint}`,
        tp: sig.type,
        subsystem: fromEq.subsystem,
        worldPos: new THREE.Vector3(midPos.x, midPos.y + 0.35, midPos.z),
        item: sig
      });
    });

    // ==================== POINTER INTERACTION ====================
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let downPos = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      downPos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e) => {
      const dist = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
      if (dist > 6) return; // Ignore drag orbits

      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(clickableObjects, false);
      if (hits.length > 0) {
        const { kind, item } = hits[0].object.userData;
        onSelectItem({ kind, item });
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ==================== ANIMATION LOOP ====================
    let animId;
    const clock = new THREE.Clock();
    let frameCounter = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();
      const {
        selectedItem: sel,
        activeSubsystem: sub,
        layers: curLayers,
        scenario: curScenario,
        isPlaying: playing,
        flowSpeed: speed
      } = stateRef.current;

      // Smooth Camera Flight
      if (cameraGoalRef.current) {
        cameraGoalRef.current.alpha += dt * 2.4;
        const a = Math.min(cameraGoalRef.current.alpha, 1);
        const ease = 1 - Math.pow(1 - a, 3);
        camera.position.lerp(cameraGoalRef.current.pos, ease * 0.18);
        controls.target.lerp(cameraGoalRef.current.target, ease * 0.18);
        if (a >= 1) cameraGoalRef.current = null;
      }

      controls.update();

      // Layer visibility
      valvesGroup.visible = curLayers.valves;
      signalsGroup.visible = curLayers.signals;

      // Rotating impellers / pumps / rollers
      if (playing) {
        rotatingParts.forEach((rp) => {
          rp.mesh.rotation[rp.axis] += dt * rp.speed * speed;
        });

        flowParticles.forEach((fp) => {
          fp.t = (fp.t + dt * fp.speed * speed) % 1;
          const pt = fp.curve.getPoint(fp.t);
          fp.mesh.position.copy(pt);
        });
      }

      // Highlight selected & scenario-affected equipments
      const affectedIds = curScenario?.affectedIds || [];
      Object.values(equipmentMeshes).forEach(({ halo, data }) => {
        const isSelected = sel?.kind === 'equipment' && sel?.item?.id === data.id;
        const isAffected = affectedIds.includes(data.id);
        if (isSelected) {
          halo.material.color.set('#38bdf8');
          halo.material.opacity = 0.85;
          halo.scale.setScalar(1 + Math.sin(elapsed * 5) * 0.06);
        } else if (isAffected) {
          halo.material.color.set(curScenario.severity === 'critical' ? '#ef4444' : '#f59e0b');
          halo.material.opacity = 0.55 + Math.sin(elapsed * 6) * 0.35;
          halo.scale.setScalar(1.05);
        } else {
          halo.material.opacity = 0;
        }
      });

      // Highlight selected control valves
      Object.values(valveMeshes).forEach(({ ring, data }) => {
        const isSelected = sel?.kind === 'valve' && sel?.item?.id === data.id;
        const isAffected = affectedIds.includes(data.id);
        if (isSelected || isAffected) {
          ring.material.color.set(isAffected ? '#ef4444' : '#facc15');
          ring.material.opacity = 0.9;
          ring.scale.setScalar(1 + Math.sin(elapsed * 6) * 0.12);
        } else {
          ring.material.opacity = 0;
        }
      });

      // Highlight selected pipeline
      Object.values(pipelineMeshes).forEach(({ material, data }) => {
        const isSelected = sel?.kind === 'pipeline' && sel?.item?.id === data.id;
        if (isSelected) {
          material.emissive.set('#ffffff');
          material.emissiveIntensity = 0.65 + Math.sin(elapsed * 5) * 0.25;
        } else {
          material.emissive.set(data.color);
          material.emissiveIntensity = sub === 'all' || sub === data.subsystem ? 0.22 : 0.05;
        }
      });

      renderer.render(scene, camera);

      // Update HTML 2D Badge Projections every 3 frames for smooth 60fps performance
      frameCounter++;
      if (frameCounter % 3 === 0) {
        const cw = container.clientWidth;
        const ch = container.clientHeight;
        const nextBadges = [];

        labelAnchors.forEach((anchor) => {
          if (anchor.kind === 'equipment' && !curLayers.labels) return;
          if (anchor.kind === 'valve' && !curLayers.valves) return;
          if (anchor.kind === 'signal' && !curLayers.signals) return;
          if (anchor.kind === 'pipeline' && !curLayers.tpBadges) return;

          // Filter clutter when viewing entire plant unless selected
          const isSelected = sel?.kind === anchor.kind && sel?.item?.id === anchor.id;
          if (!isSelected && sub !== 'all' && anchor.subsystem !== sub) return;

          const dist = camera.position.distanceTo(anchor.worldPos);
          if (!isSelected && dist > 68) return;

          const proj = anchor.worldPos.clone().project(camera);
          if (proj.z > 1) return;

          const sx = (proj.x * 0.5 + 0.5) * cw;
          const sy = (-proj.y * 0.5 + 0.5) * ch;
          if (sx < -40 || sx > cw + 40 || sy < -20 || sy > ch + 20) return;

          nextBadges.push({
            ...anchor,
            x: sx,
            y: sy,
            isSelected,
            isAffected: affectedIds.includes(anchor.id)
          });
        });

        setProjectedBadges(nextBadges);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full select-none">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D Projected Callout Badges */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {projectedBadges.map((b) => {
          let badgeStyle =
            'bg-slate-900/85 border-slate-600/80 text-slate-100 hover:border-sky-400';
          if (b.kind === 'valve') {
            badgeStyle = 'bg-amber-950/90 border-amber-500/80 text-amber-200';
          } else if (b.kind === 'signal') {
            badgeStyle = 'bg-sky-950/90 border-sky-400/80 text-sky-200';
          } else if (b.kind === 'pipeline') {
            badgeStyle = 'bg-emerald-950/90 border-emerald-500/80 text-emerald-200';
          }
          if (b.isAffected) {
            badgeStyle = 'bg-red-950/95 border-red-500 text-red-100 animate-pulse';
          }
          if (b.isSelected) {
            badgeStyle = 'bg-sky-600 border-white text-white shadow-lg shadow-sky-500/40 scale-105 z-20';
          }

          return (
            <button
              key={`${b.kind}-${b.id}`}
              onClick={() => onSelectItem({ kind: b.kind, item: b.item })}
              style={{
                transform: `translate(-50%, -50%) translate(${b.x}px, ${b.y}px)`
              }}
              className={`pointer-events-auto absolute left-0 top-0 px-1.5 py-0.5 rounded border text-[10px] font-semibold tracking-tight whitespace-nowrap backdrop-blur-sm transition-colors ${badgeStyle}`}
            >
              <div>{b.tag}</div>
              {layers.tpBadges && b.tp && (
                <div className="text-[9px] font-mono opacity-90 text-cyan-200">{b.tp}</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
