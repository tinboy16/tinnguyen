---
title: Cú pháp Python
sidebar_position: 2
---

# 🧾 Cú pháp Python

## Định danh (identifier) trong Python

Một định danh `(identifier)` là một tên được sử dụng để nhận diện một biến, một hàm, một lớp, hoặc một đối tượng.

Một định danh bắt đầu với một chữ cái từ A tới Z hoặc từ a tới z hoặc một dấu gạch dưới (_) được theo sau bởi 0 hoặc nhiều ký tự, dấu gạch dưới hoặc các chữ số (từ 0 tới 9).

> Python không hỗ trợ các ký tự đặc biệt như `@`, `$`, và `%` trong tên định danh.

Python là ngôn ngữ phân biệt chữ hoa - chữ thường, vì vậy `Thanh` và `thanh` là hai định danh khác nhau.

Một số quy tắc khi đặt tên định danh:
- Một định danh là một dãy ký tự chữ và số.
- Không có ký tự đặc biệt nào được sử dụng, trừ dấu gạch dưới `_`.
- Ký tự đầu tiên **không được** là số.
- Không sử dụng từ khóa (keywords) làm định danh.
- Tên lớp nên bắt đầu bằng **chữ hoa**.
- Các định danh khác nên bắt đầu bằng **chữ thường**.
- Định danh bắt đầu bằng `_` thường mang ý nghĩa private.
- Định danh bắt đầu bằng `__` thường mang ý nghĩa thực sự private.
- Định danh bắt đầu và kết thúc bằng `__` là tên đặc biệt do Python định nghĩa, ví dụ: `__init__`.

## Dòng lệnh và độ thụt dòng lệnh trong Python

Python không dùng dấu `{}` để bao khối lệnh. Thay vào đó, **độ thụt dòng (indentation)** là bắt buộc để xác định khối mã.

Số khoảng trắng dùng để thụt dòng có thể thay đổi, nhưng trong cùng một khối mã phải **thụt đều nhau**.

### Ví dụ:

```python
if True:
    print("True")
else:
    print("False")

if True:
    print("Answer")
    print("True")
else:
    print("Answer")
    print("False")
````

## Các lệnh trên nhiều dòng trong Python

Dùng ký tự `\` để nối lệnh dài sang dòng mới:

```python
total = item_one + \
        item_two + \
        item_three
```

Nếu lệnh nằm trong cặp `[]`, `{}`, hoặc `()`, **không cần** dùng `\`:

```python
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

## Trích dẫn trong Python

Python chấp nhận dấu nháy đơn `'`, nháy kép `"`, hoặc nháy ba `'''` hoặc `"""` để biểu diễn chuỗi.

```python
word = 'word'
sentence = "This is a sentence."
paragraph = """This is a paragraph. It is
made up of multiple lines and sentences."""
```

## Comment trong Python

Có hai loại comment: **đơn dòng** và **đa dòng**.

### Comment đơn dòng dùng dấu `#`:

```python
# First comment
print("Hello, Python!")  # second comment

name = "Madisetti"  # This is again comment
```

### Comment đa dòng dùng chuỗi trích dẫn ba:

```python
# single line comment  
print("Hello Python")  
"""This is
multiline comment"""
```

## Các lệnh đa dòng trên một dòng đơn trong Python

Dùng dấu `;` để viết nhiều lệnh trên một dòng:

```python
import sys; x = 'foo'; sys.stdout.write(x + '\n')
```

## Các nhóm lệnh đa dòng (suite) trong Python

Một suite là tập hợp các lệnh đơn tạo thành một khối mã.

Các câu lệnh như `if`, `while`, `def`, `class` yêu cầu một dòng **header** kết thúc bằng dấu `:` và một suite phía sau được thụt dòng.

### Ví dụ:

```python
x = 10
if x > 5:
    print("Greater than 5")
elif x == 5:
    print("Equals 5")
else:
    print("Less than 5")
```

## 🔗 Nguồn tham khảo:

[http://vietjack.com/python/cu\_phap\_python\_co\_ban.jsp](http://vietjack.com/python/cu_phap_python_co_ban.jsp)

