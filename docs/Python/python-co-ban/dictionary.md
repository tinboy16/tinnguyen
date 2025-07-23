
# 📘 Dictionary

## 📌 Giới thiệu

Dictionary là một tập hợp các cặp `key-value` **không có thứ tự**. Dictionary được bao quanh bởi dấu ngoặc móc `{}`. Mỗi `key` phải **duy nhất** và thuộc kiểu dữ liệu **immutable** như `str`, `int`, hoặc `tuple`. Trong khi đó, `value` có thể là bất kỳ kiểu dữ liệu nào.

**🧪 Ví dụ:**

```python
data = {100: 'Hoang', 101: 'Nam', 102: 'Binh'}
print(data)
# 📤 Bấm play để xem kết quả
```

## 🧷 Thuộc tính của `key`

* 🔑 `Key` **phải duy nhất**: nếu lặp, giá trị sau sẽ ghi đè giá trị trước.
* 🔐 `Key` phải là kiểu **immutable**: ví dụ `int`, `str`, `tuple`.

## 🔍 Truy cập giá trị trong Dictionary

Không thể dùng chỉ mục như list. Thay vào đó, dùng `key` để truy cập:

**📐 Cú pháp:**

```
dictionary[key]
```

**🧪 Ví dụ:**

```python
data1 = {'Id': 100, 'Ten': 'Thanh', 'Nghenghiep': 'Developer'}
data2 = {'Id': 101, 'Ten': 'Chinh', 'Nghenghiep': 'Trainer'}

print("Id nhân viên 1:", data1['Id'])
print("Tên nhân viên 1:", data1['Ten'])
print("Id nhân viên 2:", data2['Id'])
print("Nghề nghiệp nhân viên 2:", data2['Nghenghiep'])
# 📤 Bấm play để xem kết quả
```
## ✏️ Cập nhật Dictionary

Dictionary cho phép cập nhật hoặc thêm mới cặp `key-value`.

**🧪 Ví dụ:**

```python
data1 = {'Id': 100, 'Ten': 'Thanh', 'Nghenghiep': 'Developer'}
data2 = {'Id': 101, 'Ten': 'Chinh', 'Nghenghiep': 'Trainer'}

data1['Nghenghiep'] = 'Manager'      # Cập nhật
data1['Mucluong'] = 12000000         # Thêm mới
data2['Mucluong'] = 17000000         # Thêm mới

print(data1)
print(data2)
# 📤 Bấm play để xem kết quả
```
## 🗑️ Xóa phần tử trong Dictionary

Sử dụng `del` để xóa một phần tử hoặc toàn bộ dictionary.

**📐 Cú pháp:**

```
del dictionary[key]   # Xóa một phần tử
del dictionary        # Xóa toàn bộ dictionary
```

**🧪 Ví dụ:**

```python
data = {100: 'Hoang', 101: 'Thanh', 102: 'Nam'}
del data[102]
print(data)  # Còn lại 100 và 101

del data     # Xóa luôn toàn bộ dictionary
# 📤 Bấm play để xem kết quả
```
## 🛠️ Các hàm thường dùng với Dictionary

| 🧰 Hàm / Phương thức | 📝 Mô tả                                        |
| -------------------- | ----------------------------------------------- |
| `dict()`             | Tạo một dictionary mới                          |
| `len(dict)`          | Trả về số lượng phần tử                         |
| `dict.keys()`        | Trả về danh sách key                            |
| `dict.values()`      | Trả về danh sách value                          |
| `dict.items()`       | Trả về danh sách các cặp `(key, value)`         |
| `dict.get(key)`      | Trả về giá trị tương ứng key (an toàn hơn `[]`) |
| `dict.update(dict2)` | Thêm nội dung từ dict2 vào dict                 |
| `dict.pop(key)`      | Xóa key và trả về giá trị của key đó            |
## 📚 Nguồn

[https://vietjack.com/python/dictionary\_trong\_python.jsp](https://vietjack.com/python/dictionary_trong_python.jsp)
