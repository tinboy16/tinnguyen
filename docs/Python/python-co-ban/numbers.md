
# 🔢 Number trong Python

## 🧠 Tổng quan

Kiểu dữ liệu **Number** dùng để lưu trữ các giá trị số.  
Chúng thuộc loại **immutable** – nghĩa là không thể thay đổi trực tiếp, mỗi lần thay đổi sẽ tạo ra đối tượng mới.

Ví dụ:

```python
var1 = 1
var2 = 10
````

Có thể xóa một hoặc nhiều biến số bằng từ khóa `del`:

```python
del var1, var2
```
### 🧾 Các kiểu Number cơ bản

* **int**: Số nguyên (không có phần thập phân)
* **long**: (Python 2) – Số nguyên lớn không giới hạn. (Từ Python 3, `int` đã thay thế `long`)
* **float**: Số thực, có phần thập phân. Hỗ trợ cả dạng số mũ (scientific notation).
* **complex**: Số phức dạng `a + bj`, với `a` là phần thực và `b` là phần ảo.

Ví dụ:

```python
a = 10       # int
b = 3.14     # float
c = 2.5e2    # float (khoa học)
d = 2 + 3j   # complex
print(a, b, c, d)
# Bấm play để xem kết quả
```
## 🔄 Chuyển đổi kiểu dữ liệu số

Python hỗ trợ chuyển đổi giữa các kiểu số bằng các hàm:

| Hàm             | Mục đích                       |
| --------------- | ------------------------------ |
| `int(x)`        | Chuyển `x` thành số nguyên     |
| `float(x)`      | Chuyển `x` thành số thực       |
| `complex(x)`    | Tạo số phức với phần ảo bằng 0 |
| `complex(x, y)` | Tạo số phức từ `x` và `y`      |

Ví dụ:

```python
x = 5.7
print(int(x))      # -> 5
print(float(x))    # -> 5.7
print(complex(x))  # -> (5.7+0j)
print(complex(3, 4))  # -> (3+4j)
# Bấm play để xem kết quả
```
## ➕ Một số hàm toán học, lượng giác (xem thêm)

* `abs(x)` – Giá trị tuyệt đối
* `pow(x, y)` – Lũy thừa x^y
* `math.sqrt(x)` – Căn bậc hai
* `math.sin(x)`, `math.cos(x)`, `math.tan(x)` – Lượng giác
* `round(x)` – Làm tròn
* `math.ceil(x)` / `math.floor(x)` – Làm tròn lên/xuống

```python
import math
print(abs(-7))
print(pow(2, 3))
print(math.sqrt(16))
print(math.sin(math.pi / 2))
print(round(3.14159, 2))
# Bấm play để xem kết quả
```
## 📚 Nguồn tham khảo

[http://vietjack.com/python/number\_trong\_python.jsp](http://vietjack.com/python/number_trong_python.jsp)
