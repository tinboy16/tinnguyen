---
slug: ar-io-staking-settings
title: Delegated Staking Settings
---

## Tổng quan

Các nhà điều hành cổng có thể chọn cho phép người khác đặt cược token trên cổng của họ. Điều này được gọi là “ủy quyền đặt cược”, và nó tăng số lượng token được đặt cược cho một cổng cụ thể. Các token được đặt cược thêm vào dẫn đến một trọng số cược lớn hơn cho cổng - tăng khả năng được chọn làm quan sát viên và có thể nhận được phần thưởng bổ sung cho một kỷ nguyên cụ thể (giả sử quan sát viên của cổng hoạt động đúng cách). Để khuyến khích điều này, bạn có thể đặt một phần của phần thưởng của cổng và quan sát viên của bạn để được trao cho những người đặt cược trên cổng của bạn.

Mặc định, ủy quyền đặt cược bị vô hiệu hóa. Bạn sẽ cần bật nó và cấu hình cài đặt của bạn bằng cách chạy kịch bản `update-gateway-settings` từ kho testnet contract.

## Cài đặt Kho Testnet Contract

Việc kích hoạt ủy quyền đặt cược có thể được thực hiện rất dễ dàng bằng cách chạy một đoạn Script  trong kho [testnet-contract](https://github.com/ar-io/testnet-contract) trên GitHub.

Nếu bạn đã cài đặt kho này, hãy đảm bảo rằng nó đã được cập nhật đến phiên bản mới nhất bằng cách mở nó trong terminal và chạy `git pull`.

Nếu bạn nhận được một lỗi, hãy thử `git stash` để loại bỏ bất kỳ thay đổi bạn có thể đã thực hiện ở cục bộ và sau đó chạy `git pull` lại.

Nếu bạn chưa cài đặt kho, hãy đảm bảo rằng bạn đã có [git](https://git-scm.com/) cài đặt trên máy tính của bạn, điều hướng đến vị trí mà bạn muốn lưu nó và chạy

```bash
git clone https://github.com/ar-io/testnet-contract
```

Điều này sẽ sao chép tất cả các tệp từ github vào một thư mục mới trên máy tính của bạn.

## Cài đặt Các Phụ Thuộc

Khi kho đã được cài đặt, bạn cần cài đặt mã mà nó phụ thuộc vào để làm việc. Chúng ta làm điều này bằng cách sử dụng [Yarn](https://yarnpkg.com/).

Điều hướng terminal của bạn vào thư mục kho vừa tạo:

```bash
cd testnet-contract
```

Sau đó cài đặt các phụ thuộc với:

```bash
yarn install
```

## Cung Cấp Ví

Để cập nhật cài đặt cổng của bạn, bạn cần chạy đoạn script bằng cách sử dụng ví liên kết với cổng của bạn. Cách dễ nhất để cung cấp ví của bạn là đặt đường dẫn đến tệp Keyfile của bạn trong `.env` của bạn như `WALLET_FILE_PATH`.

Bạn sẽ cần một số lượng nhỏ AR trong ví này để thanh toán cho giao dịch tương tác.

Ví dụ nội dung trong `.env`:

```plaintext
WALLET_FILE_PATH=<đường dẫn/đến/ví>
```

##  Running the Script

Khi kho đã được cài đặt và ví của bạn đã được cung cấp, tất cả những gì còn lại là chạy kịch bản. Điều này có thể được thực hiện với một lệnh duy nhất trong terminal của bạn.

Đảm bảo terminal của bạn đang ở thư mục gốc của kho `testnet-contract` (thư mục có tên là 'testnet-contract'), và chạy lệnh này:

```bash
yarn update-gateway-settings
```

Bạn sẽ được nhắc trong terminal của bạn để nhập các giá trị của các cài đặt khác nhau trên cổng của bạn. Giá trị mặc định cho mỗi lời nhắc sẽ là cài đặt hiện tại của bạn, vì vậy nếu bạn không muốn thay đổi điều gì, chỉ cần nhấn ENTER để chuyển đến lời nhắc tiếp theo.

Sau khi nhập tất cả các thông tin cần thiết, bạn sẽ được yêu cầu xác nhận chi tiết cổng của mình trước khi gửi giao dịch.
-   **Enter your a friendly name for your gateway**: Đây là tên hoặc `nhãn` cho cổng của bạn.
-   **Enter your domain for this gateway**: Đây là tên miền cho cổng của bạn. Nó nên là tên miền đầy đủ, không có bất kỳ tiền tố giao thức ("http/https") nào. Ví dụ: "https://imtran.site".
-   **Enter port used for this gateway**: Cổng truy cập chính mà mọi người nên sử dụng để truy cập vào cổng của bạn. Ngoại trừ một số trường hợp sử dụng nâng cao, giá trị này nên là 443.
-   **Enter protocol used for this gateway**: http hoặc https. Hầu hết người dùng sẽ muốn sử dụng https.
-   **Enter gateway properties transaction ID (use default if not sure)**: Arweave TxId cho cài đặt thuộc tính cổng của bạn. Đây không phải là một tính năng được triển khai rộng rãi cho đến nay, vì vậy hầu hết mọi người sẽ chỉ nhấn `ENTER` để chấp nhận giá trị mặc định.
-   **Enter short note to further describe this gateway**: Một mô tả ngắn về cổng của bạn. Phải ít hơn hoặc bằng 256 ký tự.
-   **Enter the observer wallet public address**: Địa chỉ ví công khai được sử dụng cho Quan sát viên của bạn. Nó sẽ mặc định thành ví đang được sử dụng để tham gia mạng.
-   **Enable or disable auto staking?**: Nếu có, phần thưởng sẽ tự động được đặt cược trên cổng của bạn thay vì được chuyển đến ví của bạn.
-   **Enable or disable delegated staking?**: Bạn có muốn cho phép mọi người đặt cược token trên cổng của bạn không? `y` cho yes hoặc `n` cho no.
-   **Enter the percent of gateway and observer rewards given to delegates**: Bạn muốn cấp bao nhiêu phần trăm của phần thưởng cổng của bạn cho những người đặt cược được ủy quyền? Mặc định là 10%.
-   **Enter the minimum delegate stake for this gateway (in IO)**: Số lượng token tối thiểu mà một người phải đặt cược để ủy quyền cho cổng của bạn. Mặc định là 100.
-   **CONFIRM GATEWAY DETAILS?**: Đây là cơ hội cuối cùng của bạn để xem xét tất cả các cài đặt của bạn trước khi gửi giao dịch. `y` để xác nhận và gửi, `n` để hủy.
