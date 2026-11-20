import React, { useState, useMemo } from 'react';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Compass,
  Cpu,
  Eye,
  Flame,
  Gauge,
  GitBranch,
  Layers,
  Pause,
  Play,
  Radio,
  RotateCcw,
  Search,
  Sliders,
  Thermometer,
  Wrench
} from 'lucide-react';
import Hexane3DCanvas from './components/Hexane3DCanvas';
import {
  SUBSYSTEMS,
  EQUIPMENTS,
  CONTROL_VALVES,
  INSTRUMENT_SIGNALS,
  PIPELINES,
  DEVIATION_SCENARIOS
} from './data/hexane700Data';

export default function App() {
  const [activeSubsystem, setActiveSubsystem] = useState('all');
  const [selectedItem, setSelectedItem] = useState({
    kind: 'equipment',
    item: EQUIPMENTS.find((e) => e.id === 'T-703')
  });
  const [focusTarget, setFocusTarget] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [leftTab, setLeftTab] = useState('subsystems'); // subsystems | equipments | valves | pipelines | signals
  const [scenarioId, setScenarioId] = useState('normal');
  const [isPlaying, setIsPlaying] = useState(true);
  const [flowSpeed, setFlowSpeed] = useState(1.0);

  const [layers, setLayers] = useState({
    labels: true,
    valves: true,
    signals: true,
    tpBadges: true
  });

  const currentScenario = useMemo(
    () => DEVIATION_SCENARIOS.find((s) => s.id === scenarioId) || DEVIATION_SCENARIOS[0],
    [scenarioId]
  );

  const handleSelectSubsystem = (sub) => {
    setActiveSubsystem(sub.id);
    setFocusTarget({ pos: sub.cameraPos, target: sub.cameraTarget });
  };

  const handleResetView = () => {
    setActiveSubsystem('all');
    setFocusTarget({ pos: [-18, 34, 48], target: [0, 4, 0] });
  };

  const handleSelectEntity = ({ kind, item }) => {
    setSelectedItem({ kind, item });
    if (kind === 'equipment' && item.position) {
      const [x, y, z] = item.position;
      const h = item.size?.[1] || 4;
      setFocusTarget({ pos: [x + 9, y + h * 0.7 + 7, z + 11], target: [x, y + h * 0.45, z] });
    } else if (kind === 'valve' && item.position) {
      const [x, y, z] = item.position;
      setFocusTarget({ pos: [x + 6, y + 6, z + 8], target: [x, y, z] });
    } else if (kind === 'pipeline' && item.points?.length) {
      const mid = item.points[Math.floor(item.points.length / 2)];
      setFocusTarget({ pos: [mid[0] + 8, mid[1] + 9, mid[2] + 11], target: mid });
    } else if (kind === 'signal') {
      const eq = EQUIPMENTS.find((e) => e.id === item.from);
      if (eq) {
        const [x, y, z] = eq.position;
        setFocusTarget({ pos: [x + 9, y + 9, z + 11], target: [x, y + 3, z] });
      }
    }
  };

  const filteredEquipments = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return EQUIPMENTS.filter(
      (e) =>
        (activeSubsystem === 'all' || e.subsystem === activeSubsystem) &&
        (e.tag.toLowerCase().includes(q) ||
          e.name.toLowerCase().includes(q) ||
          e.purpose.toLowerCase().includes(q))
    );
  }, [activeSubsystem, searchQuery]);

  const filteredValves = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return CONTROL_VALVES.filter(
      (v) =>
        (activeSubsystem === 'all' || v.subsystem === activeSubsystem) &&
        (v.tag.toLowerCase().includes(q) ||
          v.loop.toLowerCase().includes(q) ||
          v.service.toLowerCase().includes(q))
    );
  }, [activeSubsystem, searchQuery]);

  const filteredPipelines = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return PIPELINES.filter(
      (p) =>
        (activeSubsystem === 'all' || p.subsystem === activeSubsystem) &&
        (p.tag.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.purpose.toLowerCase().includes(q))
    );
  }, [activeSubsystem, searchQuery]);

  const filteredSignals = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return INSTRUMENT_SIGNALS.filter(
      (s) =>
        s.loop.toLowerCase().includes(q) ||
        s.from.toLowerCase().includes(q) ||
        s.logic.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const toggleLayer = (key) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-[#060b14] text-slate-100 overflow-hidden">
      {/* ==================== TOP HEADER BAR ==================== */}
      <header className="h-14 px-4 bg-slate-950/95 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-wide text-white">
                LSP — SECTION 700 HEXANE RECOVERY (3D DIGITAL TWIN v2.0)
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-sky-500/20 text-sky-300 border border-sky-500/40">
                PFD / P&ID / INSTRUMENTATION
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Long Son Petrochemicals • T-703 / T-704 / T-761 • Pumps, Heat Exchangers, Control Valves, Instrument Loops & Line T/P
            </p>
          </div>
        </div>

        {/* 3D Layer Toggles */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => toggleLayer('labels')}
            className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition ${
              layers.labels
                ? 'bg-sky-600/30 text-sky-200 border border-sky-500/50'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Thiết bị
          </button>
          <button
            onClick={() => toggleLayer('valves')}
            className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition ${
              layers.valves
                ? 'bg-amber-600/30 text-amber-200 border border-amber-500/50'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            Van ĐK ({CONTROL_VALVES.length})
          </button>
          <button
            onClick={() => toggleLayer('signals')}
            className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition ${
              layers.signals
                ? 'bg-cyan-600/30 text-cyan-200 border border-cyan-500/50'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            Tín hiệu Instrument
          </button>
          <button
            onClick={() => toggleLayer('tpBadges')}
            className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition ${
              layers.tpBadges
                ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/50'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Thermometer className="w-3.5 h-3.5" />
            Nhiệt độ & Áp suất
          </button>
        </div>

        {/* Simulation Playback & Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium flex items-center gap-1.5"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            {isPlaying ? 'Tạm dừng' : 'Chạy dòng'}
          </button>
          <div className="hidden xl:flex items-center gap-1.5 bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-400">Tốc độ:</span>
            <input
              type="range"
              min="0.3"
              max="2.5"
              step="0.1"
              value={flowSpeed}
              onChange={(e) => setFlowSpeed(parseFloat(e.target.value))}
              className="w-16 accent-sky-500"
            />
            <span className="font-mono text-sky-300">{flowSpeed.toFixed(1)}x</span>
          </div>
          <button
            onClick={handleResetView}
            className="px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Toàn cảnh
          </button>
        </div>
      </header>

      {/* ==================== MAIN WORKSPACE ==================== */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* LEFT PANEL: NAVIGATION & ASSET DIRECTORY */}
        <aside className="w-80 bg-slate-950/90 border-r border-slate-800 flex flex-col shrink-0 z-20 backdrop-blur-md">
          {/* Search Bar */}
          <div className="p-2.5 border-b border-slate-800">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm Pump, E-703, PV-721, PIC-721, tuyến..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-md text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* Directory Tabs */}
          <div className="grid grid-cols-5 border-b border-slate-800 bg-slate-900/60 text-[10px] font-semibold">
            {[
              { id: 'subsystems', label: '8 Cụm' },
              { id: 'equipments', label: `TB (${EQUIPMENTS.length})` },
              { id: 'valves', label: `Van (${CONTROL_VALVES.length})` },
              { id: 'pipelines', label: `Ống (${PIPELINES.length})` },
              { id: 'signals', label: `Loop (${INSTRUMENT_SIGNALS.length})` }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setLeftTab(t.id)}
                className={`py-2 text-center border-b-2 transition ${
                  leftTab === t.id
                    ? 'border-sky-400 text-sky-300 bg-sky-950/30'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Directory Content */}
          <div className="flex-1 overflow-y-auto p-2.5 space-y-2">
            {leftTab === 'subsystems' && (
              <>
                <button
                  onClick={handleResetView}
                  className={`w-full text-left p-2.5 rounded-lg border transition ${
                    activeSubsystem === 'all'
                      ? 'bg-sky-950/60 border-sky-500 text-white'
                      : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>Toàn bộ phân xưởng Section 700</span>
                    <Compass className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Hiển thị đầy đủ 8 cụm công nghệ, bơm, thiết bị trao đổi nhiệt, van điều khiển & tín hiệu Instrument.
                  </p>
                </button>

                {SUBSYSTEMS.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSelectSubsystem(sub)}
                    className={`w-full text-left p-2.5 rounded-lg border transition ${
                      activeSubsystem === sub.id
                        ? 'bg-slate-800/95 border-sky-400 shadow-md'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: sub.color }}
                      />
                      <span className="text-xs font-bold text-slate-100">{sub.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{sub.summary}</p>
                  </button>
                ))}
              </>
            )}

            {leftTab === 'equipments' &&
              filteredEquipments.map((eq) => {
                const isSel = selectedItem?.kind === 'equipment' && selectedItem?.item?.id === eq.id;
                const badgeColor =
                  eq.category === 'pump'
                    ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                    : eq.category === 'exchanger'
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
                return (
                  <button
                    key={eq.id}
                    onClick={() => handleSelectEntity({ kind: 'equipment', item: eq })}
                    className={`w-full text-left p-2 rounded-lg border transition ${
                      isSel
                        ? 'bg-sky-950/70 border-sky-400'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-white">{eq.tag}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase border ${badgeColor}`}>
                        {eq.category}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 truncate">{eq.name}</div>
                    <div className="flex items-center gap-3 mt-1 text-[10px] font-mono text-cyan-300">
                      <span>T: {eq.opTemp}</span>
                      <span>P: {eq.opPress}</span>
                    </div>
                  </button>
                );
              })}

            {leftTab === 'valves' &&
              filteredValves.map((cv) => {
                const isSel = selectedItem?.kind === 'valve' && selectedItem?.item?.id === cv.id;
                return (
                  <button
                    key={cv.id}
                    onClick={() => handleSelectEntity({ kind: 'valve', item: cv })}
                    className={`w-full text-left p-2 rounded-lg border transition ${
                      isSel
                        ? 'bg-amber-950/70 border-amber-400'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300">{cv.tag}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-200">
                        {cv.loop} • {cv.opening}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">{cv.service}</div>
                    <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-slate-400">
                      <span>
                        {cv.temp} | {cv.press}
                      </span>
                      <span className="text-rose-300">{cv.esd !== 'None' ? cv.esd : `Fail: ${cv.failSafe}`}</span>
                    </div>
                  </button>
                );
              })}

            {leftTab === 'pipelines' &&
              filteredPipelines.map((pipe) => {
                const isSel = selectedItem?.kind === 'pipeline' && selectedItem?.item?.id === pipe.id;
                return (
                  <button
                    key={pipe.id}
                    onClick={() => handleSelectEntity({ kind: 'pipeline', item: pipe })}
                    className={`w-full text-left p-2 rounded-lg border transition ${
                      isSel
                        ? 'bg-emerald-950/70 border-emerald-400'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-300">{pipe.tag}</span>
                      <span className="text-[10px] font-mono text-cyan-300">{pipe.temp}</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-200 mt-0.5">{pipe.name}</div>
                    <div className="text-[10px] font-mono text-amber-300 mt-0.5">Áp suất: {pipe.press}</div>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">{pipe.purpose}</p>
                  </button>
                );
              })}

            {leftTab === 'signals' &&
              filteredSignals.map((sig) => {
                const isSel = selectedItem?.kind === 'signal' && selectedItem?.item?.id === sig.id;
                return (
                  <button
                    key={sig.id}
                    onClick={() => handleSelectEntity({ kind: 'signal', item: sig })}
                    className={`w-full text-left p-2 rounded-lg border transition ${
                      isSel
                        ? 'bg-cyan-950/70 border-cyan-400'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-300">{sig.loop}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-900/50 text-sky-200">
                        SP: {sig.setpoint}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-200 mt-0.5">
                      {sig.from} → {sig.toValve || sig.toEquipment}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">{sig.logic}</p>
                  </button>
                );
              })}
          </div>
        </aside>

        {/* CENTER 3D VIEWPORT */}
        <main className="flex-1 relative">
          <Hexane3DCanvas
            selectedItem={selectedItem}
            onSelectItem={setSelectedItem}
            activeSubsystem={activeSubsystem}
            focusTarget={focusTarget}
            layers={layers}
            scenario={currentScenario}
            isPlaying={isPlaying}
            flowSpeed={flowSpeed}
          />

          {/* Floating Legend & Quick Tip */}
          <div className="absolute bottom-3 left-3 bg-slate-950/85 border border-slate-800 rounded-lg px-3 py-2 text-[11px] text-slate-300 backdrop-blur-md flex flex-wrap items-center gap-4 pointer-events-none">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-sky-500 inline-block" /> Tháp / Bồn chứa
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block" /> Bơm (Pump)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block" /> Trao đổi nhiệt (HX)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Van điều khiển
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 border-t-2 border-dashed border-sky-400 inline-block" /> Tín hiệu Instrument
            </span>
            <span className="text-slate-400 hidden lg:inline">
              • Click trực tiếp vào Thiết bị, Bơm, Trao đổi nhiệt, Van hoặc Đường ống 3D để xem mục đích & T/P
            </span>
          </div>
        </main>

        {/* RIGHT PANEL: ENGINEERING INSPECTOR & SOP DEVIATIONS */}
        <aside className="w-96 bg-slate-950/95 border-l border-slate-800 flex flex-col shrink-0 z-20 overflow-y-auto">
          {/* Selected Object Header */}
          <div className="p-3.5 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/40">
                {selectedItem?.kind === 'equipment' && `Thiết bị (${selectedItem.item.category})`}
                {selectedItem?.kind === 'valve' && 'Van điều khiển (Control Valve)'}
                {selectedItem?.kind === 'pipeline' && 'Tuyến đường ống (Process Line)'}
                {selectedItem?.kind === 'signal' && 'Vòng điều khiển (Instrument Loop)'}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {selectedItem?.item?.subsystem?.toUpperCase()}
              </span>
            </div>

            <h2 className="text-base font-bold text-white mt-1.5">
              {selectedItem?.item?.tag || selectedItem?.item?.loop}
            </h2>
            <p className="text-xs text-slate-300">
              {selectedItem?.item?.name || selectedItem?.item?.service || selectedItem?.item?.type}
            </p>

            {/* Temperature & Pressure KPI Cards */}
            {(selectedItem?.item?.opTemp ||
              selectedItem?.item?.temp ||
              selectedItem?.item?.setpoint) && (
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Thermometer className="w-3 h-3 text-rose-400" />
                    {selectedItem?.kind === 'signal' ? 'Giá trị đặt (Setpoint)' : 'Nhiệt độ vận hành'}
                  </div>
                  <div className="text-xs font-bold font-mono text-rose-300 mt-0.5">
                    {selectedItem?.item?.opTemp ||
                      selectedItem?.item?.temp ||
                      selectedItem?.item?.setpoint}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Gauge className="w-3 h-3 text-cyan-400" />
                    {selectedItem?.kind === 'signal' ? 'Thiết bị chấp hành' : 'Áp suất vận hành'}
                  </div>
                  <div className="text-xs font-bold font-mono text-cyan-300 mt-0.5">
                    {selectedItem?.item?.opPress ||
                      selectedItem?.item?.press ||
                      selectedItem?.item?.toValve ||
                      selectedItem?.item?.toEquipment}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Engineering Content */}
          <div className="p-3.5 space-y-3.5 border-b border-slate-800">
            {/* 1. Equipment Details */}
            {selectedItem?.kind === 'equipment' && (
              <>
                <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-800/50">
                  <div className="text-[11px] font-bold text-sky-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Mục đích & Chức năng công nghệ
                  </div>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                    {selectedItem.item.purpose}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" /> Nguyên lý cấu tạo & Vận hành
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {selectedItem.item.principle}
                  </p>
                </div>

                {selectedItem.item.params?.length > 0 && (
                  <div>
                    <div className="text-[11px] font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" /> Tín hiệu Instrument & Giới hạn SOL
                    </div>
                    <div className="space-y-1.5">
                      {selectedItem.item.params.map((p, idx) => (
                        <div
                          key={idx}
                          className="p-2 rounded bg-slate-900 border border-slate-800 text-xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-bold text-cyan-300">{p.tag}</span>
                            <span className="font-mono text-emerald-300">{p.normal}</span>
                          </div>
                          <div className="text-[11px] text-slate-300 mt-0.5">{p.desc}</div>
                          <div className="text-[10px] text-amber-300/90 mt-0.5 font-mono">{p.limits}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* 2. Pipeline Details (Purpose + T + P + Medium + Valves) */}
            {selectedItem?.kind === 'pipeline' && (
              <>
                <div className="p-2.5 rounded-lg bg-emerald-950/35 border border-emerald-700/50">
                  <div className="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5" /> Mục đích của tuyến đường ống này
                  </div>
                  <p className="text-xs text-slate-100 mt-1 leading-relaxed">
                    {selectedItem.item.purpose}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="text-[11px] font-bold text-cyan-300">Lưu chất & Thành phần pha</div>
                  <p className="text-xs text-slate-200">{selectedItem.item.medium}</p>
                </div>

                {selectedItem.item.valves?.length > 0 && (
                  <div>
                    <div className="text-[11px] font-bold text-amber-300 mb-1.5">
                      Van điều khiển lắp đặt trên tuyến:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.item.valves.map((vId) => {
                        const vObj = CONTROL_VALVES.find((v) => v.id === vId);
                        return (
                          <button
                            key={vId}
                            onClick={() => vObj && handleSelectEntity({ kind: 'valve', item: vObj })}
                            className="px-2 py-1 rounded bg-amber-950/70 border border-amber-500/50 text-xs font-mono text-amber-200 hover:bg-amber-900"
                          >
                            {vObj ? `${vObj.tag} (${vObj.opening})` : vId}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* 3. Control Valve Details */}
            {selectedItem?.kind === 'valve' && (
              <>
                <div className="p-2.5 rounded-lg bg-amber-950/35 border border-amber-700/50 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Vòng điều khiển (Loop):</span>
                    <span className="font-mono font-bold text-cyan-300">{selectedItem.item.loop}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Độ mở hiện tại:</span>
                    <span className="font-mono font-bold text-amber-300">{selectedItem.item.opening}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Vị trí an toàn (Fail-Safe):</span>
                    <span className="font-mono font-bold text-slate-200">{selectedItem.item.failSafe}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Khóa liên động ESD:</span>
                    <span className="font-mono font-bold text-rose-400">{selectedItem.item.esd}</span>
                  </div>
                </div>
              </>
            )}

            {/* 4. Instrument Signal Details */}
            {selectedItem?.kind === 'signal' && (
              <div className="p-2.5 rounded-lg bg-cyan-950/35 border border-cyan-700/50 space-y-1.5">
                <div className="text-[11px] font-bold text-cyan-300">Logic điều khiển & Liên động DCS/ESD</div>
                <p className="text-xs text-slate-200 leading-relaxed">{selectedItem.item.logic}</p>
                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  Tín hiệu: {selectedItem.item.from} ➔ {selectedItem.item.toValve || selectedItem.item.toEquipment}
                </div>
              </div>
            )}
          </div>

          {/* ==================== SOP DEVIATION SIMULATOR ==================== */}
          <div className="p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-400" />
                Mô phỏng sự cố & Xử lý SOP
              </span>
            </div>

            <select
              value={scenarioId}
              onChange={(e) => setScenarioId(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
            >
              {DEVIATION_SCENARIOS.map((sc) => (
                <option key={sc.id} value={sc.id}>
                  {sc.title}
                </option>
              ))}
            </select>

            <div
              className={`p-3 rounded-lg border space-y-2 ${
                currentScenario.severity === 'critical'
                  ? 'bg-red-950/40 border-red-700/70'
                  : currentScenario.severity === 'warning'
                  ? 'bg-amber-950/40 border-amber-700/70'
                  : 'bg-emerald-950/30 border-emerald-800/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wide flex items-center gap-1.5">
                  {currentScenario.severity === 'normal' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  )}
                  {currentScenario.tag}
                </span>
              </div>

              <div className="text-[11px] text-slate-300">
                <strong className="text-slate-100">Nguyên nhân:</strong> {currentScenario.cause}
              </div>
              <div className="text-[11px] text-slate-300">
                <strong className="text-slate-100">Hậu quả:</strong> {currentScenario.consequence}
              </div>

              <div className="pt-1 border-t border-slate-800/80">
                <div className="text-[11px] font-bold text-sky-300 mb-1">
                  Hành động khắc phục (FO & Boardman):
                </div>
                <ul className="space-y-1 text-[11px] text-slate-200 list-disc pl-4">
                  {currentScenario.actions.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
