---
title: Làm việc với File trong Python
sidebar_position: 13
---

# 📁 Làm việc với File

## 🧩 Giới thiệu

Python cung cấp nhiều cách tiện lợi để làm việc với file. Một file là một nơi lưu trữ trên ổ cứng, tại đó dữ liệu có thể được ghi và đọc lại sau này.
## 🔓 Mở file

Trước khi thao tác, cần mở file bằng hàm `open()`.

**Cú pháp**

```
doi_tuong_file = open(ten_file [, access_mode][, buffer])
```

> * `ten_file`: tên file cần mở
> * `access_mode`: chế độ truy cập (mặc định là `'r'`)
> * `buffer`: Nếu buffer được thiết lập là 0, sẽ không có trình đệm nào diễn ra. Nếu xác định là 1, thì trình đệm dòng được thực hiện trong khi truy cập một File. Nếu là số nguyên lớn hơn 1, thì hoạt động đệm được thực hiện với kích cỡ bộ đệm đã cho. Nếu là số âm, thì kích cỡ bộ đệm sẽ là mặc định (hành vi mặc định).
## 🔒 Đóng file

Sau khi thao tác xong, cần đóng file lại để đảm bảo dữ liệu được lưu đầy đủ.

**Cú pháp**

```
fileObject.close();
```
## 📖 Đọc file

**Cú pháp**

```
doi_tuong_file.read(giatri);
```
## ✍️ Ghi file

**Ví dụ:**

```python
obj = open("abcd.txt", "w")
obj.write("Python xin chao cac ban")
obj.close()

obj1 = open("abcd.txt", "r")
s = obj1.read()
print(s)
obj1.close()

obj2 = open("abcd.txt", "r")
s1 = obj2.read(20)
print(s1)
obj2.close()
# Bấm ▶️ để xem kết quả
```
## 🛠 Thuộc tính của file

* `file.closed`: Trả về `True` nếu file đã đóng
* `file.mode`: Trả về chế độ mở file
* `file.name`: Trả về tên file
* `file.softspace`: (Không còn dùng trong Python 3)
## 📜 Các chế độ truy cập file

| Chế độ | Mô tả                                        |
| ------ | -------------------------------------------- |
| `r`    | Đọc file, lỗi nếu không tồn tại              |
| `rb`   | Đọc file nhị phân                            |
| `r+`   | Đọc & ghi, con trỏ đầu file                  |
| `w`    | Ghi file, tạo mới nếu chưa có, ghi đè nếu có |
| `wb`   | Ghi file nhị phân                            |
| `w+`   | Đọc & ghi, tạo mới nếu chưa có               |
| `a`    | Ghi nối tiếp, tạo mới nếu chưa có            |
| `a+`   | Đọc & ghi nối tiếp                           |
## 📚 Nguồn

[https://vietjack.com/python/file\_io\_trong\_python.jsp](https://vietjack.com/python/file_io_trong_python.jsp)
