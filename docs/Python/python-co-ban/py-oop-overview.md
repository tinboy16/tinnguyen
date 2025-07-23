
# Class và cách khai báo class trong Python
## 1. Khai báo class

Một đối tượng có thể có một hoặc nhiều class, và trong mỗi class lại chứa một hoặc nhiều thuộc tính và phương thức.

### Cú pháp khai báo class:

```python
class ClassName:
    # code
````

**Ý nghĩa:**

* `ClassName`: là tên của lớp (class) muốn khai báo.
## 2. Khai báo thuộc tính

Một class có thể chứa một hoặc nhiều thuộc tính. Thuộc tính trong class tương tự như biến trong lập trình thủ tục.

### Ví dụ:

```python
class Person:
    name = "Lacoski"
    age = 22
    male = True
# Bấm play để xem kết quả
```
## 3. Khai báo phương thức trong Class (methods)

Phương thức (method) trong lập trình hướng đối tượng tương tự như hàm, và một class có thể không có hoặc có nhiều phương thức.

### Ví dụ:

```python
class Person:
    # Thuộc tính
    name = "Lacoski"
    age = 22
    male = True

    # Phương thức
    def setName(self, name):
        self.name = name

    def getName(self):
        return self.name

    def setAge(self, age):
        self.age = age

    def getAge(self):
        return self.age

    def setMale(self, male):
        self.male = male

    def getMale(self):
        return self.male
# Bấm play để xem kết quả
```

> `self` đại diện cho chính đối tượng đang được xử lý. Dựa vào `self`, ta có thể truy cập các thuộc tính và phương thức trong class.
## 4. Khởi tạo Class

### Cú pháp khởi tạo đối tượng:

```python
variableName = ClassName()
```

**Ý nghĩa:**

* `variableName`: tên biến sẽ đại diện cho đối tượng vừa được tạo.
* `ClassName`: tên class được sử dụng để khởi tạo.

### Ví dụ:

```python
person = Person()
# Bấm play để xem kết quả
```
## 5. Truy cập thuộc tính và phương thức

### Cú pháp:

```python
# Truy cập thuộc tính
object.propertyName

# Truy cập phương thức
object.methodName()
```

**Ý nghĩa:**

* `object`: biến đối tượng đã được khởi tạo.
* `propertyName`: tên thuộc tính muốn truy cập.
* `methodName`: tên phương thức muốn gọi.
## 🔗 Nguồn tham khảo:

[https://toidicode.com/class-va-cach-khai-bao-class-trong-python-357.html](https://toidicode.com/class-va-cach-khai-bao-class-trong-python-357.html)
