---
title: Danh sách (List) trong Python
sidebar_position: 6
---

# 📋 List trong Python
---
## 📘 Giới thiệu

Cấu trúc dữ liệu cơ bản nhất trong Python là **sequence** (dãy). Mỗi phần tử trong dãy được gán một số gọi là **chỉ mục (index)**, bắt đầu từ `0`.

Python có sáu kiểu sequence tích hợp sẵn, phổ biến nhất là **`List`** và **`Tuple`**.

---

## 🧱 List là gì?

List trong Python là một **cấu trúc dữ liệu có thứ tự (ordered)**, có thể **chứa các kiểu dữ liệu khác nhau**, và có thể **thay đổi được (mutable)**.

List là một container cho các đối tượng và hỗ trợ các thao tác như: thêm, sửa, xóa, nối, lặp...

### 🧑‍💻 Cú pháp tạo list:

```
\<ten\_list> = \[giatri1, giatri2, ..., giatriN]
````

### ✅ Ví dụ:

```python
list1 = ['vatly', 'hoahoc', 1997, 2000]
list2 = [1, 2, 3, 4, 5]
list3 = ["a", "b", "c", "d"]
# Bấm play để xem kết quả
````

> 📌 **Ghi nhớ**: List được khai báo bằng dấu ngoặc vuông `[]`
> 📌 Chỉ mục của List bắt đầu từ `0` như chuỗi

---

## 🔍 Truy cập phần tử trong List

### 🧑‍💻 Cú pháp:

```
<ten_list>[index]
# Bấm play để xem kết quả
```

### ✅ Ví dụ:

```python
list1 = ['vatly', 'hoahoc', 1997, 2000]
list2 = [1, 2, 3, 4, 5, 6, 7]

print("list1[0]:", list1[0])
print("list2[1:5]:", list2[1:5])
# Bấm play để xem kết quả
```

---

## ➕ Các thao tác cơ bản với List

* **Nối list với `+`**
* **Lặp list với `*`**

### ✅ Ví dụ:

```python
list1 = [10, 20]
list2 = [30, 40]
list3 = list1 + list2
print(list3)
# Bấm play để xem kết quả
```

> ⚠️ Hai toán hạng dùng với `+` phải đều là List, nếu không sẽ bị lỗi.

---

## 🔁 Cập nhật phần tử trong List

### 🧑‍💻 Cú pháp:

```
<ten_list>[index] = <giatri_moi>
```

### ✅ Ví dụ:

```python
list1 = ['vatly', 'hoahoc', 1997, 2000]

print("Giá trị hiện tại ở chỉ mục 2:", list1[2])
list1[2] = 2001
print("Giá trị sau cập nhật:", list1[2])
# Bấm play để xem kết quả
```

---

## 🛠 Một số hàm xử lý list hữu ích

| Hàm           | Mô tả                                  |
| ------------- | -------------------------------------- |
| `len(list)`   | Trả về số phần tử trong list           |
| `append(x)`   | Thêm phần tử `x` vào cuối list         |
| `insert(i,x)` | Thêm `x` vào vị trí `i`                |
| `remove(x)`   | Xóa phần tử `x` đầu tiên trong list    |
| `pop([i])`    | Xóa và trả về phần tử tại vị trí `i`   |
| `sort()`      | Sắp xếp list tăng dần (in-place)       |
| `reverse()`   | Đảo ngược thứ tự các phần tử           |
| `index(x)`    | Trả về chỉ số đầu tiên của phần tử `x` |
| `count(x)`    | Đếm số lần xuất hiện của phần tử `x`   |

---

## 📚 Nguồn tham khảo

* [VietJack - List trong Python](http://vietjack.com/python/list_trong_python.jsp)
* [Python Docs - Built-in Types](https://docs.python.org/3/library/stdtypes.html#lists)


