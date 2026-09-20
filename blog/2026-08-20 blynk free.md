---
sidebar_position: 2
authors: [tinnguyen]
tags: [Blog, blynk, VN]
---
# Blynk Ngrok Gateway
Đây là một dự án được sử dụng cho mục đích nghiên cứu iot sử dụng tunel của ngork

Bộ cấu hình Docker để chạy Blynk Server cùng với API endpoint và ngrok, cho phép ESP8266 kết nối đến Blynk Server thông qua TCP tunnel.

Repository:
https://github.com/tinboy16/blynk-ngrok

## 1. Kiến trúc

Hệ thống gồm các thành phần:

- Blynk Server: chạy trong Docker.
- API: Node.js, cung cấp endpoint `/api/` để trả về địa chỉ TCP ngrok hiện tại cho ESP8266.
- Nginx: gateway cho web và API.
- ngrok-web: public web/API thông qua HTTPS.
- ngrok-app: tunnel TCP cho cổng web/app của Blynk.
- ngrok-esp: tunnel TCP cho ESP8266.

Luồng kết nối chính:

```text
ESP8266
   |
   | HTTPS GET
   v
ngrok-web
   |
   v
Nginx
   |
   v
API
   |
   | trả về host + port
   v
ESP8266
   |
   | TCP Blynk
   v
ngrok-esp
   |
   v
Blynk Server
```

## 2. Yêu cầu

Cần cài:

- Docker
- Docker Compose
- Git

Kiểm tra:

```powershell
docker --version
docker compose version
git --version
```

## 3. Clone repository

```powershell
git clone https://github.com/tinboy16/blynk-ngrok.git
cd blynk-ngrok
```

## 4. Tạo file `.env`

Không commit file `.env` lên GitHub.

Tạo file:

```text
.env
```

Nội dung:

```env
NGROK_AUTHTOKEN=YOUR_NGROK_AUTHTOKEN
```

Thay `YOUR_NGROK_AUTHTOKEN` bằng Auth Token của tài khoản ngrok.

## 5. Khởi động hệ thống

Chạy:

```powershell
docker compose up -d
```

Kiểm tra:

```powershell
docker compose ps
```

Các container chính:

```text
blynk
blynk-endpoint-api
blynk-gateway
blynk-web-ngrok
blynk-ngrok-app
blynk-ngrok-esp
```

Xem log:

```powershell
docker compose logs -f
```

Hoặc xem riêng:

```powershell
docker logs blynk
docker logs blynk-endpoint-api
docker logs blynk-gateway
docker logs blynk-web-ngrok
docker logs blynk-ngrok-app
docker logs blynk-ngrok-esp
```

## 6. Kiểm tra API

API public có dạng:

```text
https://YOUR_NGROK_DOMAIN/api/
```

Ví dụ:

```text
https://exciting-painfully-kiwi.ngrok-free.app/api/
```

API trả về JSON tương tự:

```json
{
  "ok": true,
  "app": {
    "host": "0.tcp.ap.ngrok.io",
    "port": 13268,
    "public_url": "tcp://0.tcp.ap.ngrok.io:13268"
  },
  "esp": {
    "host": "0.tcp.ap.ngrok.io",
    "port": 25984,
    "public_url": "tcp://0.tcp.ap.ngrok.io:25984"
  }
}
```

ESP8266 sử dụng thông tin trong trường `esp` để kết nối Blynk.

## 7. Cấu hình ESP8266

Trong code ESP8266 cần cấu hình WiFi, Blynk Auth và domain API:

```cpp
const char* WIFI_SSID = "YOUR_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";

char BLYNK_AUTH[] = "YOUR_BLYNK_AUTH";

const char* API_HOST =
  "YOUR_NGROK_DOMAIN";

const char* API_PATH =
  "/api/";

const uint16_t API_PORT = 443;
```

## 8. Cách ESP8266 hoạt động

ESP8266 thực hiện các bước:

1. Kết nối WiFi.
2. Resolve DNS của API domain.
3. Kết nối HTTPS đến API.
4. Gửi `GET /api/`.
5. Đọc HTTP response.
6. Xử lý response dạng `chunked`.
7. Parse JSON bằng ArduinoJson.
8. Lấy `esp.host` và `esp.port`.
9. Dùng host và port nhận được để cấu hình Blynk.
10. Kết nối đến Blynk Server.
11. Nếu kết nối mất, ESP8266 lấy endpoint mới và kết nối lại.

Việc lấy endpoint động rất hữu ích khi TCP port của ngrok thay đổi.

## 9. API sử dụng HTTP Chunked

API có thể trả response với:

```http
Transfer-Encoding: chunked
```

ESP8266 cần đọc từng chunk trước khi parse JSON.

Không nên chỉ sử dụng:

```cpp
client.readString();
```

để giả định toàn bộ response luôn có sẵn trong một lần đọc.

Code ESP8266 của dự án có phần xử lý:

```text
HTTP status
HTTP headers
Transfer-Encoding: chunked
Content-Length
Connection: close
JSON parsing
```

## 10. Các cổng sử dụng

Theo cấu hình Docker Compose:

| Thành phần | Port |
|---|---:|
| Blynk HTTP | 8080 |
| Blynk HTTPS | 9443 |
| API | 3000 nội bộ |
| Nginx | 80 nội bộ |
| ngrok web | HTTPS public |
| ngrok app | TCP public |
| ngrok ESP | TCP public |

Trong hệ thống hiện tại, ESP8266 sử dụng TCP tunnel trỏ vào Blynk Server port `8080`.

Cấu hình ngrok tương ứng:

```yaml
ngrok-esp:
  image: ngrok/ngrok:latest
  container_name: blynk-ngrok-esp
  restart: unless-stopped

  environment:
    NGROK_AUTHTOKEN: "${NGROK_AUTHTOKEN}"

  command:
    - tcp
    - blynk:8080
    - --log=stdout

  depends_on:
    - blynk
```

Nếu thay đổi port Blynk, cần thay đổi cả `server.properties`, Docker Compose và endpoint mà ESP8266 sử dụng.

## 11. Kiểm tra tunnel ngrok

Xem log:

```powershell
docker logs blynk-ngrok-esp --tail 100
```

Khi tunnel hoạt động sẽ có dòng tương tự:

```text
started tunnel
url=tcp://0.tcp.ap.ngrok.io:XXXXX
```

Port `XXXXX` có thể thay đổi khi tunnel được tạo lại.

Do đó ESP8266 không nên hard-code TCP port ngrok.

Thay vào đó, ESP8266 lấy endpoint từ:

```text
/api/
```

## 12. Kiểm tra kết nối ESP8266

Serial Monitor:

```text
[WiFi] CONNECTED
[API] GET NGROK ENDPOINT
[HTTPS] TLS CONNECTED!
[JSON] PARSE SUCCESS
[JSON] ok = true
NEW BLYNK ENDPOINT
[Blynk] CONNECTING
[Blynk] CONNECTED!
```

Nếu API hoạt động nhưng Blynk không kết nối được, kiểm tra:

```powershell
docker logs blynk-ngrok-esp --tail 100
```

Đặc biệt chú ý:

```text
failed to open private leg
connection refused
```

Nếu xuất hiện lỗi này, ngrok đang chạy nhưng container Blynk không lắng nghe ở port mà ngrok đang trỏ tới.

## 13. Kiểm tra Blynk Server

Kiểm tra container:

```powershell
docker ps
```

Kiểm tra process:

```powershell
docker exec blynk ps aux
```

Kiểm tra cấu hình:

```powershell
docker exec blynk cat /data/config/server.properties
```

Ví dụ:

```properties
hardware.mqtt.port=8440
http.port=8080
https.port=9443
```

Lưu ý: `hardware.mqtt.port`, `http.port` và `https.port` là các cổng khác nhau. Không nên nhầm port MQTT với port HTTP/HTTPS.

## 14. Dữ liệu và backup


```text
data/
backup/
```

File cấu hình bí mật:

```text
.env
```

Ví dụ:

```gitignore
.env
data/
backup/
```

## 15. Cấu trúc project

Cấu trúc cơ bản:

```text
blynk-ngrok/
├── api/
│   └── server.js
├── nginx/
│   └── default.conf
├── docker-compose.yaml
├── .env
├── .gitignore
├── data/
└── backup/
```

## 16. Dừng hệ thống

```powershell
docker compose down
```

Dừng và xóa container nhưng giữ dữ liệu trong volume bind mount:

```powershell
docker compose down
```

Khởi động lại:

```powershell
docker compose up -d
```

## 17. Cập nhật project

Sau khi pull code mới:

```powershell
git pull
docker compose up -d --build
```

Nếu image không cần build lại:

```powershell
docker compose pull
docker compose up -d
```

## 18. Xem trạng thái

```powershell
docker compose ps
```

Xem toàn bộ log:

```powershell
docker compose logs --tail 100
```

Theo dõi log realtime:

```powershell
docker compose logs -f
```

## 19. Lưu ý bảo mật

Không commit các thông tin sau:

```text
.env
WiFi password
Blynk Auth Token
NGROK_AUTHTOKEN
private keys
database credentials
backup/
data/
```

Nếu đã lỡ commit token hoặc mật khẩu lên GitHub, cần thay token/mật khẩu đó ngay cả khi đã xóa file khỏi commit mới nhất.

## 20. Giấy phép

Project này được cung cấp để phục vụ mục đích nghiên cứu, thử nghiệm và triển khai hệ thống Blynk Server cá nhân.

Kiểm tra giấy phép của các thành phần bên thứ ba trước khi sử dụng trong môi trường thương mại.

## English

### Blynk Ngrok Gateway

Docker setup for running a Blynk Server with an API endpoint, Nginx gateway and ngrok TCP/HTTP tunnels.

### Main components

- Blynk Server
- Node.js API
- Nginx gateway
- ngrok web tunnel
- ngrok app TCP tunnel
- ngrok ESP8266 TCP tunnel

### Quick start

Clone the repository:

```powershell
git clone https://github.com/tinboy16/blynk-ngrok.git
cd blynk-ngrok
```

Create `.env`:

```env
NGROK_AUTHTOKEN=YOUR_NGROK_AUTHTOKEN
```

Start the services:

```powershell
docker compose up -d
```

Check:

```powershell
docker compose ps
```

View logs:

```powershell
docker compose logs -f
```

### API

The API endpoint is:

```text
https://YOUR_NGROK_DOMAIN/api/
```

It returns the current public Blynk TCP endpoint for the ESP8266.

Example:

```json
{
  "ok": true,
  "esp": {
    "host": "0.tcp.ap.ngrok.io",
    "port": 25984,
    "public_url": "tcp://0.tcp.ap.ngrok.io:25984"
  }
}
```

The ESP8266 reads this endpoint instead of hard-coding the ngrok TCP port.

### ESP8266

The ESP8266:

1. Connects to WiFi.
2. Requests `/api/`.
3. Reads the HTTP response.
4. Supports chunked transfer encoding.
5. Parses the JSON response.
6. Gets the current Blynk host and port.
7. Connects to Blynk.
8. Refreshes the endpoint when the connection is lost.

### Security

Do not commit:

```text
.env
data/
backup/
WiFi passwords
Blynk authentication tokens
ngrok authentication tokens
private keys
database credentials
```

### Repository

https://github.com/tinboy16/blynk-ngrok