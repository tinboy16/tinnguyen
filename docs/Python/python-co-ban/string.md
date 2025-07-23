# 🧵 String
## 📝 Giới thiệu

String là một trong các kiểu phổ biến nhất trong Python. String trong Python là **immutable**. Có thể tạo các chuỗi bằng cách bao một text trong một trích dẫn đơn hoặc trích dẫn kép. Python coi các lệnh trích dẫn đơn và kép là như nhau.

```python
var1 = 'Hello World!'
var2 = "Python Programming"
```
## 🔍 Truy cập các giá trị trong String

> Python không hỗ trợ một kiểu chữ cái; chúng được coi như các chuỗi có độ dài là 1.

String được lưu giữ dưới dạng các ký tự đơn trong vị trí ô nhớ liên tiếp nhau. Lợi thế của sử dụng String là nó có thể được truy cập từ cả hai hướng (tiến về trước forward hoặc ngược về sau backward).

**Cơ chế:**

* Chỉ mục với hướng forward bắt đầu với `0,1,2,3,…`
* Chỉ mục với hướng backward bắt đầu với `-1,-2,-3,…`

```python
var1 = 'Hello World!'
var2 = "Python Programming"

print "var1[0]: ", var1[0]
print "var2[1:5]: ", var2[1:5]
```

📤 **Kết quả:**

```
var1[0]:  H  
var2[1:5]:  ytho
```
## ✏️ Cập nhật String

Cập nhật một chuỗi đang tồn tại bằng cách gán (hoặc tái gán) một biến cho string khác. Giá trị mới có thể liên quan hoặc khác hoàn toàn giá trị trước đó.

```python
var1 = 'Hello World!'
print "Chuoi hien tai la :- ", var1[:6] + 'Python'
```

📤 **Kết quả:**

```
Chuoi hien tai la :-  Hello Python
```
## 🔣 Các ký tự đặc biệt

> *(Xem thêm ở tài liệu đầy đủ hoặc phần escape characters trong Python)*
## 🛠 Thao tác với String

Có ba kiểu toán tử được hỗ trợ bởi String:

* Toán tử cơ bản
* Toán tử membership
* Toán tử quan hệ
### ➕ Các toán tử cơ bản

**Toán tử nối chuỗi `+`:**

```python
"hoang" + "nam"  # 'hoangnam'
```

> Cả hai toán hạng được truyền cho phép nối chuỗi này phải cùng kiểu, nếu không sẽ tạo một lỗi.

**Toán tử lặp chuỗi `*`:**

```python
5 * "Hoang"  # 'HoangHoangHoangHoangHoang'
```
### 🔍 Các toán tử membership

* `in`: trả về `True` nếu một ký tự có mặt trong chuỗi
* `not in`: trả về `True` nếu không tồn tại

```python
str1 = "javapoint"
str2 = 'sssit'
str3 = "seomount"
str4 = 'java'
str5 = "it"
str6 = "seo"

print(str4 in str1)      # True
print(str5 in str2)      # True
print(str6 in str3)      # True
print(str4 not in str1)  # False
print(str1 not in str4)  # True
```
### ⚖️ Các toán tử quan hệ

Các toán tử như `<`, `>`, `<=`, `>=`, `==`, `!=`, `<>` đều áp dụng được cho String.

```python
"HOANG" == "HOANG"   # True
"afsha" >= "Afsha"   # True
"Z" <> "z"           # True (Python 2)
```
### 📦 Dấu chia chuỗi `[]`

**Cú pháp:**

```python
<ten_chuoi>[start:end]
<ten_chuoi>[:end]
<ten_chuoi>[start:]
```

**Ví dụ:**

```python
str = "Nikhil"

str[0:6]   # 'Nikhil'
str[0:3]   # 'Nik'
str[2:5]   # 'khi'
str[:6]    # 'Nikhil'
str[3:]    # 'hil'
```
## 🧩 Toán tử định dạng chuỗi (`%`)

Một trong những đặc điểm hay nhất trong Python là toán tử định dạng `%`:

```python
print "Ten toi la %s va toi nang %d kg!" % ('Hoang', 71)
```

📤 **Kết quả:**

```
Ten toi la Hoang va toi nang 71 kg!
```

> Bảng định dạng ký tự có thể xem thêm chi tiết như `%s`, `%d`, `%f`, v.v.

## 📚 Nguồn

[Vietjack.com - String trong Python](http://vietjack.com/python/string_trong_python.jsp)
