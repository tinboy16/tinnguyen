
# 🐍 Tuple trong Python
## 📘 Giới thiệu

**Tuple** là một dãy các đối tượng **không thay đổi** (*immutable*) trong Python, nghĩa là **tuple không thể bị thay đổi sau khi tạo**. Tương tự như list, tuple là một dạng dãy (sequence), nhưng:

* List dùng dấu `[]`
* Tuple dùng dấu `()`

🔹 **Ví dụ:**

```python
>>> data = (10, 20, 'ram', 56.8)
>>> data2 = "a", 10, 20.9
>>> data
(10, 20, 'ram', 56.8)
>>> data2
('a', 10, 20.9)
```

> ⚠️ Nếu bạn không đặt dấu ngoặc đơn, Python **vẫn hiểu** đó là tuple nếu có dấu phẩy.
## 🔸 Tuple đặc biệt

```python
# Tuple rỗng
tup1 = ()

# Tuple chỉ có 1 phần tử (cần dấu phẩy)
tup1 = (50,)

# Tuple lồng nhau
tupl1 = 'a', 'hoang', 10.56
tupl2 = tupl1, (10, 20, 30)

print(tupl1)
print(tupl2)
```

💡 **Kết quả:**

```
('a', 'hoang', 10.56)
(('a', 'hoang', 10.56), (10, 20, 30))
```
## 🎯 Truy cập phần tử trong Tuple

Giống như List:

```python
tup1 = ('vatly', 'hoahoc', 1997, 2000)
tup2 = (1, 2, 3, 4, 5, 6, 7)

print("tup1[0]:", tup1[0])
print("tup2[1:5]:", tup2[1:5])
```

🧾 **Kết quả:**

```
tup1[0]: vatly
tup2[1:5]: (2, 3, 4, 5)
```
## 🔧 Sử dụng Tuple

Bạn có thể dùng toán tử `+` (nối) và `*` (lặp):

```python
data1 = (1, 2, 3, 4)
data2 = ('x', 'y', 'z')
data3 = data1 + data2

print(data1)
print(data2)
print(data3)
```

📤 **Kết quả:**

```
(1, 2, 3, 4)
('x', 'y', 'z')
(1, 2, 3, 4, 'x', 'y', 'z')
```

> ⚠️ Việc này không thay đổi tuple ban đầu, mà tạo **tuple mới**.
## ❌ Xóa Tuple

Bạn **không thể xóa phần tử cụ thể** trong tuple vì nó immutable. Chỉ có thể xóa toàn bộ:

```python
data = (10, 20, 'hoang', 40.6, 'z')
print(data)
del data
print(data)  # Lỗi vì tuple đã bị xóa
```
## 🔄 Cập nhật Tuple

Không thể cập nhật trực tiếp — nhưng bạn có thể tạo tuple mới từ tuple cũ:

```python
data1 = (10, 20, 30)
data2 = (40, 50, 60)
data3 = data1 + data2
print(data3)
```

📤 **Kết quả:**

```
(10, 20, 30, 40, 50, 60)
```
## 🧰 Một số hàm tuple thường dùng

| Hàm          | Mô tả                                    |
| ------------ | ---------------------------------------- |
| `len(t)`     | Trả về số phần tử                        |
| `max(t)`     | Phần tử lớn nhất (nếu cùng kiểu dữ liệu) |
| `min(t)`     | Phần tử nhỏ nhất                         |
| `tuple(seq)` | Chuyển đổi từ list sang tuple            |
| `t.count(x)` | Đếm số lần xuất hiện của `x`             |
| `t.index(x)` | Vị trí đầu tiên của `x`                  |
## ❓ Tại sao dùng Tuple?

✅ Nhanh hơn List
✅ An toàn hơn (không thay đổi được)
✅ Thường dùng để **định dạng string** hoặc truyền dữ liệu bất biến
## 🔗 Nguồn tham khảo

[Vietjack: Tuple trong Python](http://vietjack.com/python/tuple_trong_python.jsp)

