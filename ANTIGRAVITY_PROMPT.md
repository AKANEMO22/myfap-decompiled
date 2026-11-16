# Prompt for Antigravity – COPY EVERYTHING BELOW

Bạn là senior React Native engineer kiêm mobile UI implementer. Nhiệm vụ của bạn là **TÁI TẠO GẦN NHƯ 1:1** giao diện myFAP theo screenshot tôi cung cấp, KHÔNG phải redesign theo sở thích của bạn.

Repo đang mở: `AKANEMO22/myfap-decompiled` (bản giải ngược APK myFAP).

## Bắt buộc đọc và xem trước khi code

1. Đọc `README.md`.
2. Xem `design/reference/reference-full.png` (bản thiết kế tổng thể).
3. Mở **riêng từng ảnh** `design/reference/01-home.png`, `02-schedule.png`, `03-academics.png`, `04-services.png`, `05-profile.png` để nhìn rõ chi tiết. Ảnh `06-dark-home-preview.png` là tham chiếu Dark Mode.
4. Đọc `design/UI_SPEC.md` và áp dụng mọi yêu cầu trong đó.
5. Kiểm tra cấu trúc repo để xác định có thể build React Native từ source hiện có không. Đừng coi `decompiled_index.js` là source hoàn chỉnh có thể build ngay.

## Quy tắc thiết kế KHÔNG ĐƯỢC TỰ Ý THAY

- Tái tạo **đúng 5 tab**: `Hôm nay | Lịch | Học tập | Dịch vụ | Cá nhân`.
- Giữ bố cục, thứ tự, khoảng cách, chữ, kích thước tương đối, màu cam, dạng thẻ và biểu tượng sát ảnh nhất.
- Bản tham chiếu sử dụng giao diện sáng: nền trắng/trắng ngà; chữ gần đen; viền xám rất nhạt; cam chỉ làm accent.
- Không dùng gradient hero, bóng quá đậm, glassmorphism, emoji, icon màu mè, animation trang trí, hiệu ứng 3D, dashboard AI style.
- Không bỏ tab Dịch vụ hoặc gộp nhầm vào Cá nhân. Không biến thanh tab thành 4 nút.
- Không sao chép khung điện thoại, nhãn tiêu đề thiết kế và phần giới thiệu *bên ngoài* 5 màn hình trong ảnh vào app.
- Chú ý **Cá nhân** phải có demo hoàn chỉnh. Dark Mode phải chuyển được ở màn Cá nhân.
- Nội dung dữ liệu hiện tại là **demo có nhãn rõ ràng**; không giả là dữ liệu sinh viên thật.

## Cách làm

Giai đoạn A – Khảo sát: phân biệt thành phần React Native có thể tái sử dụng với nguồn Hermes decompile; báo cáo ngắn khả năng build và vị trí app sẽ được tạo. Không sửa/hủy bundle gốc. Nếu repo thiếu project React Native đầy đủ, tạo app mới trong `app-redesign/` thay vì chỉnh trực tiếp `decompiled_index.js`.

Giai đoạn B – Triển khai: tạo design tokens, component cơ bản, bottom navigation 5 tab, rồi làm **từng màn hình** theo đúng thứ tự 01→05. Tách logic UI khỏi fixture data để sau này có thể tích hợp API thật. Xây Dark Mode đủ dùng và chuyển được.

Giai đoạn C – Kiểm tra: chạy thử app, chụp screenshot mỗi tab ở cùng kích thước màn hình tham chiếu (hoặc gần nhất, ví dụ Android 360 x 800 dp). So sánh screenshot output với ảnh gốc theo từng phần: header, card, spacing, text baseline, nav. Nếu khác, sửa trước khi tuyên bố hoàn thành. Test tương tác tab, chuyển Lịch học/Lịch thi, chọn ngày, Dark Mode, scroll.

## Chứng cứ đầu ra tôi cần

1. Những file mã nguồn đã tạo hoặc sửa và lý do.
2. Lệnh chạy app trên Windows và lệnh build APK debug (nếu build được).
3. 5 ảnh screenshot UI đã chạy thật và 1–2 ảnh Dark Mode.
4. Danh sách điều gì chỉ là mock, điều gì đã nối API thật.
5. Bảng PASS/FAIL cho các tiêu chí: 5 tab, Home, Lịch, Học tập, Dịch vụ, Cá nhân, Dark Mode, responsive, test build.

**Cực kỳ quan trọng:** Đừng chỉ trả lời bằng kế hoạch, đừng tự tạo UI mới theo cảm tính, đừng nói “đã giống” mà không chụp màn hình so sánh. Làm bản UI chạy được, chứng minh bằng ảnh và test thực tế. Nếu chưa chạy được do thiếu source buildable, trình bày blocker chính xác, và hoàn thiện bản UI sạch chạy độc lập trong `app-redesign/`.
