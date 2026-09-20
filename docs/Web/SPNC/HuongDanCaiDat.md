
# Hướng dẫn Cài Đặt Django với MySQL và Visual Studio Code

## Giới Thiệu

Trong hướng dẫn này, chúng ta sẽ cài đặt một môi trường phát triển Django với sử dụng cơ sở dữ liệu MySQL và Visual Studio Code làm môi trường phát triển. Đây là các bước chi tiết để bạn có thể bắt đầu với Django.

## Bước 1: Cài đặt Python

Truy cập trang chính thức của Python (https://www.python.org/) và tải bản Python mới nhất. Khi cài đặt, đảm bảo chọn tùy chọn "Add Python to PATH" để sử dụng Python từ bất kỳ thư mục nào trong dòng lệnh.

## Bước 2: Cài đặt MySQL

Tải và cài đặt MySQL từ trang chính thức (https://dev.mysql.com/downloads/). Làm theo hướng dẫn để cài đặt và thiết lập mật khẩu cho người dùng root.

## Bước 3: Cài đặt MySQL Connector

Sử dụng pip để cài đặt MySQL Connector cho Python bằng cách chạy lệnh sau trong dòng lệnh:

```bash
pip install mysql-connector-python
```

## Bước 4: Tạo Môi Trường Ảo (Optional)

Tạo môi trường ảo để cách ly dependencies của dự án. Trong thư mục dự án, mở dòng lệnh và chạy:

```bash
python -m venv venv
```

Kích hoạt môi trường ảo:

- Trên Windows:

```bash
.\venv\Scripts\activate
```

- Trên MacOS/Linux:

```bash
source venv/bin/activate
```

## Bước 5: Cài đặt Django

Trong môi trường ảo đã kích hoạt, cài đặt Django bằng cách chạy lệnh sau:

```bash
pip install django
```

## Bước 6: Tạo Dự Án Django Mới

Chạy lệnh sau để tạo một dự án mới:

```bash
django-admin startproject projectname
```

## Bước 7: Cài đặt mysqlclient

Cài đặt `mysqlclient` để Django có thể kết nối với MySQL:

```bash
pip install mysqlclient
```

## Bước 8: Cấu Hình Cơ Sở Dữ Liệu

Mở file `settings.py` trong thư mục của dự án Django và cấu hình cơ sở dữ liệu như sau:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'tendb',
        'USER': 'tenuser',
        'PASSWORD': 'matkhau',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

## Bước 9: Chạy Migrations và Tạo Superuser

Chạy lệnh sau để tạo các bảng trong cơ sở dữ liệu:

```bash
python manage.py migrate
```

Tạo một tài khoản quản trị bằng cách chạy lệnh:

```bash
python manage.py createsuperuser
```

## Bước 10: Chạy Server Django

Chạy lệnh sau để khởi động server:

```bash
python manage.py runserver
```

## Bước 11: Kiểm Tra Trình Duyệt

Mở trình duyệt và truy cập địa chỉ `http://127.0.0.1:8000/` để xem trang chủ của dự án Django.

Bây giờ, bạn đã cài đặt và cấu hình một dự án Django với MySQL sử dụng Visual Studio Code làm môi trường phát triển. Hãy kiểm tra các bước trên và đảm bảo rằng mọi thứ đang hoạt động đúng.

## Thư Viện Sử dụng

1. **asgiref (3.7.2):**
   - Asynchronous Server Gateway Interface (ASGI) là một giao diện cung cấp khả năng xử lý không đồng bộ cho ứng dụng web Django. Thư viện `asgiref` giúp hỗ trợ việc triển khai các ứng dụng sử dụng WebSocket và các kỹ thuật không đồng bộ khác.

2. **Django (5.0):**
   - Django là một framework web Python mạnh mẽ, được sử dụng để phát triển ứng dụng web chất lượng cao và dễ bảo trì. Nó cung cấp các tính năng như ORM (Object-Relational Mapping), hệ thống admin, xử lý biểu mẫu, và nhiều tính năng khác giúp giảm độ phức tạp của việc phát triển ứng dụng web.

3. **django-cors-headers (4.3.1):**
   - Thư viện này giúp xử lý vấn đề Cross-Origin Resource Sharing (CORS) trong ứng dụng Django. Nó cho phép quản lý các yêu cầu từ các tên miền khác nhau và giúp tránh các vấn đề liên quan đến chính sách same-origin.

4. **django-crispy-forms (1.9.2):**
   - Django Crispy Forms cung cấp cách dễ dàng để tùy chỉnh và làm đẹp biểu mẫu trong Django. Nó sử dụng Bootstrap CSS để cải thiện giao diện người dùng của biểu mẫu mà không cần viết nhiều mã HTML và CSS.

5. **django-filter (23.5):**
   - Thư viện này cung cấp công cụ để thực hiện việc lọc dữ liệu trong Django. Nó giúp tạo các biểu mẫu lọc linh hoạt để người dùng có thể lọc và tìm kiếm dữ liệu trong ứng dụng.

6. **gunicorn (21.2.0):**
   - Gunicorn là một web server HTTP WSGI cho Python. Nó được sử dụng để triển khai ứng dụng Django vào môi trường sản xuất, cung cấp hiệu suất cao và khả năng mở rộng tốt.

7. **mysqlclient (2.2.0):**
   - Thư viện `mysqlclient` là một trình điều khiển MySQL cho Django, cho phép Django kết nối và tương tác với cơ sở dữ liệu MySQL.

8. **packaging (23.2):**
   - Thư viện `packaging` cung cấp các công cụ để làm việc với các định dạng gói Python, giúp quản lý dependencies và phiên bản của chúng.

9. **Pillow (8.3.2):**
   - Pillow là một fork của thư viện xử lý ảnh Python - PIL (Python Imaging Library). Nó cung cấp các chức năng mạnh mẽ để xử lý ảnh trong Django, bao gồm cả xử lý ảnh thumbnail và resize.

10. **pytz (2023.3.post1):**
    - Thư viện `pytz` giúp quản lý múi giờ và thời gian trong Python. Nó hỗ trợ xử lý các vấn đề liên quan đến múi giờ và thời gian hệ thống.

11. **sqlparse (0.4.4):**
    - `sqlparse` là một công cụ giúp định dạng câu lệnh SQL, hữu ích khi bạn cần đọc hoặc hiển thị câu lệnh SQL trong mã nguồn của mình.

12. **typing-extensions (4.8.0):**
    - Thư viện này cung cấp các extension cho module `typing` trong Python, hỗ trợ kiểu dữ liệu tĩnh.

13. **whitenoise (6.6.0):**
    - `whitenoise` giúp quản lý các file tĩnh trong ứng dụng Django và cung cấp chúng dưới dạng các file nén, giúp tăng tốc độ tải trang web.


## Bước 12: Cài Đặt Các Thư Viện Bổ Sung

Tạo một file mới có tên là `requirements.txt` trong thư mục dự án và thêm các thư viện sau vào file:

```plaintext
asgiref==3.7.2
Django==5.0
django-cors-headers==4.3.1
django-crispy-forms==1.9.2
django-filter==23.5
gunicorn==21.2.0
mysqlclient==2.2.0
packaging==23.2
Pillow==8.3.2
pytz==2023.3.post1
sqlparse==0.4.4
typing-extensions==4.8.0
whitenoise==6.6.0
```

Chạy lệnh sau để cài đặt các thư viện từ `requirements.txt`:

```bash
pip install -r requirements.txt
```

## Bước 13: Thêm Thư Viện vào `settings.py`

Mở file `settings.py` trong thư mục dự án và thêm các thư viện mới vào danh sách `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ...
    'django_cors_headers',
    'crispy_forms',
    'django_filters',
    # ...
]
```

## Bước 14: Cấu Hình Đối với Thư Viện Cụ Thể

Tùy thuộc vào yêu cầu cụ thể của dự án, bạn có thể cần cấu hình một số thư viện. Dưới đây là một số ví dụ:

### 1. django-cors-headers:

Thêm vào `MIDDLEWARE` trong `settings.py`:

```python
MIDDLEWARE = [
    # ...
    'corsheaders.middleware.CorsMiddleware',
    # ...
]
```

### 2. django-crispy-forms:

Thêm vào `INSTALLED_APPS` trong `settings.py`:

```python
INSTALLED_APPS = [
    # ...
    'crispy_forms',
    # ...
]
```

Thêm cấu hình crispy forms:

```python
CRISPY_TEMPLATE_PACK = 'bootstrap4'
```

### 3. whitenoise:

Thêm vào `MIDDLEWARE` trong `settings.py`:

```python
MIDDLEWARE = [
    # ...
    'whitenoise.middleware.WhiteNoiseMiddleware',
    # ...
]
```

Thêm vào cuối file `settings.py`:

```python
STATIC_URL = '/static/'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```


