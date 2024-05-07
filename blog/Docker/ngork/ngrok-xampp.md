
# Hướng Dẫn Sử Dụng Ngrok với XAMPP

## Giới Thiệu

Ngrok là một công cụ mạng giúp bạn public các ứng dụng local của mình qua Internet, tiện ích cho việc phát triển và kiểm thử. Trong hướng dẫn này, chúng ta sẽ tìm hiểu cách sử dụng Ngrok cùng với XAMPP để public ứng dụng web local của bạn.

## Bước 1: Cài Đặt XAMPP

1. Tải và cài đặt [XAMPP](https://www.apachefriends.org/index.html) theo hướng dẫn trên trang web chính thức.

2. Khởi động XAMPP và chạy Apache để bắt đầu máy chủ web local của bạn.

## Bước 2: Tải và Cài Đặt Ngrok

1. Tải [Ngrok](https://ngrok.com/download) cho hệ điều hành của bạn.

2. Giải nén tập tin Ngrok đã tải và đặt tập tin thực thi trong một thư mục thuận tiện.

## Bước 3: Sử Dụng Ngrok để Public Ứng Dụng XAMPP

1. Mở terminal hoặc Command Prompt.

2. Di chuyển đến thư mục chứa tập tin thực thi của Ngrok.

3. Sử dụng lệnh sau để public ứng dụng XAMPP của bạn:

   ```bash
   ./ngrok http 80
   ```

   Nếu bạn sử dụng Windows, lệnh có thể là `ngrok.exe` thay vì `./ngrok`.

4. Ngrok sẽ tạo ra một đường link công cộng (HTTP và HTTPS) mà bạn có thể truy cập từ bất kỳ đâu.

5. Kiểm tra đường link được tạo trong kết quả của terminal. Đó là đường link bạn có thể chia sẻ với người khác để họ truy cập ứng dụng XAMPP của bạn.

**Lưu Ý:**
- Để sử dụng HTTPS, bạn cần [đăng ký tài khoản Ngrok](https://dashboard.ngrok.com/signup) để có API key và sử dụng lệnh `./ngrok http --auth="your_username:your_password" 80` để bảo vệ đường link với tên đăng nhập và mật khẩu.

- Để dừng Ngrok, đơn giản nhấn `Ctrl + C` trong terminal.

Bằng cách này, bạn có thể dễ dàng public ứng dụng web local của mình từ XAMPP với sự hỗ trợ của Ngrok.