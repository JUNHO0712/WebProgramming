### 미들웨어 사용하기 

- 개발자가 다양한 기능을 사용할 수 있도록 여러가지 미들웨어 제공 

#### static 
- 특정 폴더의 파일들을 특정 path로 접근할 수 있게함
- public 폴더의 모든 파일들을 웹 서버의 root path('/')로 접근하게 함
    - const static = require('serve-static');
    - app.use('/', static(path.join(__dirname,'public')));
- 첫번째 파라미터 = 요청 path : 두번째 파라미터 = 특정 폴더 지정 -> 요청 path와 폴더가 mapping 됨

#### body-parser
- POST로 요청했을 때 요청 파라미터를 확인할 수 있게 함
- 본문 영역에 있는 요청 파라미터를 파싱 -> res.body 에 넣어줌
- Express에서 클라이언트가 보낸 요청(body)을 해석(파싱)하는 미들웨어
- POST/PUT 요청으로 들어온 데이터를 읽어서 req.body에 넣어주는 역할

- 원래 Node.js는 요청 body 내용을 그냥은 읽지 못한다.

    그래서 body-parser 같은 미들웨어가 그 내용을 해석해서 객체로 만들어줘야 한다
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());