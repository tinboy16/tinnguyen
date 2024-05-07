
# Hướng Dẫn Sử Dụng Ngrok với Django

Ngrok là một công cụ mạng mạnh mẽ cho phép bạn public ứng dụng Django local của mình qua Internet. Dưới đây là hướng dẫn chi tiết về cách sử dụng Ngrok với Django.

## Bước 1: Cài Đặt Django

1. Nếu bạn chưa cài đặt Django, hãy sử dụng pip để cài đặt:

    ```bash
    pip install django
    ```

2. Tạo một project Django mới:

    ```bash
    django-admin startproject myproject
    ```

3. Di chuyển vào thư mục project:

    ```bash
    cd myproject
    ```

4. Chạy server Django để đảm bảo mọi thứ hoạt động đúng:

    ```bash
    python manage.py runserver
    ```

## Bước 2: Cài Đặt Ngrok

1. Tải [Ngrok](https://ngrok.com/download) và giải nén tập tin đã tải.

2. Di chuyển tập tin thực thi Ngrok vào một thư mục thuận tiện.

## Bước 3: Sử Dụng Ngrok để Public Ứng Dụng Django

1. Mở terminal hoặc Command Prompt.

2. Di chuyển đến thư mục chứa tập tin thực thi Ngrok.

3. Chạy server Django với lệnh sau:

    ```bash
    python manage.py runserver
    ```

4. Trong một terminal mới, sử dụng lệnh sau để public ứng dụng Django:

    ```bash
    ./ngrok http 8000
    ```

    Nếu bạn sử dụng Windows, lệnh có thể là `ngrok.exe` thay vì `./ngrok`.

5. Ngrok sẽ tạo ra một đường link công cộng (HTTP và HTTPS) mà bạn có thể truy cập từ bất kỳ đâu.

6. Kiểm tra đường link được tạo trong kết quả của terminal. Đó là đường link bạn có thể chia sẻ với người khác để họ truy cập ứng dụng Django của bạn.

**Lưu Ý:**
- Để sử dụng HTTPS, bạn cần [đăng ký tài khoản Ngrok](https://dashboard.ngrok.com/signup) để có API key và sử dụng lệnh `./ngrok http --auth="your_username:your_password" 8000` để bảo vệ đường link với tên đăng nhập và mật khẩu.

- Để dừng Ngrok, đơn giản nhấn `Ctrl + C` trong terminal.

Bằng cách này, bạn có thể public ứng dụng Django local của mình qua Internet sử dụng Ngrok để dễ dàng chia sẻ và kiểm thử.