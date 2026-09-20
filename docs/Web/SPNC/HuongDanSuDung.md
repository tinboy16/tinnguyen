
# Hướng Dẫn Sử Dụng Dự Án


## Bước 1: Cài Đặt Môi Trường Phát Triển

Trước hết, đảm bảo rằng bạn đã cài đặt Python, MySQL và đã tạo môi trường ảo. Nếu chưa, thực hiện theo hướng dẫn [ở đây](https://docs.tinnguyen.site/docs/SPNC/HuongDanCaiDat).

## Bước 2: Cài Đặt Thư Viện và Migrations

Mở terminal trong thư mục của dự án và chạy lệnh sau để cài đặt các thư viện cần thiết:

```bash
pip install -r requirements.txt
```

Sau đó, tạo cơ sở dữ liệu và áp dụng migrations:

```bash
python manage.py migrate
```

## Bước 3: Tạo Superuser

Để quản lý dữ liệu, tạo một superuser bằng cách chạy lệnh:

```bash
python manage.py createsuperuser
```

Nhập thông tin yêu cầu trên màn hình.

## Bước 4: Chạy Server Django

Chạy server để bắt đầu ứng dụng:

```bash
python manage.py runserver
```

Mở trình duyệt và truy cập `http://127.0.0.1:8000/` để xem trang chủ của dự án.

## Bước 5: Truy Cập Trang Quản Trị

Sử dụng tài khoản superuser để truy cập trang quản trị Django tại `http://127.0.0.1:8000/admin/`. Tại đây, bạn có thể quản lý dữ liệu, người dùng, và các thông tin khác của dự án.

## Bước 6: Khám Phá Tính Năng

Dự án của bạn có thể tích hợp nhiều tính năng như đăng nhập, đăng ký, quản lý bài viết, hình ảnh, và nhiều tính năng khác. Đảm bảo bạn khám phá từng phần của dự án để hiểu rõ cách nó hoạt động và tận hưởng các tính năng được cung cấp.

## Bước 7: Tùy Chỉnh Dự Án (Nếu Cần)

Nếu bạn muốn tùy chỉnh dự án, mở file `settings.py` và thực hiện các cấu hình theo yêu cầu cụ thể của bạn. Bạn cũng có thể thêm hoặc sửa đổi các ứng dụng, templates, và static files theo ý muốn.

## Kết Luận

Chúc mừng! Bạn đã hoàn tất quy trình sử dụng dự án . Hãy tiếp tục tận hưởng và tìm hiểu thêm về cách bạn có thể tùy chỉnh và phát triển dự án theo nhu cầu của mình. Đừng ngần ngại thảo luận và chia sẻ ý kiến trong cộng đồng nếu bạn cần giúp đỡ hoặc muốn chia sẻ kinh nghiệm của mình. Chúc bạn thành công!