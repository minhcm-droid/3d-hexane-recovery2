export const SUBSYSTEMS = [
  {
    id: 'washing',
    code: '720',
    name: '1. Hexane Washing (Tẩy rửa Hexane)',
    color: '#06b6d4',
    cameraPos: [-32, 20, 32],
    cameraTarget: [-29, 4, 10],
    summary:
      'Dung dịch Mother Liquor (ML) từ D-301 được rửa bằng NaOH 25% và nước DMW tại M-721/D-721 (60°C, pH > 12) để khử xúc tác dư (Ti, Al) và Chloride, sau đó rửa lại bằng DMW tại M-722/D-722 (pH 7–8) trước khi cấp sang bồn trộn tiếp tuyến D-701.'
  },
  {
    id: 'stripping',
    code: '703',
    name: '2. Hexane Stripping (Chưng cất Hexane)',
    color: '#3b82f6',
    cameraPos: [-12, 24, 28],
    cameraTarget: [-10, 7, -4],
    summary:
      'Hexane thô từ D-701 được bơm P-702A/B cấp vào tháp 10 đĩa T-703 (đỉnh 3.0 kg/cm²G, đáy 120°C nhờ Reboiler tuần hoàn cưỡng bức E-703A/B & P-705A/B). Hơi Hexane bay lên đỉnh; đáy giữ nồng độ Low Polymer 5–10 wt%.'
  },
  {
    id: 'lowpolymer',
    code: '710/761',
    name: '3. Low Polymer & Flaker (Xử lý LP & Tạo vảy)',
    color: '#f97316',
    cameraPos: [10, 22, 34],
    cameraTarget: [9, 5, 11],
    summary:
      'LP 10 wt% từ đáy T-703 được P-711A/B nén lên 22 kg/cm²G, gia nhiệt qua E-711 (200–220°C) và tuyến ống gia nhiệt 75m vào D-711 (3 kg/cm²G, 160°C), tiếp tục gia nhiệt qua E-712 (180°C) vào bồn chân không D-712 (-0.4 kg/cm²G, bơm C-701), rồi hóa rắn tạo vảy tại Drum Flaker M-761A/B.'
  },
  {
    id: 'purification',
    code: '704',
    name: '4. Hexane Dehydration (Tách nước Hexane)',
    color: '#10b981',
    cameraPos: [2, 24, -26],
    cameraTarget: [2, 6, -15],
    summary:
      'Hơi Hexane đỉnh T-703/T-704 ngưng tụ qua E-704 (72–76°C) và bình ngưng lạnh E-708 (5°C) vào D-702 (0.2 kg/cm²G, 42°C). Nước lắng ở boot leg xả ra PIT-702; Hexane bão hòa nước (~250 ppm) bơm qua P-706A/B lên tháp chưng cất đẳng phí T-704 (đáy 84°C, E-705), làm mát qua E-706 xuống 40–43°C (nước ≤ 10 ppm).'
  },
  {
    id: 'distribution',
    code: '708',
    name: '5. Pure Hexane Distribution (Phân phối Hexane)',
    color: '#22c55e',
    cameraPos: [28, 20, -24],
    cameraTarget: [26, 5, -15],
    summary:
      'Hexane tinh khiết từ TK-702 (≤ 10 ppm nước, phủ N2 200–400 mmAq) được bơm P-708A/B nén lên 12 kg/cm²G qua tháp sấy rây phân tử 4A D-703A/B (giảm ẩm xuống < 5 ppm) và lọc F-704A/B cấp cho khu vực phản ứng (Sec. 100/200/300) và tuyến hạ áp 4 kg/cm²G.'
  },
  {
    id: 'slop',
    code: '750',
    name: '6. Waste Hexane Recovery (Thu hồi Hexane thải)',
    color: '#eab308',
    cameraPos: [-32, 18, -24],
    cameraTarget: [-29, 4, -15],
    summary:
      'Hexane thải lấy mẫu từ D-751/D-752 được đẩy bằng khí N2 về D-753 (0.2 kg/cm²G, 90°C), khử xúc tác bằng DMW, trung hòa bằng NaOH (pH ~ 8) và sục hơi trực tiếp LS. Hơi ngưng tại E-751/E-752 vào D-754 rồi bơm P-751 thu hồi về TK-703 / D-701.'
  },
  {
    id: 'oligomer',
    code: '760',
    name: '7. Oligomer Cut System (Hệ thống tách Oligomer)',
    color: '#a855f7',
    cameraPos: [30, 22, 16],
    cameraTarget: [28, 6, 4],
    summary:
      'Hexane chứa oligomer từ D-718/D-761 được bơm P-761A/B vào tháp T-761 (1.5 kg/cm²G, đáy 175–180°C nhờ E-761). Đáy tách 90% Oligomer làm mát qua E-764 về D-763; khay số 10 rút dòng cạnh làm mát qua E-765 về D-764 (Oligomer < 2.5 wt%, Bu-1 < 0.03 mol%) bơm P-764A/B về TK-703.'
  },
  {
    id: 'phtreatment',
    code: '780',
    name: '8. pH Treatment Unit (Xử lý trung hòa pH)',
    color: '#ec4899',
    cameraPos: [-12, 16, 32],
    cameraTarget: [-14, 3, 21],
    summary:
      'Nước thải kiềm (pH > 12) từ D-721 được trung hòa 2 bậc bằng HCl 18% từ bồn D-781: Bậc 1 tại D-782 giảm pH về ~10 (AIC-781 điều khiển P-782A/B); Bậc 2 tại D-783 đưa pH về 6–8 (AIC-782 điều khiển P-784A/B) xả qua PIT-780 tới hồ API S-931A/B.'
  }
];

export const EQUIPMENTS = [
  // ==================== 1. HEXANE WASHING ====================
  {
    id: 'M-721',
    tag: 'M-721',
    name: 'Hexane & NaOH Contactor',
    category: 'vessel',
    subsystem: 'washing',
    type: 'agitator_vessel',
    position: [-36, 0, 13],
    size: [2.2, 4.4, 2.2],
    color: '#0891b2',
    liquidColor: '#22d3ee',
    liquidLevel: 0.76,
    opTemp: '60 °C',
    opPress: '1.0 kg/cm²G',
    purpose: 'Khuấy trộn phản ứng giữa Mother Liquor (ML) với Xút (NaOH) và DMW để trung hòa axit HCl và khử cặn xúc tác (Ti, Al), giữ màu Low Polymer trắng sáng.',
    principle: 'Cánh khuấy cơ khí kết hợp sục khí Nitơ áp suất thấp (LN) tăng hiệu quả trộn; phun hơi LS (TV-705) duy trì 60°C để ngăn LP kết tinh và tăng độ hòa tan muối NaCl trong pha nước (pH > 12).',
    params: [
      { tag: 'TIC-705', desc: 'Nhiệt độ vận hành M-721 (hơi LS)', normal: '60 °C', limits: 'L: 50°C | H: 70°C (Tránh kết tinh LP <60°C)' },
      { tag: 'FIC-701', desc: 'Lưu lượng DMW cấp vào M-721', normal: '2.4 t/h', limits: 'L Alarm: 1.8 t/h' },
      { tag: 'FIC-703', desc: 'Lưu lượng Caustic Soda (NaOH)', normal: '35 kg/h', limits: 'Duy trì pH nước thải D-721 > 12' }
    ]
  },
  {
    id: 'D-721',
    tag: 'D-721',
    name: 'Hexane & NaOH Separator',
    category: 'vessel',
    subsystem: 'washing',
    type: 'horizontal_drum',
    position: [-30, 0, 13],
    size: [5.0, 2.3, 2.3],
    color: '#0e7490',
    liquidColor: '#38bdf8',
    liquidLevel: 0.68,
    opTemp: '60 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Tách trọng lực 3 lớp pha: lớp trên LP+Hexane tràn sang M-722, lớp giữa (Interface) hồi lưu về M-721 chống đông LP, lớp đáy nước thải kiềm (pH > 12) xả sang cụm xử lý pH.',
    principle: 'Dựa trên chênh lệch tỷ trọng ở 0.2 kg/cm²G, 60°C. Đường giao diện (Interface line) rút hỗn hợp nước-hexane tại mặt phân cách đưa về M-721 ngăn lớp LP đông đặc gây nghẽn.',
    params: [
      { tag: 'PIC-701', desc: 'Áp suất đỉnh D-721 / D-722', normal: '0.20 kg/cm²G', limits: 'L: 0.1 | H: 0.5 kg/cm²G' },
      { tag: 'LIC-701', desc: 'Mức giao diện nước đáy D-721', normal: '2350 mm', limits: 'L: 1420 | H: 3283 mm' },
      { tag: 'LI-702', desc: 'Mức tràn Hexane + LP (~60%)', normal: '4480 mm', limits: 'HLL: 4545 mm' }
    ]
  },
  {
    id: 'E-721',
    tag: 'E-721',
    name: 'Separator Cooler',
    category: 'exchanger',
    subsystem: 'washing',
    type: 'exchanger',
    position: [-33, 0, 17],
    size: [3.4, 1.5, 1.5],
    color: '#0284c7',
    opTemp: '60 → 37 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Làm mát dòng hơi thoát chứa Hexane từ đỉnh D-721 và D-722 xuống 37°C bằng nước làm mát (CWS/CWR).',
    principle: 'Thiết bị trao đổi nhiệt ống chùm giải nhiệt sơ bộ hơi Hexane trước khi đưa qua bình ngưng sâu E-722.',
    params: [
      { tag: 'TI-E721', desc: 'Nhiệt độ đầu ra E-721', normal: '37 °C', limits: 'Cooling Water (CWS/CWR)' }
    ]
  },
  {
    id: 'E-722',
    tag: 'E-722 & D-723',
    name: 'Separator Condenser & Drain Pot',
    category: 'exchanger',
    subsystem: 'washing',
    type: 'exchanger',
    position: [-28, 0, 17],
    size: [3.4, 1.5, 1.5],
    color: '#0369a1',
    opTemp: '37 → 5 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Ngưng tụ sâu hơi Hexane bằng nước muối lạnh Brine (BRS/BRR) xuống 5°C thu hồi vào bồn xả D-723, khí không ngưng xả ra LF.',
    principle: 'Hạ nhiệt độ hơi thoát xuống 5°C nhằm giảm tối đa tổn thất hơi Hexane ra hệ thống đuốc áp thấp (LF).',
    params: [
      { tag: 'TI-E722', desc: 'Nhiệt độ ngưng tụ bằng Brine', normal: '5 °C', limits: 'Tránh đóng băng nước trong ống' }
    ]
  },
  {
    id: 'M-722',
    tag: 'M-722',
    name: 'Hexane & Water Contactor',
    category: 'vessel',
    subsystem: 'washing',
    type: 'agitator_vessel',
    position: [-36, 0, 6],
    size: [2.2, 4.4, 2.2],
    color: '#0891b2',
    liquidColor: '#67e8f9',
    liquidLevel: 0.72,
    opTemp: '60 °C',
    opPress: '1.0 kg/cm²G',
    purpose: 'Rửa sạch xút dư (NaOH) cuốn theo trong dòng Hexane + LP bằng nước khử khoáng DMW.',
    principle: 'Khuấy trộn cơ khí kết hợp sục khí LN và gia nhiệt hơi LS (TV-706) ở 60°C, đưa pH pha nước về 7–8 để chứng tỏ xút đã được rửa sạch hoàn toàn.',
    params: [
      { tag: 'TIC-706', desc: 'Nhiệt độ vận hành M-722 (hơi LS)', normal: '60 °C', limits: 'L: 50°C | H: 70°C' },
      { tag: 'FIC-702', desc: 'Lưu lượng DMW rửa sạch xút', normal: '1.5 t/h', limits: 'L Alarm: 0.9 t/h' }
    ]
  },
  {
    id: 'D-722',
    tag: 'D-722',
    name: 'Hexane & Water Separator',
    category: 'vessel',
    subsystem: 'washing',
    type: 'horizontal_drum',
    position: [-30, 0, 6],
    size: [5.0, 2.3, 2.3],
    color: '#0e7490',
    liquidColor: '#7dd3fc',
    liquidLevel: 0.65,
    opTemp: '60 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Tách pha nước rửa (pH 7–8) tuần hoàn về M-721 qua LIC-703 và tách Hexane sạch chuyển sang D-701.',
    principle: 'Phân lớp trọng lực ở 0.2 kg/cm²G, 60°C. Kiểm soát chặt mức nước (LIC-703) để ngăn nước lọt sang T-703 gây tụt nhiệt độ đáy tháp chưng cất.',
    params: [
      { tag: 'LIC-703', desc: 'Mức nước tuần hoàn về M-721', normal: '2150 mm', limits: 'pH nước tuần hoàn: 7 – 8' },
      { tag: 'LIC-704', desc: 'Mức Hexane cấp sang D-701', normal: '4290 mm', limits: 'L: 3830 | H: 4750 mm' }
    ]
  },
  {
    id: 'P-721A/B',
    tag: 'P-721A/B',
    name: 'Washed Hexane Pump',
    category: 'pump',
    subsystem: 'washing',
    type: 'pump',
    position: [-24, 0, 6],
    size: [2.0, 1.4, 1.6],
    color: '#0284c7',
    opTemp: '60 °C',
    opPress: '0.2 → 1.8 kg/cm²G',
    purpose: 'Bơm vận chuyển Hexane thô đã rửa sạch từ D-722 sang bồn chứa Crude Hexane Feed Drum D-701.',
    principle: 'Bơm ly tâm 2 tổ máy (1 chạy / 1 dự phòng), duy trì lưu lượng ổn định qua van điều khiển mức LV-704.',
    params: [
      { tag: 'XL-P721A/B', desc: 'Trạng thái bơm rửa Hexane', normal: '1 RUN / 1 STBY', limits: 'Auto-standby interlock' }
    ]
  },
  {
    id: 'D-701',
    tag: 'D-701',
    name: 'Crude Hexane Feed Drum',
    category: 'vessel',
    subsystem: 'washing',
    type: 'vertical_drum',
    position: [-20, 0, -2],
    size: [3.2, 7.6, 3.2],
    color: '#0369a1',
    liquidColor: '#38bdf8',
    liquidLevel: 0.62,
    opTemp: '60 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Bồn đệm chứa Hexane thô ổn định nhập liệu cho tháp T-703, chống vón cục Low Polymer.',
    principle: 'Thiết kế 3 vòi phun nhập liệu tiếp tuyến đặt cách nhau 120° (góc nghiêng 30°) tạo dòng xoáy tròn liên tục bên trong bồn, tăng hiệu quả khuấy trộn và ngăn LP độ nhớt cao kết cục.',
    params: [
      { tag: 'LI-711', desc: 'Mức chất lỏng trong D-701', normal: '4450 mm', limits: 'L: 890 | H: 8010 mm' }
    ]
  },

  // ==================== 2. HEXANE STRIPPING ====================
  {
    id: 'P-702A/B',
    tag: 'P-702A/B',
    name: 'Crude Hexane Feed Pump',
    category: 'pump',
    subsystem: 'stripping',
    type: 'pump',
    position: [-15, 0, -2],
    size: [2.0, 1.4, 1.6],
    color: '#2563eb',
    opTemp: '60 °C',
    opPress: '0.2 → 5.2 kg/cm²G',
    purpose: 'Bơm tăng áp cấp Hexane thô từ D-701 vào tháp chưng cất T-703 qua van điều khiển lưu lượng FV-712.',
    principle: 'Nén dòng lỏng vượt áp suất vận hành 3.0 kg/cm²G của tháp T-703; tự động dừng khi kích hoạt ESD I-705.',
    params: [
      { tag: 'FIC-712', desc: 'Lưu lượng cấp liệu vào T-703', normal: '45.0 t/h', limits: 'ESD I-705 stops P-702A/B' }
    ]
  },
  {
    id: 'P-703A/B',
    tag: 'P-703A/B',
    name: 'Make-up Hexane Feed Pump',
    category: 'pump',
    subsystem: 'stripping',
    type: 'pump',
    position: [-15, 0, -7],
    size: [2.0, 1.4, 1.6],
    color: '#1d4ed8',
    opTemp: '43 °C',
    opPress: '0.2 → 5.0 kg/cm²G',
    purpose: 'Bơm Hexane bổ sung (Make-up) từ bể TK-703 vào D-701/T-703 (và làm loãng đáy T-703 khi độ nhớt LP tăng cao).',
    principle: 'Điều chỉnh lưu lượng qua van FV-713; dừng khẩn cấp khi kích hoạt ESD I-701.',
    params: [
      { tag: 'FIC-713', desc: 'Lưu lượng Hexane bổ sung từ TK-703', normal: '2.5 t/h', limits: 'ESD I-701 stops P-703' }
    ]
  },
  {
    id: 'T-703',
    tag: 'T-703',
    name: 'Hexane Stripper Tower (10 Sieve Trays)',
    category: 'tower',
    subsystem: 'stripping',
    type: 'tower',
    position: [-10, 0, -4],
    size: [3.4, 16.5, 3.4],
    color: '#1d4ed8',
    liquidColor: '#60a5fa',
    liquidLevel: 0.45,
    opTemp: 'Đáy 120 °C / Đỉnh 98 °C',
    opPress: '3.0 kg/cm²G',
    purpose: 'Tháp chưng cất 10 đĩa sàng (Sieve trays) tách hơi Hexane tinh khiết lên đỉnh và cô đặc Low Polymer ở đáy tới 5–10 wt%.',
    principle: 'Duy trì đáy 120°C (trên điểm nóng chảy LP 90–115°C để tránh đông cục), áp suất đỉnh 3.0 kg/cm²G (PIC-721), tỷ lệ hồi lưu 25% (FIC-736) để loại cấu tử nhẹ (C4=, C2H4) và rửa sạch giọt LP cuốn theo.',
    params: [
      { tag: 'PIC-721', desc: 'Áp suất đỉnh tháp T-703', normal: '3.0 kg/cm²G', limits: 'H: 4.0 | HH (PZA-729): 4.5 kg/cm²G' },
      { tag: 'LIC-721', desc: 'Mức lỏng đáy tháp T-703', normal: '1000 mm', limits: 'LL: 450 | HH (LZT-729): 1800 mm' },
      { tag: 'FIC-736', desc: 'Tỷ lệ hồi lưu Hexane tinh khiết', normal: '25 %', limits: 'Ngăn cuốn theo LP lên đỉnh' }
    ]
  },
  {
    id: 'E-703A/B',
    tag: 'E-703A/B',
    name: 'Stripper Reboiler (Thermosiphon)',
    category: 'exchanger',
    subsystem: 'stripping',
    type: 'exchanger',
    position: [-6, 0, -8],
    size: [4.6, 2.0, 2.2],
    color: '#dc2626',
    opTemp: '121 – 124 °C',
    opPress: '3.1 kg/cm²G',
    purpose: 'Bộ đun sôi đáy tháp T-703 cung cấp nhiệt hóa hơi Hexane, giữ nhiệt độ đáy ổn định ở 120°C.',
    principle: 'Thiết bị trao đổi nhiệt loại Thermosiphon dùng hơi trung áp MS (điều tiết bởi FIC-721 / FV-721) ở P = 3.1 kg/cm²G, T = 121–124°C.',
    params: [
      { tag: 'FIC-721', desc: 'Lưu lượng hơi MS cấp cho E-703A/B', normal: '12.8 t/h', limits: 'ESD I-705 closes FV-721' }
    ]
  },
  {
    id: 'P-705A/B',
    tag: 'P-705A/B',
    name: 'Stripper Bottom Circulation Pump',
    category: 'pump',
    subsystem: 'stripping',
    type: 'pump',
    position: [-6, 0, -4],
    size: [2.0, 1.4, 1.6],
    color: '#2563eb',
    opTemp: '120 °C',
    opPress: '3.1 → 4.5 kg/cm²G',
    purpose: 'Bơm tuần hoàn cưỡng bức dung dịch đáy T-703 qua Reboiler E-703A/B.',
    principle: 'Do dung dịch Low Polymer ở đáy T-703 có độ nhớt cao, P-705A/B tạo tuần hoàn cưỡng bức tăng tốc độ dòng chảy qua ống E-703A/B, nâng cao hiệu suất truyền nhiệt và chống đóng cặn polymer.',
    params: [
      { tag: 'LP-CONC', desc: 'Nồng độ Low Polymer tuần hoàn', normal: '5 – 10 wt%', limits: '>10 wt% gây tăng độ nhớt & tụt truyền nhiệt' }
    ]
  },

  // ==================== 3. LOW POLYMER HANDLING & FLAKER ====================
  {
    id: 'P-711A/B',
    tag: 'P-711A/B',
    name: 'Flash Drum Feed Pump',
    category: 'pump',
    subsystem: 'lowpolymer',
    type: 'pump',
    position: [-4, 0, 2],
    size: [2.0, 1.4, 1.6],
    color: '#ea580c',
    opTemp: '120 °C',
    opPress: '3.0 → 22.0 kg/cm²G',
    purpose: 'Nén dung dịch Low Polymer 10 wt% từ đáy T-703 lên áp suất cao 22 kg/cm²G trước khi gia nhiệt tách Flash.',
    principle: 'Duy trì áp suất cao 22 kg/cm²G (PIC-723) giữ hỗn hợp ở pha lỏng quá nhiệt trong E-711 và tuyến ống 75m; lưu lượng điều khiển bởi FIC-722 (tối thiểu 5 t/h).',
    params: [
      { tag: 'PIC-723', desc: 'Áp suất đầu đẩy P-711A/B', normal: '22.0 kg/cm²G', limits: 'H Alarm: 30.0 kg/cm²G' },
      { tag: 'FIC-722', desc: 'Lưu lượng cấp tới D-711', normal: '14.5 t/h', limits: 'Min: 5.0 t/h' }
    ]
  },
  {
    id: 'E-711',
    tag: 'E-711',
    name: 'Flash Preheater & 75m Traced Line',
    category: 'exchanger',
    subsystem: 'lowpolymer',
    type: 'exchanger',
    position: [1, 0, 2],
    size: [4.6, 1.9, 1.9],
    color: '#ef4444',
    opTemp: '120 → 220 °C',
    opPress: '22.0 kg/cm²G',
    purpose: 'Gia nhiệt dung dịch LP từ 120°C lên 200–220°C bằng hơi cao áp HS (TIC-724), kết hợp tuyến ống gia nhiệt steam tracing dài 75m (độ dốc 1/100) trước khi xả áp vào D-711.',
    principle: 'Tuyến ống dài tối thiểu 75m bọc bảo ôn gia nhiệt hơi (4"-SX-7019) cung cấp đủ thời gian lưu và nhiệt lượng ẩn hóa hơi để Hexane bốc hơi triệt để ngay khi giảm áp vào D-711.',
    params: [
      { tag: 'TIC-724', desc: 'Nhiệt độ đầu ra E-711', normal: '220 °C', limits: 'Range: 200 – 220 °C' }
    ]
  },
  {
    id: 'D-711',
    tag: 'D-711',
    name: '1st Flash Drum',
    category: 'vessel',
    subsystem: 'lowpolymer',
    type: 'vertical_drum',
    position: [6, 0, 2],
    size: [3.0, 7.2, 3.0],
    color: '#d97706',
    liquidColor: '#fb923c',
    liquidLevel: 0.55,
    opTemp: '160 °C',
    opPress: '3.0 kg/cm²G',
    purpose: 'Bồn tách bay hơi nhanh cấp 1 tách phần lớn hơi Hexane hồi lưu về T-703 và thu Low Polymer nóng chảy ở đáy.',
    principle: 'Giảm áp đột ngột từ 22 kg/cm²G xuống 3.0 kg/cm²G làm Hexane hóa hơi và hạ nhiệt lỏng xuống 160°C. Cuộn gia nhiệt hơi MS bên trong (TIC-727) giữ LP ở 160°C không bị đông đặc.',
    params: [
      { tag: 'PZA-722', desc: 'Áp suất vận hành D-711', normal: '3.0 kg/cm²G', limits: 'HH (PZA-722): 4.6 kg/cm²G (ESD I-705)' },
      { tag: 'TIC-727', desc: 'Nhiệt độ LP lỏng trong D-711', normal: '160 °C', limits: 'Giữ LP ở pha lỏng (160–180°C)' },
      { tag: 'LIC-722', desc: 'Mức LP trong D-711', normal: '2200 mm', limits: 'L: 1075 | H: 3450 mm' }
    ]
  },
  {
    id: 'P-712',
    tag: 'P-712',
    name: 'Low Polymer Pump',
    category: 'pump',
    subsystem: 'lowpolymer',
    type: 'pump',
    position: [8, 0, 5],
    size: [1.8, 1.3, 1.5],
    color: '#ea580c',
    opTemp: '160 °C',
    opPress: '3.0 → 10.0 kg/cm²G',
    purpose: 'Bơm chuyển Low Polymer nóng chảy từ đáy D-711 qua bộ gia nhiệt E-712 sang bồn chân không D-712.',
    principle: 'Bơm bánh răng/trục vít chuyên dụng cho polymer độ nhớt cao (10–7000 cP), có áo gia nhiệt hơi; dừng khi ESD I-701.',
    params: [
      { tag: 'P-DISCH', desc: 'Áp suất đầu đẩy P-712', normal: '10.0 kg/cm²G', limits: 'ESD I-701 stops P-712' }
    ]
  },
  {
    id: 'E-712',
    tag: 'E-712',
    name: 'Low Polymer Preheater',
    category: 'exchanger',
    subsystem: 'lowpolymer',
    type: 'exchanger',
    position: [11, 0, 5],
    size: [4.0, 1.8, 1.8],
    color: '#dc2626',
    opTemp: '160 → 180 °C',
    opPress: '10.0 kg/cm²G',
    purpose: 'Gia nhiệt bổ sung Low Polymer từ 160°C lên 180°C bằng hơi cao áp HS (TIC-728 / TV-728) trước khi vào bồn chân không D-712.',
    principle: 'Cung cấp nhiệt lượng cần thiết để tách nốt lượng Hexane hòa tan còn lại dưới chân không sâu -0.4 kg/cm²G mà không làm đông đặc polymer.',
    params: [
      { tag: 'TIC-728', desc: 'Nhiệt độ đầu ra E-712', normal: '180 °C', limits: 'ESD I-705 closes TV-728' }
    ]
  },
  {
    id: 'D-712',
    tag: 'D-712',
    name: '2nd Flash Drum (Vacuum)',
    category: 'vessel',
    subsystem: 'lowpolymer',
    type: 'vertical_drum',
    position: [15, 0, 5],
    size: [3.2, 7.6, 3.2],
    color: '#b45309',
    liquidColor: '#f97316',
    liquidLevel: 0.52,
    opTemp: '180 °C',
    opPress: '-0.4 kg/cm²G',
    purpose: 'Tách triệt để Hexane và hydrocarbon nhẹ khỏi Low Polymer ở điều kiện chân không -0.4 kg/cm²G (hàm lượng HX còn lại < 5 wt%).',
    principle: 'Áp suất chân không -0.4 kg/cm²G do bơm C-701 duy trì. Nếu áp suất quá cao sẽ không tách hết Hexane; nếu quá thấp (< -0.6 kg/cm²G) gây hư hỏng cơ khí thiết bị.',
    params: [
      { tag: 'PIC-724', desc: 'Áp suất chân không D-712', normal: '-0.40 kg/cm²G', limits: 'Start C-701: -0.2 | Stop C-701: -0.5' },
      { tag: 'LIC-723', desc: 'Mức LP sạch trong D-712', normal: '2400 mm', limits: 'H: 3380 | HH: 3800 mm' }
    ]
  },
  {
    id: 'C-701',
    tag: 'C-701',
    name: 'LP Vacuum Pump',
    category: 'pump',
    subsystem: 'lowpolymer',
    type: 'pump',
    position: [15, 0, 9],
    size: [2.2, 1.6, 1.8],
    color: '#c2410c',
    opTemp: '45 °C',
    opPress: '-0.4 → 0.3 kg/cm²G',
    purpose: 'Tạo chân không -0.4 kg/cm²G cho D-712 và nén hơi Hexane qua bộ làm mát E-713.',
    principle: 'Tích hợp khóa liên động DCS (PIC-724: tự chạy ở -0.2 kg/cm²G, tự dừng ở -0.5 kg/cm²G) và ESD I-703.',
    params: [
      { tag: 'PIC-724', desc: 'Điều khiển liên động C-701', normal: '-0.4 kg/cm²G', limits: 'ESD I-703 stops C-701' }
    ]
  },
  {
    id: 'E-713',
    tag: 'E-713, D-714 & D-713',
    name: 'Vent Gas Cooler, Drain Receiver & Mist Separator',
    category: 'exchanger',
    subsystem: 'lowpolymer',
    type: 'exchanger',
    position: [19, 0, 9],
    size: [4.2, 1.8, 1.8],
    color: '#0d9488',
    opTemp: '5 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Ngưng tụ hơi Hexane từ bơm chân không C-701 bằng Brine tại E-713, thu gom vào D-714 (bơm P-714A/B chuyển đi) và tách sương tại D-713 trước khi xả LF.',
    principle: 'Máy phân tích Oxy AZT-701 trên đỉnh D-713 giám sát liên tục nồng độ O2; nếu vượt ngưỡng cao sẽ kích hoạt ESD I-703.',
    params: [
      { tag: 'AZT-701', desc: 'Nồng độ O2 khí xả D-713', normal: '450 ppm', limits: 'HH triggers ESD I-703' },
      { tag: 'LIC-724', desc: 'Mức Hexane ngưng tụ trong D-714', normal: '550 mm', limits: 'HH (LZT-726) triggers ESD I-703' }
    ]
  },
  {
    id: 'P-713A/B',
    tag: 'P-713A/B',
    name: 'LP Transfer Pump',
    category: 'pump',
    subsystem: 'lowpolymer',
    type: 'pump',
    position: [12, 0, 9],
    size: [1.9, 1.3, 1.5],
    color: '#ea580c',
    opTemp: '180 °C',
    opPress: '-0.4 → 2.5 kg/cm²G',
    purpose: 'Bơm chuyển Low Polymer nóng chảy đã tách sạch Hexane từ bồn chân không D-712 sang bồn chứa D-717.',
    principle: 'Hoạt động theo điều khiển mức LIC-723 (LV-723); tự động dừng khi ESD I-703 kích hoạt.',
    params: [
      { tag: 'LIC-723', desc: 'Van điều khiển mức D-712', normal: '58 %', limits: 'ESD I-703 stops P-713A/B' }
    ]
  },
  {
    id: 'D-717',
    tag: 'D-717',
    name: 'LP Holding Drum',
    category: 'vessel',
    subsystem: 'lowpolymer',
    type: 'vertical_drum',
    position: [9, 0, 13],
    size: [2.8, 6.4, 2.8],
    color: '#9a3412',
    liquidColor: '#fdba74',
    liquidLevel: 0.6,
    opTemp: '160 – 180 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Bồn đệm chứa Low Polymer nóng chảy cấp ổn định cho cụm tạo vảy Drum Flaker M-761A/B (vận hành ca ngày).',
    principle: 'Duy trì nhiệt độ 160–180°C (tỷ trọng 899 kg/m³, MW ≤ 10000); cấp sang Flaker qua bơm P-717A/B hoặc xả khẩn cấp ra hố LP Dump PIT / xe bồn.',
    params: [
      { tag: 'LI-781', desc: 'Mức Low Polymer trong D-717', normal: '1900 mm', limits: 'L: 816 | HH: 3450 mm' }
    ]
  },
  {
    id: 'P-717A/B',
    tag: 'P-717A/B',
    name: 'LP Storage Bottom Pump',
    category: 'pump',
    subsystem: 'lowpolymer',
    type: 'pump',
    position: [12, 0, 15],
    size: [1.9, 1.3, 1.5],
    color: '#c2410c',
    opTemp: '160 – 170 °C',
    opPress: '0.2 → 2.0 kg/cm²G',
    purpose: 'Bơm cấp Low Polymer nóng chảy từ đáy D-717 lên máng cấp liệu của Drum Flaker M-761A/B.',
    principle: 'Điều chỉnh lưu lượng qua LIC-728; dừng khẩn cấp khi ESD I-703 kích hoạt.',
    params: [
      { tag: 'LIC-728', desc: 'Điều khiển mức máng cấp Flaker', normal: '65 %', limits: 'ESD I-703 stops P-717A/B' }
    ]
  },
  {
    id: 'M-761A/B',
    tag: 'M-761A/B, ZZ-761 & FD-762',
    name: 'Drum Flaker, Crusher & Screw Conveyor',
    category: 'package',
    subsystem: 'lowpolymer',
    type: 'flaker',
    position: [17, 0, 16],
    size: [5.6, 3.2, 3.0],
    color: '#7c2d12',
    opTemp: '160 → 40 °C',
    opPress: '100 mmAq',
    purpose: 'Làm rắn tấm LP nóng chảy, nghiền thành vảy (dài <100mm, rộng 15–30mm, dày ~0.7mm) và đóng bao Big Bag.',
    principle: 'Trống chính quay theo chiều kim đồng hồ làm nguội bằng CW; con lăn phụ gia nhiệt hơi MS chỉnh độ dày vảy; dao cạo gạt tấm LP xuống máy nghiền ZZ-761A/B, băng tải vít FD-762A/B, van xoay RF-763A/B vào bao (có sục khí LN và dây tiếp địa chống tĩnh điện).',
    params: [
      { tag: 'FLAKE-SPEC', desc: 'Kích thước & độ dày vảy LP', normal: '<100x25mm / 0.7mm', limits: 'Bulk density: 300–500 kg/m³' }
    ]
  },
  {
    id: 'E-770',
    tag: 'E-770 & C-770',
    name: 'Flaker HX Condenser & Vent Blower',
    category: 'exchanger',
    subsystem: 'lowpolymer',
    type: 'exchanger',
    position: [22, 0, 16],
    size: [3.2, 1.5, 1.5],
    color: '#0f766e',
    opTemp: '0 °C',
    opPress: '1000 mmAq',
    purpose: 'Ngưng tụ hơi Hexane thoát ra từ cụm Drum Flaker bằng Brine ở 0°C (E-770) và thổi khí thải ra đuốc bằng quạt C-770.',
    principle: 'Giữ không gian buồng Flaker an toàn, thu hồi hơi dung môi còn sót.',
    params: [
      { tag: 'TI-E770', desc: 'Nhiệt độ bình ngưng E-770', normal: '0 °C', limits: 'Brine cooling (BRS/BRR)' }
    ]
  },

  // ==================== 4. HEXANE DEHYDRATION / PURIFICATION ====================
  {
    id: 'E-704',
    tag: 'E-704',
    name: 'Stripper Overhead Condenser',
    category: 'exchanger',
    subsystem: 'purification',
    type: 'exchanger',
    position: [-6, 0, -15],
    size: [4.8, 2.1, 2.1],
    color: '#059669',
    opTemp: '72 – 76 °C',
    opPress: '0.2 – 0.3 kg/cm²G',
    purpose: 'Ngưng tụ toàn bộ hơi Hexane đỉnh từ tháp chưng cất T-703 và tháp tách nước T-704 bằng nước làm mát CW.',
    principle: 'Hơi Hexane ngưng tụ chảy tự nhiên vào D-702. Cảnh báo FZA-732LL khi mất lưu lượng nước làm mát hồi CWR.',
    params: [
      { tag: 'FZA-732LL', desc: 'Lưu lượng nước làm mát hồi CWR E-704', normal: '620 t/h', limits: 'LL Alarm < 475 t/h' },
      { tag: 'TI-E704', desc: 'Nhiệt độ vận hành E-704', normal: '72 – 76 °C', limits: 'P = 0.2 – 0.3 kg/cm²G' }
    ]
  },
  {
    id: 'E-708',
    tag: 'E-708',
    name: 'Vent Condenser',
    category: 'exchanger',
    subsystem: 'purification',
    type: 'exchanger',
    position: [-1, 0, -18],
    size: [3.4, 1.5, 1.5],
    color: '#0d9488',
    opTemp: '5 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Ngưng tụ thu hồi hơi Hexane trong dòng khí không ngưng (ethylene, butene-1, N2) bằng nước muối Brine ở 5°C trước khi xả LF.',
    principle: 'Nếu nhiệt độ Brine quá thấp có thể gây đóng băng nước (icing) bên trong ống làm tăng áp suất D-702 > 0.2 kg/cm²G.',
    params: [
      { tag: 'TI-E708', desc: 'Nhiệt độ đầu ra E-708', normal: '5 °C', limits: 'Tránh đóng băng phía ống (icing)' }
    ]
  },
  {
    id: 'D-702',
    tag: 'D-702',
    name: 'Stripper Receiver',
    category: 'vessel',
    subsystem: 'purification',
    type: 'horizontal_drum',
    position: [1, 0, -14],
    size: [5.0, 2.3, 2.3],
    color: '#047857',
    liquidColor: '#34d399',
    liquidLevel: 0.65,
    opTemp: '40 – 50 °C (42 °C)',
    opPress: '0.2 kg/cm²G',
    purpose: 'Bình chứa ngưng tụ tách thành 2 lớp: lớp nước tự do ở chân lắng (boot leg) xả ra PIT-702; lớp Hexane bão hòa nước (~250 ppm ở 42°C) cấp cho T-704.',
    principle: 'Duy trì áp suất 0.2 kg/cm²G qua PIC-731 (N2/LF). Xả nước boot leg tự động qua LIC-732 (LV-732-1/2), tự động đóng khi ESD I-707 phát hiện HC tại PIT-702.',
    params: [
      { tag: 'PIC-731', desc: 'Áp suất đỉnh D-702', normal: '0.20 kg/cm²G', limits: '>0.2 kg/cm²G: kiểm tra đóng băng E-708' },
      { tag: 'LIC-732', desc: 'Mức nước boot leg D-702', normal: '580 mm', limits: 'ESD I-707 closes LV-732-1/2' }
    ]
  },
  {
    id: 'P-706A/B',
    tag: 'P-706A/B',
    name: 'Dehydrator Feed Pump',
    category: 'pump',
    subsystem: 'purification',
    type: 'pump',
    position: [6, 0, -14],
    size: [2.0, 1.4, 1.6],
    color: '#10b981',
    opTemp: '42 °C',
    opPress: '0.2 → 3.5 kg/cm²G',
    purpose: 'Bơm cấp Hexane bão hòa nước (~250 ppm) từ D-702 lên đỉnh tháp tách nước T-704.',
    principle: 'Điều chỉnh lưu lượng qua van LV-731 (đo bởi FI-733) theo tín hiệu mức LIC-731 của D-702; dừng khi ESD I-701.',
    params: [
      { tag: 'FI-733', desc: 'Lưu lượng nhập liệu đỉnh T-704', normal: '48.0 t/h', limits: 'ESD I-701 stops P-706A/B' }
    ]
  },
  {
    id: 'T-704',
    tag: 'T-704',
    name: 'Hexane Dehydrator Tower',
    category: 'tower',
    subsystem: 'purification',
    type: 'tower',
    position: [11, 0, -14],
    size: [2.8, 14.5, 2.8],
    color: '#065f46',
    liquidColor: '#10b981',
    liquidLevel: 0.5,
    opTemp: '84 °C (78–84 °C)',
    opPress: '0.35 – 0.5 kg/cm²G',
    purpose: 'Tháp chưng cất đẳng phí (Azeotropic Distillation) tách nước và Butene-1 lên đỉnh, đưa hàm lượng nước đáy xuống ≤ 10 wt ppm.',
    principle: 'Hỗn hợp đẳng phí nước-hexane (0–22.5 wt% nước) có điểm sôi thấp hơn Hexane tinh khiết nên bay hơi lên đỉnh hồi về E-704. Tỷ lệ hồi lưu = (FI-733 - FI-735)/FI-735 (> 0.3 khi tách Butene-1; > 0.1 bình thường).',
    params: [
      { tag: 'WATER-BOT', desc: 'Độ ẩm Hexane đáy T-704', normal: '≤ 10 wt ppm', limits: '>10 ppm gây ngộ độc xúc tác phản ứng' },
      { tag: 'REFLUX-R', desc: 'Tỷ lệ hồi lưu tháp T-704', normal: '> 0.1 (> 0.3 Bu-1)', limits: '(FI-733 - FI-735) / FI-735' }
    ]
  },
  {
    id: 'E-705',
    tag: 'E-705',
    name: 'Dehydrator Reboiler',
    category: 'exchanger',
    subsystem: 'purification',
    type: 'exchanger',
    position: [11, 0, -18],
    size: [3.8, 1.7, 1.7],
    color: '#dc2626',
    opTemp: '84 °C',
    opPress: '0.5 kg/cm²G',
    purpose: 'Cung cấp nhiệt đun sôi đáy tháp T-704 bằng hơi nước áp suất thấp LS (FIC-734 / FV-734).',
    principle: 'Duy trì nhiệt độ đáy 78–84°C để bốc hơi hỗn hợp đẳng phí nước-hexane; van FV-734 tự đóng khi ESD I-701.',
    params: [
      { tag: 'FIC-734', desc: 'Lưu lượng hơi LS vào E-705', normal: '6.2 t/h', limits: 'ESD I-701 closes FV-734' }
    ]
  },
  {
    id: 'P-707A/B',
    tag: 'P-707A/B',
    name: 'Dehydrator Bottom Pump',
    category: 'pump',
    subsystem: 'purification',
    type: 'pump',
    position: [14, 0, -14],
    size: [1.9, 1.3, 1.5],
    color: '#059669',
    opTemp: '84 °C',
    opPress: '0.5 → 4.2 kg/cm²G',
    purpose: 'Bơm Hexane khô (≤ 10 ppm nước) từ đáy tháp T-704 qua bộ làm mát E-706 tới bể chứa TK-702.',
    principle: 'Điều chỉnh lưu lượng qua LIC-733 (LV-733, FI-735); dừng khẩn cấp khi ESD I-701.',
    params: [
      { tag: 'FI-735', desc: 'Lưu lượng Hexane khô đáy T-704', normal: '42.0 t/h', limits: 'ESD I-701 stops P-707A/B' }
    ]
  },
  {
    id: 'E-706',
    tag: 'E-706',
    name: 'Dehydrator Bottom Cooler',
    category: 'exchanger',
    subsystem: 'purification',
    type: 'exchanger',
    position: [17, 0, -14],
    size: [3.8, 1.7, 1.7],
    color: '#0284c7',
    opTemp: '84 → 43 °C',
    opPress: '4.0 kg/cm²G',
    purpose: 'Làm mát dòng Hexane khô từ 84°C xuống 40–43°C bằng nước làm mát CW trước khi nhập vào bể TK-702 (hoặc chuyển sang TK-703 qua HC-731/732 khi khởi động/dừng máy).',
    principle: 'Ngăn bay hơi và giữ ổn định nhiệt độ tồn chứa trong bể TK-702.',
    params: [
      { tag: 'TI-E706', desc: 'Nhiệt độ đầu ra E-706', normal: '40 – 43 °C', limits: 'Switch via HC-731 / HC-732' }
    ]
  },

  // ==================== 5. PURE HEXANE DISTRIBUTION ====================
  {
    id: 'TK-702',
    tag: 'TK-702',
    name: 'Pure Hexane Tank',
    category: 'vessel',
    subsystem: 'distribution',
    type: 'tank',
    position: [22, 0, -14],
    size: [5.2, 6.8, 5.2],
    color: '#15803d',
    liquidColor: '#4ade80',
    liquidLevel: 0.72,
    opTemp: '35 – 43 °C',
    opPress: '200 – 400 mmAq',
    purpose: 'Bể tồn chứa Hexane tinh khiết đạt chuẩn (độ ẩm 5–10 ppm max) được phủ khí trơ Nitơ.',
    principle: 'Duy trì áp suất dương 200–400 mmAq ngăn hơi ẩm khí quyển lọt vào; mức khởi động tối thiểu > 30% trước khi vận hành vòng lặp.',
    params: [
      { tag: 'MOIST-TK702', desc: 'Hàm lượng nước trong TK-702', normal: '5 – 10 ppm max', limits: 'On-spec before sending to reactors' }
    ]
  },
  {
    id: 'P-708A/B',
    tag: 'P-708A/B',
    name: 'HP Hexane Pump',
    category: 'pump',
    subsystem: 'distribution',
    type: 'pump',
    position: [27, 0, -14],
    size: [2.2, 1.5, 1.8],
    color: '#16a34a',
    opTemp: '43 °C',
    opPress: '0.03 → 12.0 kg/cm²G',
    purpose: 'Bơm cao áp nâng áp suất Hexane tinh khiết lên 12 kg/cm²G cấp cho bình sấy D-703A/B, khu vực trùng hợp (Sec. 100/200/300), súc rửa bơm/đường ống và nhánh hạ áp 4 kg/cm²G.',
    principle: 'Áp suất cao áp 12 kg/cm²G điều khiển bởi PIC-742; nhánh hạ áp 4 kg/cm²G (cho xúc tác Sec. 100 & rửa ống) điều khiển bởi PIC-743.',
    params: [
      { tag: 'PIC-742', desc: 'Áp suất tuyến cao áp (HP Hexane)', normal: '12.0 kg/cm²G', limits: 'Cấp cho Polymerization & Flushing' },
      { tag: 'PIC-743', desc: 'Áp suất tuyến hạ áp (LP Hexane)', normal: '4.0 kg/cm²G', limits: 'Cấp cho Catalyst Prep Sec. 100' }
    ]
  },
  {
    id: 'D-703A/B',
    tag: 'D-703A/B & F-704A/B',
    name: 'Hexane Dryer (Mol. Sieve 4A) & Filter',
    category: 'vessel',
    subsystem: 'distribution',
    type: 'vertical_drum',
    position: [32, 0, -14],
    size: [2.8, 6.8, 2.8],
    color: '#166534',
    liquidColor: '#86efac',
    liquidLevel: 0.85,
    opTemp: '43 °C (Regen 220 °C)',
    opPress: '12.0 kg/cm²G',
    purpose: 'Hấp phụ sâu độ ẩm từ 10–20 ppm xuống < 5 ppm bằng rây phân tử 4A (D-703A/B) và lọc sạch bụi rây qua bộ lọc F-704A/B.',
    principle: 'Khi độ ẩm đầu ra > 5 ppm thì chuyển đổi tháp A/B và tái sinh bằng khí N2 nóng (HHX) ở 220°C, 3 kg/cm²G, lưu lượng tối đa 2750 Nm³/h trong 24 giờ (tần suất 1 lần/tháng).',
    params: [
      { tag: 'MOIST-OUT', desc: 'Độ ẩm Hexane đầu ra D-703A/B', normal: '< 5 ppm', limits: '>5 ppm: Switch & Regenerate (220°C, 24h)' }
    ]
  },

  // ==================== 6. WASTE / SLOP HEXANE RECOVERY ====================
  {
    id: 'D-751/752',
    tag: 'D-751 & D-752',
    name: 'Waste Hexane Drain Drums',
    category: 'vessel',
    subsystem: 'slop',
    type: 'horizontal_drum',
    position: [-36, 0, -14],
    size: [4.0, 1.8, 1.8],
    color: '#ca8a04',
    liquidColor: '#fde047',
    liquidLevel: 0.5,
    opTemp: '40 °C',
    opPress: '1.5 kg/cm²G (N2)',
    purpose: 'Thu gom Hexane thải nhiễm polymer hoặc xúc tác từ các điểm lấy mẫu (chuẩn bị xúc tác, trùng hợp, chưng cất).',
    principle: 'Vận hành gián đoạn (intermittent): dùng áp suất khí Nitơ đẩy dung dịch thải sang bồn chưng tách D-753.',
    params: [
      { tag: 'BATCH-OP', desc: 'Chế độ chuyển liệu sang D-753', normal: 'Nitrogen Transfer', limits: 'Intermittent batch operation' }
    ]
  },
  {
    id: 'D-753',
    tag: 'D-753 & STR-751',
    name: 'Hexane Stripping Drum & Strainer',
    category: 'vessel',
    subsystem: 'slop',
    type: 'agitator_vessel',
    position: [-30, 0, -14],
    size: [3.0, 5.8, 3.0],
    color: '#a16207',
    liquidColor: '#facc15',
    liquidLevel: 0.58,
    opTemp: '90 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Khử xúc tác bằng DMW, trung hòa axit bằng NaOH (pH ~ 8) và chưng tách lôi cuốn hơi nước thu hồi Hexane thải.',
    principle: 'Sục hơi LS trực tiếp (FIC-751 / FV-751) qua đĩa phân phối dạng vòm đục lỗ bên trong đáy bồn giúp tách nhanh hơi Hexane ở 90°C, 0.2 kg/cm²G; cặn polymer lọc qua rây STR-751 xả ra PIT-753.',
    params: [
      { tag: 'TIC-D753', desc: 'Nhiệt độ & áp suất D-753', normal: '90 °C / 0.2 kg/cm²G', limits: 'pH kiểm soát ~ 8 bằng NaOH' }
    ]
  },
  {
    id: 'E-751',
    tag: 'E-751, E-752 & D-754',
    name: 'Slop Condensers & Hexane Receiver',
    category: 'exchanger',
    subsystem: 'slop',
    type: 'exchanger',
    position: [-25, 0, -14],
    size: [4.2, 1.8, 1.8],
    color: '#b45309',
    opTemp: '43 °C (E-752: 5 °C)',
    opPress: '0.2 kg/cm²G',
    purpose: 'Ngưng tụ hơi Hexane-nước tại E-751 (CW, 43°C) và E-752 (Brine, 5°C) vào bình chứa D-754.',
    principle: 'Nước tách lớp ở D-754 xả về PIT-753 qua LV-753-1 (đóng khi ESD I-707); Hexane sạch được bơm P-751 thu hồi về TK-703 hoặc D-701.',
    params: [
      { tag: 'LIC-753', desc: 'Mức tách nước D-754', normal: '50 %', limits: 'ESD I-707 closes LV-753-1' }
    ]
  },
  {
    id: 'P-751',
    tag: 'P-751',
    name: 'Recovered Hexane Pump',
    category: 'pump',
    subsystem: 'slop',
    type: 'pump',
    position: [-22, 0, -11],
    size: [1.8, 1.3, 1.5],
    color: '#ca8a04',
    opTemp: '43 °C',
    opPress: '0.2 → 4.0 kg/cm²G',
    purpose: 'Bơm thu hồi Hexane từ bình D-754 đưa trở lại bể TK-703 hoặc bồn nhập liệu D-701.',
    principle: 'Giúp thu hồi tối đa dung môi Hexane từ các nguồn lấy mẫu và xả thải quy trình.',
    params: [
      { tag: 'DEST', desc: 'Tuyến thu hồi', normal: 'To TK-703 / D-701', limits: 'P = 4.0 kg/cm²G' }
    ]
  },
  {
    id: 'TK-703',
    tag: 'TK-703 & P-781',
    name: 'Make-up Hexane Tank & Unloading Pump',
    category: 'vessel',
    subsystem: 'slop',
    type: 'tank',
    position: [-19, 0, -14],
    size: [4.8, 6.6, 4.8],
    color: '#854d0e',
    liquidColor: '#fef08a',
    liquidLevel: 0.68,
    opTemp: '43 °C',
    opPress: '4.0 kg/cm²G (Line)',
    purpose: 'Bể chứa Hexane bổ sung nhập từ xe bồn/BL qua bơm P-781 và Hexane thu hồi từ cụm Slop.',
    principle: 'Tích hợp hệ thống phát hiện khí cháy/chữa cháy và giám sát mức LI-751.',
    params: [
      { tag: 'LI-751', desc: 'Mức Hexane trong TK-703', normal: '5200 mm', limits: 'P = 4 kg/cm²G, T = 43°C' }
    ]
  },

  // ==================== 7. OLIGOMER CUT SYSTEM ====================
  {
    id: 'D-718',
    tag: 'D-718 & P-718A/B',
    name: 'Waste Hexane Drum & Pump',
    category: 'vessel',
    subsystem: 'oligomer',
    type: 'horizontal_drum',
    position: [20, 0, 5],
    size: [3.8, 1.8, 1.8],
    color: '#9333ea',
    liquidColor: '#c084fc',
    liquidLevel: 0.6,
    opTemp: '40 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Tiếp nhận Hexane ngưng tụ giàu Oligomer từ D-714 và bơm chuyển qua P-718A/B sang D-761.',
    principle: 'Vận hành theo mẻ (batch) khi sản xuất grade ống (pipe), grade màng (film) hoặc khi tỷ lệ H2/C2 trong lò phản ứng > 7.',
    params: [
      { tag: 'LIC-782', desc: 'Mức chất lỏng D-718', normal: '950 mm', limits: 'ESD I-703 stops P-718A/B' }
    ]
  },
  {
    id: 'D-761',
    tag: 'D-761 & P-761A/B',
    name: 'Slop Hexane Drum & Feed Pump',
    category: 'vessel',
    subsystem: 'oligomer',
    type: 'horizontal_drum',
    position: [24, 0, 2],
    size: [3.8, 1.8, 1.8],
    color: '#7e22ce',
    liquidColor: '#a855f7',
    liquidLevel: 0.62,
    opTemp: '43 °C',
    opPress: '0.5 kg/cm²G',
    purpose: 'Bồn chứa nguyên liệu đầu vào (Hexane + Oligomer + Butene-1) cấp cho tháp T-761 qua bơm P-761A/B (FIC-746).',
    principle: 'Nhận cả dòng tuần hoàn từ D-764 khi sản phẩm cạnh chưa đạt chuẩn (off-spec).',
    params: [
      { tag: 'LI-787', desc: 'Mức bồn D-761', normal: '1100 mm', limits: 'Fed by P-761A/B (FIC-746)' }
    ]
  },
  {
    id: 'T-761',
    tag: 'T-761 & E-761',
    name: 'Oligomer Cut Tower & Reboiler',
    category: 'tower',
    subsystem: 'oligomer',
    type: 'tower',
    position: [28, 0, 4],
    size: [2.8, 15.0, 2.8],
    color: '#6b21a8',
    liquidColor: '#c084fc',
    liquidLevel: 0.48,
    opTemp: 'Đỉnh 89–97 °C / Đáy 175–180 °C',
    opPress: 'Đỉnh 1.5 / Đáy 1.7 kg/cm²G',
    purpose: 'Tháp chưng cất phân tách Butene-1 ở đỉnh, rút dòng cạnh Hexane sạch ở đĩa số 10 (Oligomer < 2.5 wt%, Bu-1 < 0.03 mol%) và tách 90% Oligomer ở đáy.',
    principle: 'Đun sôi đáy bằng Reboiler E-761 dùng hơi cao áp HS (FIC-766) ở P = 1.7 kg/cm²G, T = 175–180°C.',
    params: [
      { tag: 'SPEC-10TH', desc: 'Chất lượng dòng cạnh đĩa 10', normal: 'Oligomer <2.5 wt%', limits: 'Butene-1 < 0.03 mol%' },
      { tag: 'SPEC-BOT', desc: 'Thành phần đáy T-761', normal: '90% Oligomer / 10% HX', limits: 'T = 175–180°C, P = 1.7 kg/cm²G' }
    ]
  },
  {
    id: 'E-762',
    tag: 'E-762, E-763 & D-762',
    name: 'Oligomer Ovh Condensers & Drum',
    category: 'exchanger',
    subsystem: 'oligomer',
    type: 'exchanger',
    position: [32, 0, 1],
    size: [4.2, 1.8, 1.8],
    color: '#9333ea',
    opTemp: '40–50 °C (E-763: 5 °C)',
    opPress: '1.5 kg/cm²G',
    purpose: 'Ngưng tụ hơi đỉnh T-761 tại E-762 (CW) và E-763 (Brine, 5°C) vào D-762 để bơm P-762A/B hồi lưu về đỉnh tháp; xả khí giàu Butene-1 qua PIC-763 tới E-882/Flare.',
    principle: 'Nước lắng ở boot leg D-762 xả qua LV-789-1 tới PIT-762 (đóng khi ESD I-707).',
    params: [
      { tag: 'PIC-763', desc: 'Áp suất D-762 (xả Butene-1)', normal: '1.50 kg/cm²G', limits: 'Vent to E-882 / HC Flare' }
    ]
  },
  {
    id: 'E-765',
    tag: 'E-765, D-764 & P-764A/B',
    name: 'Side Hexane Cooler, Receiver & Pump',
    category: 'exchanger',
    subsystem: 'oligomer',
    type: 'exchanger',
    position: [33, 0, 5],
    size: [4.0, 1.7, 1.7],
    color: '#a855f7',
    opTemp: '43 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Làm mát dòng Hexane rút từ đĩa số 10 xuống 43°C qua E-765 vào bình D-764; bơm P-764A/B chuyển về TK-703 (nếu đạt chuẩn) hoặc tuần hoàn lại D-761.',
    principle: 'Kiểm soát mức D-764 qua LIC-791 và nhiệt độ làm mát qua TIC-787.',
    params: [
      { tag: 'LIC-791', desc: 'Mức bình nhận Hexane D-764', normal: '1100 mm', limits: 'On-spec -> TK-703 | Off-spec -> D-761' }
    ]
  },
  {
    id: 'E-764',
    tag: 'E-764, D-763 & P-763A/B',
    name: 'Oligomer Bottom Cooler, Drum & Pump',
    category: 'exchanger',
    subsystem: 'oligomer',
    type: 'exchanger',
    position: [33, 0, 9],
    size: [4.0, 1.7, 1.7],
    color: '#581c87',
    opTemp: '180 → 43 °C',
    opPress: '0.2 kg/cm²G',
    purpose: 'Làm mát dòng Oligomer đáy tháp T-761 (90% oligomer, 10% HX) xuống 43°C qua E-764 vào bình D-763 và bơm P-763A/B xuất sang nhà máy Olefin / xe bồn.',
    principle: 'Giám sát hàm lượng Hexane < 10 wt% trong dòng Oligomer trước khi xuất sang nhà máy Olefin.',
    params: [
      { tag: 'LI-792', desc: 'Mức bồn chứa Oligomer D-763', normal: '1300 mm', limits: 'Hexane content < 10 wt%' }
    ]
  },

  // ==================== 8. pH TREATMENT UNIT ====================
  {
    id: 'D-781',
    tag: 'D-781, P-783 & ZZ-781',
    name: '18% HCl Drum, Make-up Pump & Scrubber',
    category: 'vessel',
    subsystem: 'phtreatment',
    type: 'vertical_drum',
    position: [-22, 0, 21],
    size: [2.5, 5.2, 2.5],
    color: '#be185d',
    liquidColor: '#f472b6',
    liquidLevel: 0.78,
    opTemp: '35 °C',
    opPress: 'ATM',
    purpose: 'Bồn chứa axit HCl 18% (nạp bởi bơm P-783, thông hơi qua tháp hấp thụ khói axit ZZ-781) cung cấp tác nhân trung hòa nước thải kiềm.',
    principle: 'Khi mức D-781 cao (LIC-785) tự động dừng bơm nạp P-783; khi mức thấp tự động dừng bơm định lượng P-782A/B và P-784A/B để bảo vệ bơm.',
    params: [
      { tag: 'LIC-785', desc: 'Mức axit HCl 18% trong D-781', normal: '1150 mm', limits: 'Low stops P-782/784 | High stops P-783' }
    ]
  },
  {
    id: 'P-782A/B',
    tag: 'P-782A/B',
    name: 'No.1 Acid Metering Pump',
    category: 'pump',
    subsystem: 'phtreatment',
    type: 'pump',
    position: [-18, 0, 20],
    size: [1.7, 1.2, 1.4],
    color: '#db2777',
    opTemp: '35 °C',
    opPress: '2.0 kg/cm²G',
    purpose: 'Bơm định lượng axit HCl 18% vào bồn trung hòa bậc 1 D-782.',
    principle: 'Tự động điều chỉnh hành trình bơm (auto stroke adjustment) theo tín hiệu điều khiển AIC-781 để hạ pH từ > 12 xuống ~10.',
    params: [
      { tag: 'AIC-781', desc: 'Điều khiển hành trình P-782A/B', normal: 'Target pH ≈ 10', limits: 'Auto-stop on D-781 Low Level' }
    ]
  },
  {
    id: 'D-782',
    tag: 'D-782',
    name: 'No.1 pH Treatment Drum',
    category: 'vessel',
    subsystem: 'phtreatment',
    type: 'agitator_vessel',
    position: [-14, 0, 21],
    size: [2.6, 4.8, 2.6],
    color: '#db2777',
    liquidColor: '#f9a8d4',
    liquidLevel: 0.7,
    opTemp: '45 °C',
    opPress: 'ATM',
    purpose: 'Bồn khuấy trung hòa bậc 1 hạ độ pH của nước thải từ D-721 (pH > 12) xuống mức trung gian pH ≈ 10.',
    principle: 'Khuấy trộn liên tục phản ứng trung hòa NaOH + HCl → NaCl + H2O, giám sát pH đầu ra bằng AIC-781.',
    params: [
      { tag: 'AIC-781', desc: 'Độ pH đầu ra bậc 1 D-782', normal: '10.0 pH', limits: 'Inlet pH > 12 -> Outlet ≈ 10' }
    ]
  },
  {
    id: 'P-784A/B',
    tag: 'P-784A/B',
    name: 'No.2 Acid Metering Pump',
    category: 'pump',
    subsystem: 'phtreatment',
    type: 'pump',
    position: [-11, 0, 20],
    size: [1.7, 1.2, 1.4],
    color: '#ec4899',
    opTemp: '35 °C',
    opPress: '2.0 kg/cm²G',
    purpose: 'Bơm định lượng tinh chỉnh axit HCl 18% vào bồn trung hòa bậc 2 D-783.',
    principle: 'Điều chỉnh hành trình tự động theo AIC-782 nhằm khống chế chính xác pH nước thải đầu ra đạt chuẩn 6–8.',
    params: [
      { tag: 'AIC-782', desc: 'Điều khiển hành trình P-784A/B', normal: 'Target pH 6 – 8', limits: 'Auto-stop on D-781 Low Level' }
    ]
  },
  {
    id: 'D-783',
    tag: 'D-783 & PIT-780',
    name: 'No.2 pH Treatment Drum & PIT-780',
    category: 'vessel',
    subsystem: 'phtreatment',
    type: 'agitator_vessel',
    position: [-7, 0, 21],
    size: [2.6, 4.8, 2.6],
    color: '#ec4899',
    liquidColor: '#fbcfe8',
    liquidLevel: 0.7,
    opTemp: '40 °C',
    opPress: 'ATM',
    purpose: 'Trung hòa bậc 2 đưa pH nước thải từ 10 về dải trung tính 6–8 (kiểm tra chéo bởi AIC-782 và AI-783) trước khi qua hố PIT-780 tới hồ API S-931A/B & CWWT.',
    principle: 'Hố PIT-780 tách cặn polymer, kiểm tra mùi/nhiệt độ và trang bị đầu dò khí cháy AZAG-72HH (nếu báo động cao kích hoạt ESD I-707 đóng LV-701-1).',
    params: [
      { tag: 'AI-783', desc: 'Độ pH xả ra PIT-780 / API Pond', normal: '6.0 – 8.0 pH', limits: 'AZAG-72HH triggers ESD I-707' }
    ]
  }
];

export const CONTROL_VALVES = [
  // Washing
  { id: 'FV-703', tag: 'FV-703', loop: 'FIC-703', service: 'NaOH 25% Injection to M-721', position: [-38.5, 3.8, 14.5], opening: '48%', failSafe: 'FC', esd: 'None', subsystem: 'washing', temp: '35 °C', press: '2.5 kg/cm²G' },
  { id: 'FV-701', tag: 'FV-701', loop: 'FIC-701', service: 'DMW Injection to M-721', position: [-38.5, 3.8, 11.5], opening: '62%', failSafe: 'FC', esd: 'None', subsystem: 'washing', temp: '40 °C', press: '3.0 kg/cm²G' },
  { id: 'TV-705', tag: 'TV-705', loop: 'TIC-705', service: 'LS Steam Heating to M-721 (60°C)', position: [-36, 5.2, 14.8], opening: '54%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'washing', temp: '145 °C', press: '3.5 kg/cm²G' },
  { id: 'LV-701', tag: 'LV-701-1', loop: 'LIC-701', service: 'Alkaline WW Discharge D-721 to D-782', position: [-28, 0.7, 16.5], opening: '45%', failSafe: 'FC', esd: 'ESD I-707 Close', subsystem: 'washing', temp: '60 °C', press: '0.2 kg/cm²G' },
  { id: 'FV-702', tag: 'FV-702', loop: 'FIC-702', service: 'DMW Wash Water to M-722', position: [-38.5, 3.6, 6], opening: '52%', failSafe: 'FC', esd: 'ESD I-706 Close', subsystem: 'washing', temp: '40 °C', press: '3.0 kg/cm²G' },
  { id: 'TV-706', tag: 'TV-706', loop: 'TIC-706', service: 'LS Steam Heating to M-722 (60°C)', position: [-36, 5.2, 4.2], opening: '41%', failSafe: 'FC', esd: 'ESD I-706 Close', subsystem: 'washing', temp: '145 °C', press: '3.5 kg/cm²G' },
  { id: 'LV-703', tag: 'LV-703', loop: 'LIC-703', service: 'WW Recycle from D-722 to M-721', position: [-33, 0.8, 9.5], opening: '50%', failSafe: 'FC', esd: 'None', subsystem: 'washing', temp: '60 °C', press: '0.2 kg/cm²G' },
  { id: 'LV-704', tag: 'LV-704', loop: 'LIC-704', service: 'Washed Hexane Transfer to D-701', position: [-22, 2.8, 5.5], opening: '64%', failSafe: 'FC', esd: 'None', subsystem: 'washing', temp: '60 °C', press: '1.8 kg/cm²G' },

  // Stripping
  { id: 'FV-712', tag: 'FV-712', loop: 'FIC-712', service: 'Crude Hexane Feed to T-703', position: [-12.5, 6.2, -2.8], opening: '68%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'stripping', temp: '60 °C', press: '5.2 kg/cm²G' },
  { id: 'FV-713', tag: 'FV-713', loop: 'FIC-713', service: 'Make-up Hexane from TK-703', position: [-17, 4.2, -9.5], opening: '30%', failSafe: 'FC', esd: 'ESD I-701 Close', subsystem: 'stripping', temp: '43 °C', press: '4.0 kg/cm²G' },
  { id: 'FV-721', tag: 'FV-721', loop: 'FIC-721', service: 'MS Steam to Reboiler E-703A/B', position: [-6, 2.6, -9.8], opening: '59%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'stripping', temp: '175 °C', press: '8.5 kg/cm²G' },
  { id: 'PV-721', tag: 'PV-721', loop: 'PIC-721', service: 'T-703 Overhead Pressure Letdown (3 -> 0.2)', position: [-9, 17.5, -9.5], opening: '72%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'stripping', temp: '98 °C', press: '3.0 → 0.2 kg/cm²G' },
  { id: 'FV-736', tag: 'FV-736', loop: 'FIC-736', service: 'Pure Hexane Reflux to T-703 Top (25%)', position: [-7.5, 14.5, -14], opening: '55%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'stripping', temp: '43 °C', press: '12.0 kg/cm²G' },
  { id: 'FV-722', tag: 'FV-722', loop: 'FIC-722', service: 'T-703 Bottom LP Discharge (Min 5 t/h)', position: [-6.5, 1.0, -1.0], opening: '57%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'stripping', temp: '120 °C', press: '3.0 kg/cm²G' },

  // Low Polymer
  { id: 'PV-723', tag: 'PV-723', loop: 'PIC-723', service: 'P-711A/B Discharge Pressure (22 kg/cm²G)', position: [-1.5, 1.6, 2.0], opening: '65%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'lowpolymer', temp: '120 °C', press: '22.0 kg/cm²G' },
  { id: 'TV-724', tag: 'TV-724', loop: 'TIC-724', service: 'HS Steam to Flash Preheater E-711', position: [1.0, 2.4, 3.6], opening: '61%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'lowpolymer', temp: '240 °C', press: '25.0 kg/cm²G' },
  { id: 'TV-727', tag: 'TV-727', loop: 'TIC-727', service: 'MS Steam Coil in D-711 (160°C)', position: [4.5, 4.2, 3.6], opening: '44%', failSafe: 'FC', esd: 'ESD I-705 Close', subsystem: 'lowpolymer', temp: '175 °C', press: '8.5 kg/cm²G' },
  { id: 'LV-722', tag: 'LV-722', loop: 'LIC-722', service: 'D-711 Bottom Level to E-712', position: [7.2, 1.1, 3.5], opening: '53%', failSafe: 'FC', esd: 'ESD I-701 Close', subsystem: 'lowpolymer', temp: '160 °C', press: '3.0 kg/cm²G' },
  { id: 'TV-728', tag: 'TV-728', loop: 'TIC-728', service: 'HS Steam to LP Preheater E-712 (180°C)', position: [11.0, 2.3, 6.6], opening: '50%', failSafe: 'FC', esd: 'ESD I-701 Close', subsystem: 'lowpolymer', temp: '240 °C', press: '25.0 kg/cm²G' },
  { id: 'SDV-721', tag: 'SDV-721', loop: 'PIC-724', service: 'D-712 Vacuum Suction Isolation', position: [15.0, 5.2, 7.2], opening: '100% (OPEN)', failSafe: 'FC', esd: 'ESD I-703 Close', subsystem: 'lowpolymer', temp: '110 °C', press: '-0.4 kg/cm²G' },
  { id: 'LV-724', tag: 'LV-724', loop: 'LIC-724', service: 'D-714 Condensate Hexane Transfer', position: [19.5, 1.6, 7.0], opening: '47%', failSafe: 'FC', esd: 'ESD I-703 Close', subsystem: 'lowpolymer', temp: '10 °C', press: '2.0 kg/cm²G' },
  { id: 'LV-728', tag: 'LV-728', loop: 'LIC-728', service: 'Molten LP Feed to Drum Flaker M-761A/B', position: [14.2, 2.5, 15.6], opening: '58%', failSafe: 'FC', esd: 'ESD I-703 Close', subsystem: 'lowpolymer', temp: '165 °C', press: '1.5 kg/cm²G' },

  // Purification & Distribution
  { id: 'PV-731', tag: 'PV-731', loop: 'PIC-731', service: 'D-702 Pressure Control (0.2 kg/cm²G)', position: [1.0, 3.2, -16.2], opening: '40%', failSafe: 'FC', esd: 'None', subsystem: 'purification', temp: '42 °C', press: '0.2 kg/cm²G' },
  { id: 'LV-732', tag: 'LV-732-1/2', loop: 'LIC-732', service: 'D-702 Boot Water Drain to PIT-702', position: [1.0, 0.7, -11.5], opening: '35%', failSafe: 'FC', esd: 'ESD I-707 Close', subsystem: 'purification', temp: '42 °C', press: '0.2 kg/cm²G' },
  { id: 'LV-731', tag: 'LV-731', loop: 'LIC-731', service: 'T-704 Dehydrator Top Feed', position: [8.5, 10.5, -14.0], opening: '60%', failSafe: 'FC', esd: 'ESD I-701 Close', subsystem: 'purification', temp: '42 °C', press: '3.5 kg/cm²G' },
  { id: 'FV-734', tag: 'FV-734', loop: 'FIC-734', service: 'LS Steam to Dehydrator Reboiler E-705', position: [11.0, 2.3, -19.6], opening: '55%', failSafe: 'FC', esd: 'ESD I-701 Close', subsystem: 'purification', temp: '145 °C', press: '3.5 kg/cm²G' },
  { id: 'LV-733', tag: 'LV-733', loop: 'LIC-733', service: 'T-704 Bottom Pure Hexane to TK-702', position: [19.5, 2.5, -14.0], opening: '66%', failSafe: 'FC', esd: 'ESD I-701 Close', subsystem: 'purification', temp: '43 °C', press: '4.0 kg/cm²G' },
  { id: 'PV-742', tag: 'PV-742', loop: 'PIC-742', service: 'HP Pure Hexane Header (12 kg/cm²G)', position: [29.5, 2.2, -14.0], opening: '74%', failSafe: 'FO', esd: 'None', subsystem: 'distribution', temp: '43 °C', press: '12.0 kg/cm²G' },
  { id: 'PV-743', tag: 'PV-743', loop: 'PIC-743', service: 'LP Pure Hexane Header (4 kg/cm²G)', position: [28.0, 1.5, -11.0], opening: '50%', failSafe: 'FC', esd: 'None', subsystem: 'distribution', temp: '43 °C', press: '4.0 kg/cm²G' },

  // Slop & Oligomer
  { id: 'FV-751', tag: 'FV-751', loop: 'FIC-751', service: 'Direct LS Steam Sparging to D-753 (90°C)', position: [-30.0, 2.2, -16.2], opening: '52%', failSafe: 'FC', esd: 'ESD I-701 Close', subsystem: 'slop', temp: '145 °C', press: '3.5 kg/cm²G' },
  { id: 'LV-753', tag: 'LV-753-1', loop: 'LIC-753', service: 'D-754 Water Drain to PIT-753', position: [-25.0, 0.7, -11.5], opening: '30%', failSafe: 'FC', esd: 'ESD I-707 Close', subsystem: 'slop', temp: '43 °C', press: '0.2 kg/cm²G' },
  { id: 'FV-746', tag: 'FV-746', loop: 'FIC-746', service: 'Slop Hexane Feed to T-761', position: [26.0, 6.5, 3.0], opening: '56%', failSafe: 'FC', esd: 'None', subsystem: 'oligomer', temp: '43 °C', press: '3.2 kg/cm²G' },
  { id: 'FV-766', tag: 'FV-766', loop: 'FIC-766', service: 'HS Steam to Oligomer Reboiler E-761', position: [28.0, 2.2, 6.2], opening: '60%', failSafe: 'FC', esd: 'None', subsystem: 'oligomer', temp: '240 °C', press: '25.0 kg/cm²G' },
  { id: 'PV-763', tag: 'PV-763', loop: 'PIC-763', service: 'D-762 Butene-1 Vent to Flare (1.5 kg/cm²G)', position: [32.0, 3.0, -1.0], opening: '42%', failSafe: 'FC', esd: 'None', subsystem: 'oligomer', temp: '40 °C', press: '1.5 kg/cm²G' },
  { id: 'LV-789', tag: 'LV-789-1', loop: 'LIC-789', service: 'D-762 Boot Water Drain to PIT-762', position: [34.5, 0.7, 1.0], opening: '28%', failSafe: 'FC', esd: 'ESD I-707 Close', subsystem: 'oligomer', temp: '40 °C', press: '1.5 kg/cm²G' }
];

export const INSTRUMENT_SIGNALS = [
  { id: 'SIG-TIC705', loop: 'TIC-705', type: 'Temperature Control', from: 'M-721', toValve: 'TV-705', setpoint: '60 °C', logic: 'Điều tiết hơi LS giữ 60°C chống kết tinh LP' },
  { id: 'SIG-LIC701', loop: 'LIC-701', type: 'Interface Level + ESD I-707', from: 'D-721', toValve: 'LV-701', setpoint: '2350 mm', logic: 'Xả nước kiềm pH>12; đóng ngay khi AZAG-72HH (I-707)' },
  { id: 'SIG-LIC703', loop: 'LIC-703', type: 'Level Recycle Control', from: 'D-722', toValve: 'LV-703', setpoint: '2150 mm', logic: 'Tuần hoàn nước rửa pH 7–8 về M-721' },
  { id: 'SIG-PIC721', loop: 'PIC-721', type: 'Pressure + ESD I-705 (PZA-729HH)', from: 'T-703', toValve: 'PV-721', setpoint: '3.0 kg/cm²G', logic: 'Giảm áp hơi đỉnh; HH 4.5 kg/cm²G kích hoạt ESD I-705' },
  { id: 'SIG-LIC721', loop: 'LIC-721', type: 'Bottom Level + ESD I-705 (LZT-729)', from: 'T-703', toValve: 'FV-722', setpoint: '1000 mm', logic: 'Khống chế mức đáy & nồng độ LP 5–10 wt%' },
  { id: 'SIG-TIC724', loop: 'TIC-724', type: 'Flash Temp Control', from: 'E-711', toValve: 'TV-724', setpoint: '220 °C', logic: 'Điều tiết hơi HS đảm bảo nhiệt hóa hơi cho tuyến 75m' },
  { id: 'SIG-LIC722', loop: 'LIC-722', type: '1st Flash Level Control', from: 'D-711', toValve: 'LV-722', setpoint: '2200 mm', logic: 'Cấp LP lỏng sang E-712; PZA-722HH kích hoạt ESD I-705' },
  { id: 'SIG-PIC724', loop: 'PIC-724', type: 'Vacuum Interlock + ESD I-703', from: 'D-712', toValve: 'SDV-721', setpoint: '-0.40 kg/cm²G', logic: 'Start C-701 tại -0.2; Stop tại -0.5; ESD I-703 đóng SDV-721' },
  { id: 'SIG-LIC732', loop: 'LIC-732', type: 'Boot Water + ESD I-707', from: 'D-702', toValve: 'LV-732', setpoint: '580 mm', logic: 'Xả nước tự do ra PIT-702; đóng khi AZAG-71HH (I-707)' },
  { id: 'SIG-LIC731', loop: 'LIC-731', type: 'Dehydrator Feed Control', from: 'D-702', toValve: 'LV-731', setpoint: '1950 mm', logic: 'Cấp Hexane bão hòa nước (~250 ppm) lên đỉnh T-704' },
  { id: 'SIG-LIC733', loop: 'LIC-733', type: 'Dry Hexane Level Control', from: 'T-704', toValve: 'LV-733', setpoint: '1150 mm', logic: 'Xuất Hexane khô (≤10 ppm) qua E-706 tới TK-702' },
  { id: 'SIG-PIC742', loop: 'PIC-742', type: 'HP Header Pressure', from: 'P-708A/B', toValve: 'PV-742', setpoint: '12.0 kg/cm²G', logic: 'Ổn định áp suất Hexane khô cấp cho lò phản ứng' },
  { id: 'SIG-AIC781', loop: 'AIC-781', type: 'pH Stage-1 Stroke Control', from: 'D-782', toEquipment: 'P-782A/B', setpoint: 'pH 10.0', logic: 'Điều chỉnh hành trình bơm axit HCl 18% hạ pH >12 xuống 10' },
  { id: 'SIG-AIC782', loop: 'AIC-782', type: 'pH Stage-2 Stroke Control', from: 'D-783', toEquipment: 'P-784A/B', setpoint: 'pH 6.0–8.0', logic: 'Tinh chỉnh bơm axit HCl 18% đạt chuẩn xả pH 6–8' }
];

export const PIPELINES = [
  // 1. Hexane Washing
  {
    id: 'L-720-ML',
    tag: 'ML-FEED-721',
    name: 'Tuyến cấp Mother Liquor (ML) từ D-301',
    subsystem: 'washing',
    color: '#06b6d4',
    temp: '60 °C',
    press: '1.2 kg/cm²G',
    medium: 'Mother Liquor (Hexane + Low Polymer + Xúc tác dư Ti/Al + HCl)',
    purpose: 'Đưa dung dịch mẹ từ cụm tách ly tâm D-301 vào bồn khuấy M-721 để khử xúc tác và trung hòa axit trước khi chưng cất.',
    valves: ['FV-701', 'FV-703'],
    points: [[-42, 3.6, 13], [-36, 3.6, 13]]
  },
  {
    id: 'L-721-SEP',
    tag: 'HX-NAOH-721',
    name: 'Tuyến hỗn hợp ML + NaOH + DMW sang D-721',
    subsystem: 'washing',
    color: '#22d3ee',
    temp: '60 °C',
    press: '0.2 kg/cm²G',
    medium: 'Hexane + Low Polymer + Nước muối NaCl (pH > 12)',
    purpose: 'Dẫn hỗn hợp đã trung hòa axit và kết tủa hydroxit kim loại (Ti(OH)4, Al(OH)3) sang bình lắng tách trọng lực D-721.',
    valves: ['TV-705'],
    points: [[-36, 3.2, 13], [-30, 2.2, 13]]
  },
  {
    id: 'L-721-INT',
    tag: 'INT-REC-721',
    name: 'Đường hồi lưu lớp giao diện (Interface Line)',
    subsystem: 'washing',
    color: '#f59e0b',
    temp: '60 °C',
    press: '0.2 kg/cm²G',
    medium: 'Hỗn hợp nhũ tương Nước + Hexane + LP tại mặt phân cách',
    purpose: 'Rút hỗn hợp tại lớp giao diện D-721 trả ngược về M-721 nhằm ngăn chặn Low Polymer kết tủa đông đặc tại mặt phân cách làm nghẽn thiết bị.',
    valves: [],
    points: [[-30, 1.4, 14.2], [-33, 1.4, 15.2], [-36, 1.6, 14.2]]
  },
  {
    id: 'L-721-WW',
    tag: 'WW-ALK-701',
    name: 'Tuyến xả nước thải kiềm (pH > 12) sang D-782',
    subsystem: 'washing',
    color: '#ec4899',
    temp: '60 °C',
    press: '0.2 kg/cm²G',
    medium: 'Nước thải kiềm chứa NaOH dư & muối NaCl (pH > 12)',
    purpose: 'Xả lớp nước thải kiềm ở đáy D-721 qua van LIC-701 (LV-701-1) sang cụm trung hòa axit HCl D-782. Đóng khẩn cấp khi ESD I-707.',
    valves: ['LV-701'],
    points: [[-30, 0.6, 13], [-28, 0.6, 17], [-14, 4.2, 21]]
  },
  {
    id: 'L-721-OVF',
    tag: 'HX-OVF-722',
    name: 'Tuyến tràn Hexane + LP từ D-721 sang M-722',
    subsystem: 'washing',
    color: '#38bdf8',
    temp: '60 °C',
    press: '0.2 kg/cm²G',
    medium: 'Hexane + Low Polymer đã khử clorua',
    purpose: 'Chảy tràn pha hữu cơ nhẹ ở đỉnh D-721 (~60% mức) sang M-722 để rửa sạch lượng xút NaOH còn cuốn theo bằng nước DMW.',
    valves: ['FV-702', 'TV-706'],
    points: [[-30, 2.3, 11.8], [-36, 3.2, 6]]
  },
  {
    id: 'L-722-SEP',
    tag: 'HX-DMW-722',
    name: 'Tuyến hỗn hợp Hexane + DMW sang D-722',
    subsystem: 'washing',
    color: '#67e8f9',
    temp: '60 °C',
    press: '0.2 kg/cm²G',
    medium: 'Hexane + LP + Nước rửa trung tính (pH 7–8)',
    purpose: 'Đưa hỗn hợp sau rửa nước sang bình lắng D-722 để tách nước triệt để trước khi đưa sang tháp chưng cất.',
    valves: [],
    points: [[-36, 2.6, 6], [-30, 2.2, 6]]
  },
  {
    id: 'L-722-REC',
    tag: 'WW-REC-703',
    name: 'Tuyến tuần hoàn nước rửa từ D-722 về M-721',
    subsystem: 'washing',
    color: '#a855f7',
    temp: '60 °C',
    press: '0.2 kg/cm²G',
    medium: 'Nước rửa pH 7–8 (chứa lượng nhỏ NaOH)',
    purpose: 'Tuần hoàn nước rửa từ đáy D-722 qua LV-703 về M-721 để tiết kiệm nước khử khoáng DMW và tận dụng kiềm dư.',
    valves: ['LV-703'],
    points: [[-30, 0.6, 6], [-33, 0.6, 9.5], [-36, 1.0, 13]]
  },
  {
    id: 'L-722-D701',
    tag: 'CRUDE-HX-701',
    name: 'Tuyến cấp Hexane thô đã rửa sạch sang D-701',
    subsystem: 'washing',
    color: '#0284c7',
    temp: '60 °C',
    press: '1.8 kg/cm²G',
    medium: 'Crude Hexane + Low Polymer sạch (không chứa nước/tro)',
    purpose: 'Bơm P-721A/B đẩy Hexane đã rửa sạch qua LV-704 vào 3 vòi phun tiếp tuyến của bồn D-701 tạo dòng xoáy chống vón cục LP.',
    valves: ['LV-704'],
    points: [[-27.5, 1.6, 6], [-24, 1.2, 6], [-20, 5.2, -2]]
  },

  // 2. Stripping
  {
    id: 'L-701-T703',
    tag: 'FEED-T703-712',
    name: 'Tuyến cấp liệu chính vào tháp chưng cất T-703',
    subsystem: 'stripping',
    color: '#2563eb',
    temp: '60 °C',
    press: '5.2 → 3.0 kg/cm²G',
    medium: 'Crude Hexane + 5–10% Low Polymer',
    purpose: 'Bơm P-702A/B cấp nguyên liệu qua van FV-712 vào vùng đĩa nhập liệu của tháp T-703 để chưng tách Hexane.',
    valves: ['FV-712'],
    points: [[-20, 0.8, -2], [-15, 1.2, -2], [-10, 8.2, -4]]
  },
  {
    id: 'L-TK703-D701',
    tag: 'MKUP-HX-713',
    name: 'Tuyến cấp Hexane bổ sung (Make-up) từ TK-703',
    subsystem: 'stripping',
    color: '#eab308',
    temp: '43 °C',
    press: '4.0 kg/cm²G',
    medium: 'Make-up Pure Hexane',
    purpose: 'Bổ sung lượng Hexane hao hụt cho hệ thống qua bơm P-703A/B và van FV-713, đồng thời pha loãng đáy T-703 khi độ nhớt LP tăng cao.',
    valves: ['FV-713'],
    points: [[-19, 0.8, -14], [-15, 1.2, -7], [-10, 4.5, -4]]
  },
  {
    id: 'L-T703-REB',
    tag: 'REB-CIRC-703',
    name: 'Vòng tuần hoàn cưỡng bức đáy T-703 qua E-703A/B',
    subsystem: 'stripping',
    color: '#ef4444',
    temp: '120 → 124 °C',
    press: '3.1 kg/cm²G',
    medium: 'Dung dịch Low Polymer (5–10 wt%) + Hơi Hexane sôi',
    purpose: 'Bơm P-705A/B tuần hoàn cưỡng bức chất lỏng độ nhớt cao qua Reboiler E-703A/B (hơi MS FV-721) giữ đáy T-703 ở 120°C tránh đông cục LP.',
    valves: ['FV-721'],
    points: [[-10, 0.8, -4], [-6, 1.1, -4], [-6, 1.2, -8], [-10, 3.2, -4]]
  },
  {
    id: 'L-T703-OVH',
    tag: 'OVH-VAP-721',
    name: 'Tuyến hơi Hexane đỉnh T-703 sang E-704',
    subsystem: 'stripping',
    color: '#34d399',
    temp: '98 → 76 °C',
    press: '3.0 → 0.2 kg/cm²G',
    medium: 'Hơi Hexane tinh khiết + cấu tử nhẹ (Butene-1, Ethylene)',
    purpose: 'Dẫn hơi Hexane đỉnh T-703 qua van điều áp PV-721 (hạ từ 3.0 xuống 0.2 kg/cm²G) tới bộ ngưng tụ E-704.',
    valves: ['PV-721'],
    points: [[-10, 16.5, -4], [-9, 17.5, -15], [-6, 2.2, -15]]
  },

  // 3. Low Polymer
  {
    id: 'L-T703-E711',
    tag: 'LP-HP-722',
    name: 'Tuyến bơm tăng áp Low Polymer (22 kg/cm²G)',
    subsystem: 'lowpolymer',
    color: '#ea580c',
    temp: '120 °C',
    press: '22.0 kg/cm²G',
    medium: 'Dung dịch Low Polymer 10 wt% trong Hexane',
    purpose: 'Bơm P-711A/B nén dung dịch đáy T-703 lên 22 kg/cm²G (kiểm soát lưu lượng qua FV-722, min 5 t/h) để gia nhiệt quá nhiệt trong E-711.',
    valves: ['FV-722', 'PV-723'],
    points: [[-10, 0.6, -4], [-4, 1.2, 2], [1, 1.2, 2]]
  },
  {
    id: 'L-E711-D711',
    tag: 'FLASH-75M-LINE',
    name: 'Tuyến gia nhiệt 75m (Steam Tracing) từ E-711 vào D-711',
    subsystem: 'lowpolymer',
    color: '#f97316',
    temp: '200 – 220 → 160 °C',
    press: '22.0 → 3.0 kg/cm²G',
    medium: 'Hỗn hợp 2 pha Low Polymer nóng chảy + Hơi Hexane Flash',
    purpose: 'Tuyến ống dài tối thiểu 75m (dốc 1/100, gia nhiệt steam tracing) cấp đủ nhiệt hóa hơi trước khi xả áp đột ngột vào D-711 để tách Hexane.',
    valves: ['TV-724', 'TV-727'],
    points: [[3.2, 1.2, 2], [4.5, 4.2, 2], [6, 5.5, 2]]
  },
  {
    id: 'L-D711-T703',
    tag: 'FL-VAP-711',
    name: 'Tuyến hồi lưu hơi Hexane từ D-711 về tháp T-703',
    subsystem: 'lowpolymer',
    color: '#6ee7b7',
    temp: '160 °C',
    press: '3.0 kg/cm²G',
    medium: 'Hơi Hexane tách nhanh (Flash Vapor)',
    purpose: 'Thu hồi toàn bộ hơi Hexane bốc lên từ bình Flash cấp 1 D-711 đưa trở lại tháp chưng cất T-703 để tinh chế.',
    valves: [],
    points: [[6, 7.2, 2], [6, 10.5, -4], [-10, 10.5, -4]]
  },
  {
    id: 'L-D711-D712',
    tag: 'LP-2ND-722',
    name: 'Tuyến cấp Low Polymer qua E-712 vào bồn chân không D-712',
    subsystem: 'lowpolymer',
    color: '#f97316',
    temp: '160 → 180 °C',
    press: '10.0 → -0.4 kg/cm²G',
    medium: 'Low Polymer nóng chảy (độ nhớt 10–7000 cP)',
    purpose: 'Chuyển LP lỏng 160°C qua LV-722 / bơm P-712 và bộ gia nhiệt E-712 (lên 180°C) vào bồn chân không D-712 để tách nốt Hexane.',
    valves: ['LV-722', 'TV-728'],
    points: [[6, 0.6, 2], [8, 1.1, 5], [11, 1.2, 5], [15, 5.5, 5]]
  },
  {
    id: 'L-D712-VAC',
    tag: 'VAC-VAP-724',
    name: 'Tuyến hút chân không hơi Hexane từ D-712 qua C-701/E-713',
    subsystem: 'lowpolymer',
    color: '#a7f3d0',
    temp: '180 → 5 °C',
    press: '-0.4 → 0.2 kg/cm²G',
    medium: 'Hơi Hexane áp suất chân không (-0.4 kg/cm²G)',
    purpose: 'Bơm chân không C-701 hút hơi Hexane qua SDV-721, nén qua bình ngưng Brine E-713 vào D-714 (xả khí không ngưng qua D-713 kiểm soát O2 AZT-701).',
    valves: ['SDV-721', 'LV-724'],
    points: [[15, 7.6, 5], [15, 1.5, 9], [19, 1.5, 9]]
  },
  {
    id: 'L-D712-FLAKER',
    tag: 'MOLTEN-LP-761',
    name: 'Tuyến chuyển Low Polymer sạch qua D-717 tới Drum Flaker M-761A/B',
    subsystem: 'lowpolymer',
    color: '#fdba74',
    temp: '180 → 160 °C',
    press: '0.2 kg/cm²G',
    medium: 'Low Polymer tinh khiết nóng chảy (Hexane < 5 wt%)',
    purpose: 'Bơm P-713A/B chuyển LP sạch vào bồn đệm D-717, sau đó bơm P-717A/B cấp lên trống làm lạnh M-761A/B tạo vảy đóng bao Big Bag.',
    valves: ['LV-728'],
    points: [[15, 0.6, 5], [12, 1.0, 9], [9, 5.2, 13], [9, 0.6, 13], [12, 1.1, 15], [15, 2.6, 16]]
  },

  // 4. Purification & Distribution
  {
    id: 'L-E704-D702',
    tag: 'COND-HX-702',
    name: 'Tuyến lỏng Hexane ngưng tụ từ E-704/E-708 vào D-702',
    subsystem: 'purification',
    color: '#10b981',
    temp: '72 → 42 °C',
    press: '0.2 kg/cm²G',
    medium: 'Hexane lỏng bão hòa nước (~250 ppm) + nước tự do',
    purpose: 'Thu gom toàn bộ dịch ngưng từ E-704 và E-708 (5°C) vào bình lắng tách D-702.',
    valves: ['PV-731', 'LV-732'],
    points: [[-3.5, 1.2, -15], [-1, 1.2, -18], [1, 2.2, -14]]
  },
  {
    id: 'L-D702-T704',
    tag: 'DEHYD-FEED-731',
    name: 'Tuyến cấp Hexane ẩm (~250 ppm) lên đỉnh tháp T-704',
    subsystem: 'purification',
    color: '#34d399',
    temp: '42 °C',
    press: '3.5 kg/cm²G',
    medium: 'Hexane chứa ~250 ppm nước + Butene-1',
    purpose: 'Bơm P-706A/B cấp Hexane từ D-702 qua van LV-731 lên đỉnh tháp T-704 để thực hiện chưng cất đẳng phí tách nước.',
    valves: ['LV-731'],
    points: [[3.5, 1.4, -14], [6, 1.2, -14], [8.5, 12.5, -14], [11, 12.5, -14]]
  },
  {
    id: 'L-T704-OVH',
    tag: 'AZEO-OVH-704',
    name: 'Tuyến hơi đẳng phí Hexane-Nước đỉnh T-704 về E-704',
    subsystem: 'purification',
    color: '#6ee7b7',
    temp: '76 °C',
    press: '0.35 kg/cm²G',
    medium: 'Hỗn hợp hơi đẳng phí Nước-Hexane (0–22.5 wt% H2O) + Butene-1',
    purpose: 'Dẫn hơi đẳng phí có nhiệt độ sôi thấp từ đỉnh T-704 quay lại E-704 để ngưng tụ và tách nước tại boot leg D-702.',
    valves: ['FV-734'],
    points: [[11, 14.5, -14], [11, 16.2, -14], [-6, 16.2, -14], [-6, 2.2, -15]]
  },
  {
    id: 'L-T704-TK702',
    tag: 'PURE-HX-733',
    name: 'Tuyến xuất Hexane khô (≤ 10 ppm nước) qua E-706 tới TK-702',
    subsystem: 'distribution',
    color: '#22c55e',
    temp: '84 → 43 °C',
    press: '4.0 kg/cm²G',
    medium: 'Pure Hexane (Hàm lượng nước ≤ 10 wt ppm)',
    purpose: 'Bơm P-707A/B đẩy Hexane khô đáy T-704 qua bộ làm mát E-706 xuống 40–43°C và van LV-733 vào bể chứa TK-702 (hoặc TK-703 khi khởi động).',
    valves: ['LV-733'],
    points: [[11, 0.6, -14], [14, 1.1, -14], [17, 1.2, -14], [22, 6.0, -14]]
  },
  {
    id: 'L-TK702-DIST',
    tag: 'HP-DIST-742',
    name: 'Tuyến phân phối Hexane siêu khô (< 5 ppm) tới Lò phản ứng & Hồi lưu T-703',
    subsystem: 'distribution',
    color: '#4ade80',
    temp: '43 °C',
    press: '12.0 kg/cm²G (LP: 4.0 kg/cm²G)',
    medium: 'Ultra-dry Pure Hexane (Độ ẩm < 5 wt ppm)',
    purpose: 'Bơm P-708A/B nén lên 12 kg/cm²G qua tháp sấy rây phân tử 4A D-703A/B và lọc F-704A/B cấp cho khu phản ứng (Sec. 100/200/300), nhánh hạ áp 4 kg/cm²G (PV-743) và hồi lưu T-703 (FV-736).',
    valves: ['PV-742', 'PV-743', 'FV-736'],
    points: [[24.6, 0.8, -14], [27, 1.2, -14], [32, 5.8, -14], [32, 0.6, -14], [38, 0.6, -14]]
  },

  // 5. Slop & Oligomer & pH
  {
    id: 'L-SLOP-REC',
    tag: 'SLOP-REC-751',
    name: 'Tuyến thu hồi Hexane thải (D-751/752 → D-753 → E-751 → TK-703)',
    subsystem: 'slop',
    color: '#eab308',
    temp: '90 → 43 °C',
    press: '0.2 → 4.0 kg/cm²G',
    medium: 'Slop Hexane đã trung hòa NaOH & tách hơi nước LS',
    purpose: 'Chưng cất lôi cuốn hơi nước LS ở 90°C tại D-753, ngưng tụ qua E-751/E-752 vào D-754 và bơm P-751 thu hồi về TK-703 / D-701.',
    valves: ['FV-751', 'LV-753'],
    points: [[-34, 1.2, -14], [-30, 4.8, -14], [-25, 1.5, -14], [-22, 1.2, -11], [-19, 5.8, -14]]
  },
  {
    id: 'L-OLIG-PROC',
    tag: 'OLIG-CUT-761',
    name: 'Tuyến phân tách Oligomer (D-718 → D-761 → T-761 → D-764 / D-763)',
    subsystem: 'oligomer',
    color: '#a855f7',
    temp: '43 → 180 → 43 °C',
    press: '1.5 – 1.7 kg/cm²G',
    medium: 'Hexane + Oligomer (<2.5 wt% side) + Butene-1 (<0.03 mol%)',
    purpose: 'Tách Butene-1 lên đỉnh D-762, thu hồi Hexane sạch ở khay số 10 qua E-765/D-764 về TK-703, và xuất 90% Oligomer đáy qua E-764/D-763 sang nhà máy Olefin.',
    valves: ['FV-746', 'FV-766', 'PV-763', 'LV-789'],
    points: [[21.9, 1.2, 5], [24, 1.2, 2], [28, 7.5, 4], [28, 15.0, 4], [32, 1.8, 1], [33, 1.5, 5], [33, 1.5, 9]]
  },
  {
    id: 'L-PH-NEUT',
    tag: 'PH-TREAT-780',
    name: 'Tuyến trung hòa 2 bậc HCl 18% (D-781 → D-782 → D-783 → PIT-780)',
    subsystem: 'phtreatment',
    color: '#f43f5e',
    temp: '45 → 40 °C',
    press: 'ATM',
    medium: 'Nước thải trung hòa từ pH > 12 → pH 10 → pH 6–8 (HCl 18%)',
    purpose: 'Trung hòa kiềm bằng axit HCl 18% qua 2 bậc khuấy D-782 (pH ~10) và D-783 (pH 6–8) đạt chuẩn môi trường xả qua PIT-780 tới hồ API S-931A/B & CWWT.',
    valves: [],
    points: [[-22, 0.8, 21], [-18, 1.0, 20], [-14, 3.8, 21], [-14, 1.2, 21], [-11, 1.0, 20], [-7, 3.8, 21], [-7, 0.8, 21], [-1, 0.8, 21]]
  }
];

export const DEVIATION_SCENARIOS = [
  {
    id: 'normal',
    title: 'Vận hành bình thường (Normal Operation)',
    severity: 'normal',
    affectedIds: [],
    tag: 'SYSTEM NORMAL',
    cause: 'Toàn bộ thông số nhiệt độ, áp suất, mức và nồng độ nằm trong giới hạn vận hành an toàn (SOL).',
    consequence: 'Hexane tinh khiết đạt độ ẩm < 5 wt ppm; Low polymer tạo vảy trắng đạt chuẩn; Nước thải đạt pH 6–8.',
    prevent: 'Tuân thủ bảo trì định kỳ (PM) và tuần tra hiện trường theo SOP.',
    actions: [
      'Field Operator (FO): Kiểm tra kính thủy (LG), áp kế tại chỗ (PG), bẫy hơi và độ rung bơm.',
      'Boardman (BM): Giám sát các vòng điều khiển PIC, LIC, TIC, FIC, AIC trên DCS.'
    ]
  },
  {
    id: 'pic721_high',
    title: 'PIC-721: Áp suất cao tháp chưng cất T-703 (> 4.0 kg/cm²G)',
    severity: 'critical',
    affectedIds: ['T-703', 'E-703A/B', 'PV-721'],
    tag: 'PIC-721 HIGH / ESD I-705',
    cause: 'Đóng nhầm van điều áp đỉnh PV-721 hoặc cấp hơi MS quá mức qua FV-721 vào E-703A/B.',
    consequence: 'Quá áp tháp T-703 (HH PZA-729 tại 4.5 kg/cm²G kích hoạt ESD I-705), nguy cơ mất kiểm soát (LOC) và cháy nổ.',
    prevent: 'Bảo trì định kỳ PV-721 và FV-721.',
    actions: [
      '1. Kiểm tra độ mở thực tế van PV-721 tại hiện trường.',
      '2. Nếu vị trí van đúng nhưng áp vẫn cao: FO mở điều tiết van bypass thủ công để xả áp sang E-704.',
      '3. Nếu sai lệch độ mở: Hiệu chỉnh lại bộ định vị van PV-721.',
      '4. Boardman giảm lưu lượng hơi MS cấp cho Reboiler E-703A/B qua van FV-721.'
    ]
  },
  {
    id: 't703_low_temp',
    title: 'T-703 Bottom Temp < 115°C: Nguy cơ đông cục Low Polymer (Slide 46)',
    severity: 'warning',
    affectedIds: ['T-703', 'E-703A/B', 'P-705A/B', 'D-722'],
    tag: 'T-703 LOW TEMP (<115°C)',
    cause: 'Hàm lượng nước cao trong ML (lọt nước từ D-722), nồng độ LP > 10% làm tăng độ nhớt hoặc nghẽn ống trao đổi nhiệt E-703A/B.',
    consequence: 'Nhiệt độ đáy tụt dưới điểm nóng chảy LP (90–115°C) gây đông cục polymer làm tắc đường ống đáy T-703 và bơm P-711A/B.',
    prevent: 'Giám sát chặt mức nước LIC-703 tại D-722 và giữ nồng độ LP đáy T-703 trong khoảng 5–10 wt%.',
    actions: [
      '1. Tăng lượng hơi MS cấp vào Reboiler E-703A/B qua FV-721.',
      '2. Bổ sung thêm Hexane tươi từ TK-703 (FV-713) để pha loãng nồng độ LP ở đáy T-703.',
      '3. Giảm lưu lượng nhập liệu ML (FV-712) và kiểm tra mức tách nước tại D-722 (LIC-703).'
    ]
  },
  {
    id: 'e708_icing',
    title: 'D-702 Áp suất > 0.2 kg/cm²G: Đóng băng (Icing) tại E-708 (Slide 48)',
    severity: 'warning',
    affectedIds: ['E-708', 'D-702', 'E-704'],
    tag: 'E-708 TUBE ICING',
    cause: 'Nhiệt độ nước muối lạnh Brine (BRS) quá thấp gây đóng băng hơi ẩm bên trong ống của Vent Condenser E-708.',
    consequence: 'Tắc nghẽn đường thoát khí không ngưng sang LF, làm tăng áp suất bình chứa D-702 vượt 0.2 kg/cm²G.',
    prevent: 'Kiểm soát nhiệt độ Brine đầu ra E-708 duy trì ổn định ở 5°C.',
    actions: [
      '1. Kiểm tra áp suất tại D-702 (PIC-731) và nhiệt độ đầu ra E-708.',
      '2. Tạm cắt/giảm lưu lượng nước muối lạnh Brine (Cut off brine) qua E-708 để làm tan lớp băng trong ống.',
      '3. Kiểm tra lại thông thoáng đường xả khí không ngưng sang hệ thống LF.'
    ]
  },
  {
    id: 'fzi732_low',
    title: 'FZA-732LL: Mất nước làm mát CWR tại E-704 (< 475 t/h)',
    severity: 'critical',
    affectedIds: ['E-704', 'D-702', 'T-703'],
    tag: 'FZA-732LL TRIP RISK',
    cause: 'Mất nguồn nước làm mát CWS tới bộ ngưng tụ đỉnh E-704.',
    consequence: 'Mất khả năng ngưng tụ hơi đỉnh từ T-703 và T-704, gây quá áp hệ thống D-702.',
    prevent: 'Bảo trì phòng ngừa hệ thống bơm nước làm mát CWS.',
    actions: [
      '1. Kiểm tra áp suất cấp CWS tại áp kế hiện trường PG-7307.',
      '2. Khởi động lại bơm nước làm mát dự phòng nếu bơm chính bị trip.',
      '3. FO kiểm tra mở hoàn toàn các van cô lập tay trên tuyến CWS/CWR của E-704.'
    ]
  },
  {
    id: 'pic724_high',
    title: 'PIC-724: Mất chân không D-712 / Trip bơm C-701 (> -0.2 kg/cm²G)',
    severity: 'critical',
    affectedIds: ['D-712', 'C-701', 'M-761A/B', 'SDV-721'],
    tag: 'C-701 VACUUM LOSS',
    cause: 'Bơm chân không C-701 ngừng sự cố hoặc van SDV-721 đóng.',
    consequence: 'Hexane không bay hơi hết trong D-712, cuốn theo Low Polymer xuống Drum Flaker M-761A/B gây nguy cơ cháy nổ.',
    prevent: 'Giám sát khóa liên động DCS PIC-724 (Start -0.2 / Stop -0.5 kg/cm²G).',
    actions: [
      '1. Kiểm tra trạng thái chạy của bơm C-701 và áp kế chân không PG-7211.',
      '2. Kiểm tra trạng thái mở của van ngắt khẩn cấp SDV-721.',
      '3. Khởi động lại C-701 ngay khi điều kiện liên động cho phép.'
    ]
  },
  {
    id: 'ai205_high',
    title: 'T-704 Hàm lượng nước đáy > 10 ppm (Slide 48)',
    severity: 'warning',
    affectedIds: ['T-704', 'E-705', 'D-702', 'TK-702'],
    tag: 'T-704 WATER > 10 PPM',
    cause: 'Tách pha kém trong D-702, rò rỉ nước làm mát CW/Brine tại bộ trao đổi nhiệt hoặc thiếu hơi LS vào Reboiler E-705 (FV-734).',
    consequence: 'Nước là chất độc của xúc tác chính (Catalyst poison), làm suy giảm hoạt tính xúc tác trong lò phản ứng.',
    prevent: 'Kiểm soát mức LIC-731/732 tại D-702 và lưu lượng hơi LS FIC-734.',
    actions: [
      '1. Tăng mức kiểm soát LIC-731 tại D-702 và xả kiểm tra chân lắng nước boot leg (LIC-732).',
      '2. Tăng lưu lượng hơi LS cấp cho Reboiler E-705 qua van FV-734.',
      '3. Chuyển hướng dòng đầu ra E-706 về TK-703 (qua HC-731/732) cho đến khi độ ẩm đạt ≤ 10 ppm.'
    ]
  },
  {
    id: 'pit780_hc',
    title: 'AZAG-72HH: Phát hiện hơi Hexane tại PIT-780 (Kích hoạt ESD I-707)',
    severity: 'critical',
    affectedIds: ['D-721', 'D-782', 'D-783', 'LV-701'],
    tag: 'ESD I-707 TRIGGERED',
    cause: 'Cạn mức giao diện nước tại D-721 (LIC-701) hoặc D-702/D-754/D-762 làm lọt Hexane sang hố thoát nước PIT.',
    consequence: 'Nguy cơ cháy nổ tại khu vực xử lý nước thải và hồ API S-931A/B.',
    prevent: 'Giám sát chặt chẽ mức giao diện và bộ tách dầu skimmer tại PIT.',
    actions: [
      '1. Xác nhận hệ thống liên động ESD I-707 đã tự động đóng các van xả nước đáy: LV-701-1, LV-732-1/2, LV-753-1 và LV-789-1.',
      '2. Kiểm tra kính thủy mức giao diện trên D-721 và D-702, nâng lại lớp đệm nước an toàn.',
      '3. Kiểm tra nồng độ khí cháy tại PIT-780 trước khi mở lại tuyến xả.'
    ]
  }
];
