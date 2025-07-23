
# 📦 Module và Package trong Python

## 📘 Module

### ✅ Tổng quan

Module giúp phân chia code thành các phần nhỏ hơn, có liên quan, để dễ bảo trì và tái sử dụng.  
Một module về cơ bản là một file `.py` chứa các hàm, lớp, hoặc biến.

### ✅ Ưu điểm

- ♻️ **Tái sử dụng**
- 📂 **Phân loại rõ ràng**

---

### 🔗 Cách import một Module

#### 1. `import` module

```python
# file: addition.py
def add(a, b):
    c = a + b
    print(c)
    return
````

```python
# file: msg.py
def msg_method():
    print("Hom nay troi mua")
    return
```

```python
# file: main.py
import addition, msg
addition.add(10, 20)
addition.add(30, 40)
msg.msg_method()

```

---

#### 2. `from … import`

```python
# area.py
def circle(r):
    print(3.14 * r * r)

def square(l):
    print(l * l)

def rectangle(l, b):
    print(l * b)

def triangle(b, h):
    print(0.5 * b * h)
```

```python
# main.py
from area import square, rectangle
square(10)
rectangle(2, 5)

```

---

#### 3. `from … import *`

```python
from area import *
square(5)
circle(3)

```

---

#### 4. 📦 Built-in Module (math)

```python
import math
a = 4.6
print(math.ceil(a))
print(math.floor(a))
b = 9
print(math.sqrt(b))
print(math.exp(3.0))
print(math.log(2.0))
print(math.pow(2.0, 3.0))
print(math.sin(0))
print(math.cos(0))
print(math.tan(45))

```

---

## 🗂 Package

### ✅ Tổng quan

Package là tập hợp nhiều module nằm trong một thư mục có chứa file `__init__.py`.

---

### 🛠 Cách tạo Package

```
# msg1.py
def msg1():
    print("Day la msg1")
```

```
# msg2.py
def msg2():
    print("Day la msg2")
```

```
# msg3.py
def msg3():
    print("Day la msg3")
```

```
# __init__.py trong thư mục PackageTest
from msg1 import msg1
from msg2 import msg2
from msg3 import msg3
```

```python
# main.py
import PackageTest
PackageTest.msg1()
PackageTest.msg2()
PackageTest.msg3()

```

---

### 📌 `__init__.py` là gì?

File này đánh dấu thư mục là một Python Package.
Nó có thể dùng để khởi tạo hoặc load các module cụ thể.

---

📷 Hình minh họa cấu trúc package:
`img/module-package-1.png`

