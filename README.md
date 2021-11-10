# Image_Processing_Code_Challenge

## Step 1. Clone project
- git clone https://github.com/AlVInYaNgQQ/Image_Processing_Code_Challenge.git


## Step 2. Install module
<!-- - npm init -->
- npm i

## Step 3. Running test
按順序 先開啟 Server
- npm start     << running server
- npm test      << running auto test (http request)
##### ps. 檢查資料夾的圖片檔 (_*.jpg)


## API Document

- GET http: http://127.0.0.1:8080/homework.cgi
透過此 api 取得水平與垂直翻轉後的圖片。

#### Request method
#### Method	GET
#### Request parameters

##### (optional) image_url=<url, 欲翻轉圖片網址>

<!-- Parameter name	Required/optional	Type	Description -->
<!-- image_url	Required	url	        欲翻轉圖片網址 -->

##### -----------------------------------------------------------------------
- GET http: http://127.0.0.1:8080/cat.jpg
透過此 api 取得一隻貓圖的水平與垂直翻轉後的圖片。

#### Request method
#### Method	GET
#### Request parameters
