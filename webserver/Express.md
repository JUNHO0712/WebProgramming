### 미들웨어

- 웹 요청과 응답 사이에 필요한 처리를 수행하는 독힙된 함수
- 필요한 기능을 순차적으로 실행
- use() 메서드로 미들웨어 설정 -> 요청을 처리하여 응답을 보냄
- 미들웨어가 다 실행 하고 사용자에게 응답을 한다

### 라우터

- 클라이언트의 요청 path를 보고 처리할 수 있는 곳으로 기능을 전달하는 역할
- /users path로 요청 -> 응답 처리 함수 호출
- 응답 처리 함수 : get() method로 미리 등록

![alt text](image-1.png)

### app 객체

- 함수의 실행 순서를 app객체가 지정해준다
- 메서드 제공

메서드

set : 서버 속성 설정

get : 속성 값 가져오기(확인)

use(path, funtion,...) : 미들웨어 등록, 함수 사용

get(path, funtion) : GET 요청에 대한 라우트 설정, 특정 path로 요청된 정로를 처리

listen : 서버를 실제로 실행해서 클라이언트(브라우저)의 요청을 받을 준비를 하는 함수

![alt text](image-2.png)

**요청 객체에 추가한 헤더와 파라미터**
- 추가 헤더와 파라미터 
    -   query : 클라이언트에서 GET 방식으로 전송한 요청 파라미터 확인 
             예) req.query.name
        - 웹에서 “검색”이나 “필터링” 같은 작업을 할 때
        URL에 정보를 담아서 서버에게 전달하기 위해 사용

        예) 
                
                •	/search?keyword=cat

	        •	/user?id=10

	        •	/page?number=3&size=20

    - body :  클라이언트에서 POST 방식으로 전송한 요청 파라미터 확인 
            (body-parser 같은 외장 모듈 필요)  
            예) req.body.name

    - header : 헤어 확인  
