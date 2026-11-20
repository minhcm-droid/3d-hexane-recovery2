# LSP — Section 700 Hexane Recovery Unit (3D Digital Twin v2.0)

Mô hình mô phỏng tương tác 3D (React + Vite + Three.js) cho phân xưởng **Hexane Distillation / Recovery (Section 700)** tại Nhà máy Hóa dầu Long Sơn (LSP), được nâng cấp đầy đủ theo tài liệu đào tạo *Section 700 Pre-OJT Training*:

## Các tính năng chính (v2.0)
1. **Đầy đủ 8 phân khu công nghệ & 35+ cụm thiết bị 3D**:
   - **Bơm (Pumps)**: `P-721A/B`, `P-702A/B`, `P-703A/B`, `P-705A/B`, `P-711A/B`, `P-712`, `P-713A/B`, `P-717A/B`, `C-701` (Vacuum Pump), `P-706A/B`, `P-707A/B`, `P-708A/B`, `P-751`, `P-718A/B`, `P-761A/B`, `P-763A/B`, `P-764A/B`, `P-782A/B`, `P-784A/B`.
   - **Thiết bị trao đổi nhiệt (Heat Exchangers)**: `E-721`, `E-722`, `E-703A/B` (Thermosiphon Reboiler), `E-711` (Flash Preheater + 75m Traced Line), `E-712`, `E-713`, `E-770`, `E-704`, `E-708`, `E-705`, `E-706`, `E-751`, `E-752`, `E-761`, `E-762`, `E-763`, `E-764`, `E-765`.
   - **Tháp chưng cất & Bồn chứa**: `T-703` (10 sieve trays), `T-704` (Azeotropic Dehydrator), `T-761` (Oligomer Cut Tower), `M-721/722`, `D-721/722` (3-phase interface), `D-701` (3 tangential nozzles), `D-711/712`, `D-717`, `M-761A/B` (Drum Flaker), `D-702`, `TK-702/703`, `D-703A/B` (Mol. Sieve 4A), `D-753`, `D-781/782/783`.
2. **Van điều khiển 3D (Control Valves)**:
   - Hiển thị trực quan 35 van điều khiển (`FV`, `PV`, `TV`, `LV`, `SDV`) ngay trên đường ống, kèm thông số độ mở %, Fail-Safe (`FC/FO`) và khóa liên động ESD (`I-701`, `I-703`, `I-705`, `I-706`, `I-707`).
3. **Tín hiệu Instrument & Vòng điều khiển DCS/ESD**:
   - Các đường tín hiệu nét đứt màu xanh nối trực tiếp từ cảm biến trên thiết bị tới van điều khiển / bơm định lượng (`PIC-721`, `LIC-721`, `TIC-724`, `PIC-724`, `LIC-732`, `AIC-781/782`...).
4. **Mục đích tuyến đường ống + Nhiệt độ & Áp suất vận hành**:
   - Click trực tiếp vào bất kỳ đường ống nào trong không gian 3D để xem **Mục đích công nghệ**, **Lưu chất**, **Nhiệt độ (°C)** và **Áp suất (kg/cm²G / mmAq)**.

## Hướng dẫn chạy & Deploy lên Vercel
```bash
npm install
npm run dev
```
Đẩy toàn bộ thư mục lên GitHub và kết nối với Vercel (Framework Preset: `Vite`, Build Command: `npm run build`, Output Directory: `dist`).
