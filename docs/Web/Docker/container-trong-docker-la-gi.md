---
title: Giới Thiệu Container trong Docker
description: Cách thức hoạt động của docker
---
# Container trong Docker là gì?

Về **cách thức hoạt động của docker** thì nó hoạt động bằng cách cung cấp phương thức tiêu chuẩn để chạy mã. Như cách máy ảo – ảo hóa (loại bỏ nhu cầu quản lý trực tiếp) phần cứng của máy chủ, các container sẽ ảo hóa hệ điều hành của máy chủ. Docker được cài đặt trên từng máy chủ và cung cấp các lệnh cơ bản để bạn có thể build, khởi tạo và dừng container.

Còn để hiểu về cơ chế hoạt động của Docker khá là phức tạp. Ở đây, Vietnix sẽ tóm gọn lại cho bạn dễ hiểu về **hoạt động của Docker** thông qua một Docker engine và kết hợp với 2 yếu tố sau:

* 1 server và 1 client.
* Giao tiếp giữa server và client thông qua REST API.

Nếu bạn đang sử dụng hệ điều hành Windows/Mac cũ, bạn có thể tận dụng [Docker toolbox](https://www.docker.com/products/docker-desktop/), vì nó cho phép bạn điều kiển docker engine với [Docker Compose](https://docs.docker.com/compose/) và [Kitematic](https://kitematic.com/).
