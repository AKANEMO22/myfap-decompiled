# myFAP Mobile App (com.fuct) - Reverse Engineered Source

Dự án giải ngược (Reverse Engineering) toàn bộ ứng dụng **myFAP** chính thức của Đại học FPT (Package: `com.fuct`, Version: `2.0.7`).

## 1. Thông Tin Kiến Trúc Ứng Dụng (Architecture)
- **Framework gốc**: React Native.
- **JavaScript Engine**: Facebook Hermes Bytecode (HBC Version 96).
- **Target OS**: Android (Min SDK: 32, Target SDK: 37).
- **Công cụ giải mã**: REA (Reverse Engineer Anything) + `hermes-dec` (HBC Decompiler) + JADX Headless.

## 2. Cấu Trúc Thư Mục & File Nguồn Đã Giải Mã
- `decompiled_index.js` (40.0 MB): Toàn bộ mã nguồn JavaScript của ứng dụng đã được decompile từ file bytecode `assets/index.android.bundle`. Bao gồm toàn bộ logic điều hướng (navigation), state management, gọi API và giao diện UI.
- `AndroidManifest.xml`: File cấu hình quyền (Permissions), Services, Activities, Receivers của ứng dụng myFAP.
- `assets/`:
  - Font chữ biểu tượng (AntDesign, FontAwesome, Ionicons, MaterialIcons, Feather...).
  - Cấu hình AppCenter (`appcenter-config.json`).
  - Bundle bytecode gốc (`assets/index.android.bundle`).
- `res/`: Toàn bộ tài nguyên đồ họa Android, icon mascot chú cóc FPT, màu sắc và layout XML.
- `resources.arsc`: Bảng chuỗi (String Table) và tài nguyên đã biên dịch.

## 3. Danh Sách Màn Hình (Screens) Đã Khôi Phục Trong `decompiled_index.js`
Ứng dụng bao gồm 68 màn hình và view thành phần chính:
- `SplashScreen`: Màn hình khởi động và kiểm tra phiên đăng nhập.
- `OptionLoginScreen`: Màn hình chọn phương thức đăng nhập (Google OAuth, FEID, MSSV, Phụ huynh).
- `LoginScreen`: Màn hình đăng nhập tài khoản sinh viên FPT.
- `LoginParentScreen`: Màn hình đăng nhập cho phụ huynh.
- `MainpageScreen` / `TabsScreen`: Màn hình trang chủ với 3 tab chính (Trang chủ, Tin nhắn, Cá nhân).
- `ScheduleWeekScreen` & `ScheduleScreen`: Toàn bộ logic hiển thị thời khóa biểu tuần, slot học, phòng học, giảng viên.
- `ScheduleExamScreen`: Lịch thi kết thúc môn, số báo danh (SBD), phòng thi và giờ thi.
- `AttendanceScreen` & `DetailsAttendanceScreen`: Màn hình điểm danh, tính toán % vắng mặt, cảnh báo cấm thi 20%.
- `AcademicTranscriptScreen` & `DetailsMarkScreen`: Màn hình tra cứu bảng điểm, điểm thành phần và tính GPA.
- `FeeScreen`: Màn hình tra cứu học phí, số dư ví và tài khoản nộp học phí.
- `NewsScreen` & `DetailsNewsScreen`: Tin tức thông báo từ phòng đào tạo và khảo thí.
- `NotifiScreen`: Hệ thống thông báo đẩy (push notifications).
- `ApplicationScreen`: Trạng thái các đơn từ sinh viên (xin nghỉ học, phúc khảo, cấp bảng điểm).
- `ProfileScreen` & `ContactScreen`: Thông tin sinh viên và danh bạ hỗ trợ FPTU.
- `MessagesScreen` & `LiveChatEDNScreen`: Hệ thống tin nhắn và hỗ trợ trực tuyến.

## 4. Hướng Dẫn Tùy Biến & Chỉnh Sửa
1. Tìm kiếm theo tên Component hoặc Screen trong `decompiled_index.js` (ví dụ `LoginScreen`, `ScheduleWeekScreen`, `AttendanceScreen`).
2. Tinh chỉnh logic gọi API hoặc layout UI theo yêu cầu.
3. Sử dụng các asset icon/font có sẵn trong thư mục `assets/` và `res/`.
