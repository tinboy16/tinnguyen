
# 🧩 Hàm trong Python

---

## 📌 Định nghĩa một hàm trong Python

Khi định nghĩa các hàm để cung cấp một tính năng nào đó, bạn cần theo các quy tắc sau:

- Từ khóa `def` được sử dụng để bắt đầu phần định nghĩa hàm.
- Theo sau là `tên_hàm()` và dấu hai chấm `:`.
- Bên trong dấu ngoặc có thể chứa **tham số**.
- Bên trong hàm cần có **thụt dòng đồng nhất**.
- Có thể có chuỗi tài liệu (**docstring**) ngay sau dòng định nghĩa.
- Các câu lệnh sẽ được thực thi khi gọi hàm.

---

## 🧠 Cú pháp

```
def ten_ham(cac_tham_so):
   "function_docstring"
   function_suite
   return [bieu_thuc]
````


## ▶️ Ví dụ đơn giản

```python
# Phần định nghĩa hàm ở đây
def printme(str):
   "Chuỗi này được truyền vào trong hàm"
   print(str)
   return

# Bây giờ bạn có thể gọi hàm printme
printme("Lời gọi đầu tiên tới custom func!")
printme("Lời gọi thứ hai tới custom func")
# Bấm play để xem kết quả
```

---

## 📞 Cách gọi hàm

Cú pháp gọi hàm:

```python
ten_ham(cac_tham_so)
```


## 🔁 Hàm có kết quả trả về – `return()`

```python
# Phần định nghĩa hàm ở đây
def sum(arg1, arg2):
   # Cộng hai tham số và trả về kết quả.
   total = arg1 + arg2
   print("Bên trong hàm:", total)
   return total

# Bây giờ bạn có thể gọi hàm sum này
total = sum(10, 20)
print("Bên ngoài hàm:", total)
# Bấm play để xem kết quả
```

---

## 🧩 Phân biệt: Tham số (parameter) vs. Đối số (argument)

* **Parameter** là biến được định nghĩa trong hàm.
* **Argument** là giá trị được truyền vào khi gọi hàm.

```python
def addition(x, y):  # parameter
    print(x + y)

x = 15
addition(x, 10)      # argument
addition(x, x)
y = 20
addition(x, y)
# Bấm play để xem kết quả
```

---

## 🎛 Các kiểu tham số trong Python

### 1. Tham số bắt buộc

```python
def sum(a, b):
    c = a + b
    print(c)

sum(10, 20)
sum(20)  # chỉ có a, thiếu b nên sẽ lỗi
# Bấm play để xem kết quả
```

> ⚠️ Dòng `sum(20)` sẽ gây lỗi `TypeError`.

---

### 2. Tham số mặc định

```python
def msg(Id, Ten, Age=21):
    print(Id)
    print(Ten)
    print(Tuoi)
    return

msg(Id=100, Ten='Hoang', Age=20)
msg(Id=101, Ten='Thanh')  # không lỗi vì có mặc định
# Bấm play để xem kết quả
```

> ⚠️ Biến `Tuoi` không được định nghĩa → cần sửa thành `print(Age)`

---

### ✅ Phiên bản đúng của trên:

```python
def msg(Id, Ten, Age=21):
    print(Id)
    print(Ten)
    print(Age)
    return

msg(Id=100, Ten='Hoang', Age=20)
msg(Id=101, Ten='Thanh')  # không lỗi vì có mặc định
# Bấm play để xem kết quả
```

---

### 3. Tham số từ khóa

```
def msg(id, name):
    print(id)
    print(ten)
    return

msg(id=100, name='Hoang')
msg(name='Thanh', id=101)
# Bấm play để xem kết quả
```

> ⚠️ Gây lỗi do biến `ten` không được định nghĩa. Sửa lại thành `print(name)`

---

### ✅ Phiên bản đúng:

```python
def msg(id, name):
    print(id)
    print(name)
    return

msg(id=100, name='Hoang')
msg(name='Thanh', id=101)
# Bấm play để xem kết quả
```

---

### 4. Hàm với số tham số thay đổi

```python
def printinfo(*args):
    for val in args:
        print(val)

printinfo(1, 2, 3)
printinfo("a", "b")
# Bấm play để xem kết quả
```

---

## 🧨 Hàm nặc danh (Lambda)

Hàm Lambda là hàm không tên, khai báo bằng từ khóa `lambda`.

```python
# Phần định nghĩa hàm
square = lambda x1: x1 * x1

# Gọi square như là một hàm
print("Bình phương của số là", square(10))
# Bấm play để xem kết quả
```

---

## 📚 Nguồn

* [vietjack.com - Hàm trong Python](http://vietjack.com/python/ham_trong_python.jsp)


