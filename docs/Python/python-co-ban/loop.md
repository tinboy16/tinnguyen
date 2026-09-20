---
title: Vòng lặp trong Python
sidebar_position: 10
---

# 🔁 Vòng lặp trong Python

## 🧭 Các vòng lặp trong Python

- **`while` loop**: lặp đi lặp lại một lệnh hoặc một nhóm lệnh trong khi điều kiện là `True`. Nó kiểm tra điều kiện trước khi thực thi.
- **`for` loop**: lặp qua các phần tử trong một dãy như `list`, `tuple`, `string`, v.v.
- **Vòng lặp lồng nhau**: có thể đặt một vòng lặp trong một vòng lặp khác (`for` trong `for`, `while` trong `while`, ...).

---

## ⚙️ Các lệnh điều khiển vòng lặp

- **`break`**: thoát khỏi vòng lặp ngay lập tức.
- **`continue`**: bỏ qua phần còn lại của vòng lặp hiện tại và tiếp tục vòng kế tiếp.
- **`pass`**: giữ chỗ cho một khối lệnh rỗng khi chưa muốn xử lý gì.

---

## 🔁 Vòng lặp `while`

### 📌 Cú pháp:
```python
while bieu_thuc:
    cac_lenh
````

### 🧪 Ví dụ:

```python
count = 0
while count < 9:
    print('Số thứ tự của bạn là:', count)
    count = count + 1
print("Good bye!")
# Bấm play để xem kết quả
```
### 🔄 Vòng lặp vô hạn:

```python
while True:
    num = input("Hãy nhập một số: ")
    print("Số đã nhập là:", num)
# Đây là vòng lặp vô hạn nên sẽ ko hiện kết quả

```

---

## 🔁 `while else`

```python
count = 0
while count < 5:
    print(count, "là nhỏ hơn 5")
    count = count + 1
else:
    print(count, "là không nhỏ hơn 5")
# Bấm play để xem kết quả

```


---

## 🔁 Vòng lặp `for`

### 📌 Cú pháp:

```python
for bien_vong_lap in day_sequence:
    cac_lenh
```

### 🧪 Ví dụ:

```python
for letter in 'Python':
    print('Chữ cái hiện tại:', letter)

fruits = ['chuối', 'táo', 'xoài']
for fruit in fruits:
    print('Bạn có thích ăn:', fruit)

print("Good bye!")
# Bấm play để xem kết quả

```

### 🔢 Lặp qua chỉ số:

```python
fruits = ['chuối', 'táo', 'xoài']
for index in range(len(fruits)):
    print('Bạn có thích ăn:', fruits[index])

print("Good bye!")
# Bấm play để xem kết quả
```

---

## 🔁 Vòng lặp lồng nhau

### ✅ `for` trong `for`

```python
for i in range(3):
    for j in range(2):
        print(f"i = {i}, j = {j}")
# Bấm play để xem kết quả
```

### ✅ `while` trong `while`

```python
i = 0
while i < 3:
    j = 0
    while j < 2:
        print(f"i = {i}, j = {j}")
        j += 1
    i += 1
# Bấm play để xem kết quả
```

---

## 📚 Nguồn tham khảo

[VietJack - Vòng lặp trong Python](https://vietjack.com/python/vong_lap_for_trong_python.jsp)

