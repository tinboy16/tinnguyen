---
title: Constructor và Destructor trong Python
sidebar_position: 15
---

# Constructor và Destructor trong Python
## 1. Phương thức khởi tạo - constructor

Phương thức **khởi tạo** là một phương thức đặc biệt trong class, tự động được gọi khi bạn tạo một đối tượng từ class đó.  
Nó được dùng để khởi tạo thuộc tính, xử lý logic ban đầu hoặc nhận tham số truyền vào.

### Cú pháp:

```python
class ClassName:
    def __init__(self, param1, param2, ...):
        # code khởi tạo
````

* `ClassName`: tên class.
* `param1, param2, ...`: các tham số truyền vào khi khởi tạo đối tượng.

### Ví dụ:

```python
class Person:
    def __init__(self):
        print("Class Person được khởi tạo!")

person = Person()
# Bấm play để xem kết quả
```
## 2. Phương thức hủy bỏ - destructor

Trái ngược với constructor, phương thức **hủy (destructor)** sẽ được gọi khi đối tượng bị xóa hoặc chương trình kết thúc.
Thường dùng để **giải phóng tài nguyên**, đóng kết nối, dọn dẹp bộ nhớ, v.v.

### Cú pháp:

```python
def __del__(self):
    # code dọn dẹp tài nguyên
```

> Hàm `__del__` được gọi khi object bị hủy.

### Ví dụ:

```python
class Person:
    def __init__(self, name, age, male):
        print("Class Person được khởi tạo!")
        print("Name: %s - Age: %d - Male: %d" % (name, age, male))

    def __del__(self):
        print("Class Person được hủy")

person = Person('Lacoski', 22, True)
# Bấm play để xem kết quả
```
## 🔗 Nguồn tham khảo:

[https://toidicode.com/constructor-va-destructor-trong-python-358.html](https://toidicode.com/constructor-va-destructor-trong-python-358.html)
