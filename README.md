How to
---
操作下面指令
```
$cd ~/some/where/to/this/project/
$npm run start
```

等待Ready to work...字樣出現，表示開始監聽localhost:3000

```
> limited-serv@0.0.0 start /Users/Huang/WebstormProjects/limited-serv
> node ./bin/www

Ready to work...
```

打開browser，至http://localhost:3000/即可開啟`儀表板`頁面
![dashboard]

功能包含
> **/serv**<br  />
> 正常API接口，依照request ip記錄發送次數

> **/fake**<br  />
> 直接輸入IP: 1.1.1.1, 一次request至in-memory中紀錄

> **/fake/:ip**<br  />
> 產生`ip`request共1次

> **/fake/:ip/loop/:times**<br  />
> 產生`ip`request共`times`次

> **/fake/random/:times**<br  />
> 產生[1.1.1.1-1.1.1.5]一輪0~5次request共`times`次


[dashboard]: asset/readme/dashboard.png  "Optional title attribute"
