# Quy trình thực thi một hệ thống sử dụng Docker


* **Build**: Bước đầu tiên, bạn cần tạo một dockerfile, trong dockerfile này chính là code của mình. Dockerfile này sẽ được build ở một máy tính có cài đặt Docker Engine. Khi build xong, thì chúng ta sẽ có container và trong container sẽ chứa ứng dụng kèm bộ thư viện.
* **Push**: Bạn thực hiện push Container lên cloud và lưu lại sau khi có được container.
* **Pull & Run**: Nếu máy tính khác của bạn muốn sử dụng container thì máy của bạn phải thực hiện pull container này về máy đó. Và máy đó phải cài đặt trước Docker Engine. Tiếp theo, bạn mới thực hiện Run Container này.
