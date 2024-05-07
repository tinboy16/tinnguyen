# Tìm hiểu các khái niệm về Docker cơ bản


## DockerFile <a href="#dockerfile" id="dockerfile"></a>

Mọi container Docker bắt đầu bằng một file văn bản đơn giản chứa hướng dẫn về cách tạo image container Docker. **DockerFile** tự động hóa tiến trình tạo image Docker. Về cơ bản, đây là danh sách các lệnh mà Docker Engine sẽ chạy để tập hợp image.

## Docker images <a href="#docker-images" id="docker-images"></a>

**Docker image** chứa mã nguồn ứng dụng thực thi cũng như tất cả các công cụ, thư viện. Kèm theo dependencies mà ứng dụng cần để chạy dưới dạng container. Khi bạn chạy Docker image, nó sẽ trở thành một phiên bản (hoặc nhiều phiên bản) của container.Có thể xây dựng Docker image từ đầu, nhưng hầu hết các nhà phát triển kéo chúng xuống từ các kho lưu trữ chung. Nhiều Docker image có thể được tạo từ một base image duy nhất. Docker image được tạo thành từ các lớp và mỗi lớp tương ứng với một phiên bản của image.

Bất cứ khi nào nhà phát triển thay đổi image, một lớp trên cùng mới sẽ được tạo. Lúc này, lớp trên cùng này thay thế lớp trên cùng trước làm phiên bản hiện tại của image. Các lớp trước đó được lưu để khôi phục hoặc được sử dụng lại trong các dự án khác.

Mỗi khi một container được tạo từ Docker image, một lớp mới khác được gọi là lớp container được tạo. Các thay đổi được thực hiện đối với container. Chẳng hạn như nó có thể thêm hoặc xóa file chỉ được lưu vào lớp container và chỉ tồn tại khi container đang chạy.

Quá trình tạo image lặp đi lặp lại này giúp tăng hiệu quả tổng thể. Bởi nhiều phiên bản container có thể chạy chỉ từ một base image duy nhất. Do đó, khi chúng làm như vậy, chúng sẽ tận dụng một ngăn xếp chung.



## Docker containers <a href="#docker-containers" id="docker-containers"></a>

**Docker container** là các phiên bản live, running instance của Docker image. Ta thấy Docker image là file chỉ đọc còn container là phiên bản live, executable và người dùng có thể tương tác với chúng. Cùng với đó, quản trị viên có thể điều chỉnh cài đặt và các quy định của họ.

## Docker Hub <a href="#docker-hub" id="docker-hub"></a>

**Docker Hub** là kho lưu trữ công khai Docker image. Nó tự gọi mình là “thư viện và cộng đồng lớn nhất thế giới về image container”. Nó chứa hơn 100.000 image container và chúng được lấy từ các nhà cung cấp phần mềm thương mại, các dự án mã nguồn mở, các nhà phát triển cá nhân. Nó bao gồm các image được sản xuất bởi Docker, Inc. Cùng với đó là các image được chứng nhận thuộc Cơ quan đăng ký tin cậy Docker và hàng nghìn image khác.

Tất cả người dùng Docker Hub có thể chia sẻ image của họ theo ý muốn. Họ cũng có thể tải xuống các image cơ sở được xác định trước để sử dụng làm điểm bắt đầu cho bất kỳ dự án container nào.

## Docker Client <a href="#docker-client" id="docker-client"></a>

Đây là thành phần mà bạn có thể tương tác với Docker thông qua command line. Docker client sẽ gửi lệnh tới Docker Deamon thông qua REST API như đã đề cập ở trên.
