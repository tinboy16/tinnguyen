
# Triển khai Django với MySQL sử dụng Docker
---

## Chuẩn bị
1. **Cài đặt Docker và Docker Compose**: Đảm bảo bạn đã cài đặt Docker và Docker Compose trên máy tính của mình.
2. **Mã nguồn ứng dụng Django**: Clone hoặc tải mã nguồn ứng dụng Django của bạn từ kho lưu trữ.

## Bước 1: Tạo Dockerfile
Tạo một tệp `Dockerfile` trong thư mục gốc của ứng dụng Django với nội dung sau:

```dockerfile
# Dockerfile
FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . /app/
```

## Bước 2: Tạo tệp docker-compose.yml
Tạo một tệp `docker-compose.yml` trong thư mục gốc với nội dung sau:

```yaml
version: '3'

services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
    depends_on:
      - db

  db:
    image: mysql:latest
    environment:
      MYSQL_DATABASE: 'your_db_name'
      MYSQL_USER: 'your_db_user'
      MYSQL_PASSWORD: 'your_db_password'
      MYSQL_ROOT_PASSWORD: 'your_root_password'
    ports:
      - "3306:3306"
```

Thay thế `your_db_name`, `your_db_user`, `your_db_password`, và `your_root_password` bằng thông tin cấu hình MySQL của bạn.

## Bước 3: Tạo tệp requirements.txt
Tạo một tệp `requirements.txt` trong thư mục gốc để liệt kê tất cả các thư viện cần thiết cho Django:

```plaintext
Django==5
mysqlclient==2.0.3
```

## Bước 4: Triển khai ứng dụng
Mở terminal và di chuyển đến thư mục chứa `Dockerfile` và `docker-compose.yml`, sau đó chạy lệnh sau:

```bash
docker-compose up --build
```


## Bước 5: Cấu hình Django settings.py

Mở tệp `settings.py` trong thư mục `your_project_name` của ứng dụng Django và cập nhật các thiết lập cơ sở dữ liệu.

```python
# settings.py

# ...

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'db',
        'PORT': '3306',
    }
}

# ...
```

Chắc chắn rằng bạn đã thay thế `your_db_name`, `your_db_user`, và `your_db_password` bằng thông tin cấu hình MySQL tương ứng mà bạn đã đặt trong tệp `docker-compose.yml`.

## Bước 6: Migrate và Tạo Superuser

Sau khi cập nhật cấu hình cơ sở dữ liệu, chúng ta cần chạy các lệnh migrate để tạo bảng trong cơ sở dữ liệu:

```bash
docker-compose exec web python manage.py migrate
```

Sau đó, tạo một superuser để có quyền truy cập vào trang quản trị Django:

```bash
docker-compose exec web python manage.py createsuperuser
```

Nhập thông tin cần thiết khi được hỏi.

## Bước 7: Chạy ứng dụng

Sau khi đã cấu hình xong, hãy khởi động lại ứng dụng Django:

```bash
docker-compose up
```

Truy cập [http://localhost:8000/admin](http://localhost:8000/admin) và đăng nhập bằng tài khoản superuser bạn đã tạo để kiểm tra trang quản trị Django.

Bây giờ, ứng dụng Django của bạn đã được triển khai sử dụng MySQL thông qua Docker. Chúc mừng bạn đã hoàn thành quá trình triển khai!


# Hướng dẫn Thêm phpMyAdmin cho MySQL trong Docker Compose

## Bước 8: Thêm service phpMyAdmin vào docker-compose.yml

Mở tệp `docker-compose.yml` và thêm service phpMyAdmin như sau:

```yaml
version: '3'

services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
    depends_on:
      - db

  db:
    image: mysql:latest
    environment:
      MYSQL_DATABASE: 'your_db_name'
      MYSQL_USER: 'your_db_user'
      MYSQL_PASSWORD: 'your_db_password'
      MYSQL_ROOT_PASSWORD: 'your_root_password'
    ports:
      - "3306:3306"

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    environment:
      PMA_ARBITRARY: 1
      PMA_HOST: db
      PMA_USER: 'your_db_user'
      PMA_PASSWORD: 'your_db_password'
    ports:
      - "8080:80"
    depends_on:
      - db
```

Chắc chắn rằng bạn đã thay thế `your_db_user` và `your_db_password` bằng thông tin cấu hình MySQL tương ứng mà bạn đã đặt trong service db.

## Bước 9: Khởi động phpMyAdmin

Chạy lại Docker Compose để triển khai phpMyAdmin cùng với MySQL:

```bash
docker-compose up --build
```

## Bước 10: Truy cập phpMyAdmin

Mở trình duyệt và truy cập [http://localhost:8080](http://localhost:8080). Đăng nhập bằng thông tin cấu hình MySQL, và bạn sẽ có thể quản lý cơ sở dữ liệu của mình thông qua giao diện thân thiện của phpMyAdmin.

Bây giờ, bạn đã tích hợp thành công phpMyAdmin vào Docker Compose của mình để quản lý cơ sở dữ liệu MySQL. Chúc mừng bạn đã hoàn thành quá trình triển khai và quản lý ứng dụng Django của mình!