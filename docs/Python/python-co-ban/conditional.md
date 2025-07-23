
# 📘 Câu lệnh điều kiện trong Python

## 🔹 IF đơn

### 💡 Cú pháp:

```
if bieu_thuc:
   cac_lenh
```

### 💻 Ví dụ:

```python
# 👉 Ví dụ về câu lệnh if trong Python

# Định nghĩa một biến
x = 10

# Kiểm tra xem x có lớn hơn 5 hay không
if x > 5:
    print("x lớn hơn 5")  # Nếu điều kiện đúng, dòng này sẽ được thực thi

# Kiểm tra xem x có nhỏ hơn 0 hay không
if x < 0:
    print("x nhỏ hơn 0")  # Dòng này sẽ không được thực thi vì điều kiện là sai

# Kiểm tra xem x có bằng 10 hay không
if x == 10:
    print("x bằng 10")  # Nếu x bằng 10, dòng này sẽ được thực thi

# 📤 Bấm play để xem kết quả
```

## 🔹 IF đầy đủ

### 💡 Cú pháp:

```
if bieu_thuc:
   cac_lenh
else:
   cac_lenh
```

## 🔹 ELIF

### 💡 Cú pháp:

```
if bieu_thuc1:
   cac_lenh
elif bieu_thuc2:
   cac_lenh
elif bieu_thuc3:
   cac_lenh
else:
   cac_lenh
```

### 💻 Ví dụ:

```python
# 👉 Định nghĩa một biến age
age = 20

# Kiểm tra độ tuổi
if age < 18:
    print("Bạn là trẻ em")
elif age < 65:
    print("Bạn là người trưởng thành")
else:
    print("Bạn là một người già")

# 📤 Bấm play để xem kết quả
```

## 🔹 IF lồng nhau

### 💡 Cú pháp:

```
if bieu_thuc1:
   cac_lenh
   if bieu_thuc2:
      cac_lenh
   elif bieu_thuc3:
      cac_lenh
   else:
      cac_lenh
elif bieu_thuc4:
   cac_lenh
else:
   cac_lenh
```

### 💻 Ví dụ:

```python
# 👉 Định nghĩa một biến num
num = 15

# Kiểm tra số chẵn hoặc lẻ
if num % 2 == 0:
    print("Số này là số chẵn.")
else:
    print("Số này là số lẻ.")
    if num > 10:
        print("Và số này lớn hơn 10.")

# 📤 Bấm play để xem kết quả
```

## 📚 Nguồn:

* [vietjack.com/python/dieu\_khien\_luong\_trong\_python.jsp](http://vietjack.com/python/dieu_khien_luong_trong_python.jsp)
* [vietjack.com/python/lenh\_if\_trong\_python.jsp](http://vietjack.com/python/lenh_if_trong_python.jsp)
* [vietjack.com/python/long\_cac\_lenh\_if\_trong\_python.jsp](http://vietjack.com/python/long_cac_lenh_if_trong_python.jsp)
