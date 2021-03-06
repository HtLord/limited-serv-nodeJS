測試報告
---
### /serv<br    />
### 正常API接口，依照request ip記錄發送次數
![serv1]
![serv1b]

### /fake<br  />
### 直接輸入IP: 1.1.1.1, 一次request至in-memory中紀錄
![fake1]
![fake1b]

### /fake/:ip<br  />
### 產生`ip`request共1次
![fake1ip]
![fake1ipb]

### /fake/:ip/loop/:times
### 產生`ip`request共`times`次
![fakenip]
![fakenipb]

### /fake/random/:times
### 產生[1.1.1.1-1.1.1.5]一輪0~5次request共`times`次
![faker]
![fakerb]

### 當限制到期，刷新`儀表版`
![resetb]

### 當超過60次Request
![errb]

[serv1]: ../asset/readme/serv-1.png  " "
[fake1]: ../asset/readme/fake-1.png  " "
[fake1ip]: ../asset/readme/fake-1-ip.png  " "
[fakenip]: ../asset/readme/fake-N-ip.png  " "
[faker]: ../asset/readme/fake-random.png  " "

[serv1b]: ../asset/readme/serv-1-board.png  " "
[fake1b]: ../asset/readme/fake-1-board.png  " "
[fake1ipb]: ../asset/readme/fake-1-ip-board.png  " "
[fakenipb]: ../asset/readme/fake-N-ip-board.png  " "
[fakerb]: ../asset/readme/fake-random-board.png  " "
[errb]: ../asset/readme/error.png  " "
[resetb]: ../asset/readme/reset.png  " "