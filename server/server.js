import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import moragn from 'morgan';
import cookieParser from 'cookie-parser';
import 'express-async-errors';


// express를 app에 선언 
const app = express();

/* json으로 이루어진 Requset body를 요청받았을때 요청값을 제대로 받아오기위해
  body-parser 대신 사용하는 코드 */
app.use(express.json());

// var cors로 선언했던 부분 안에 요청 메서드와 CORS 정책 초기값, URL 선언
app.use(
  cors({
    origin: 'http//localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

// package.json에 선언한 npm패키지 사용선언 
app.use(helmet());
/* 요청과 응답에 대한 정보를 콘솔로 기록해주는 것*/
app.use(moragn('titny'));
app.use(cookieParser());

app.use('/')


// const { User, Product } = require('./db/models/Users');


app.use(cors());
// app.use('/auth',UserRouter)
app.get('/', function (req, res) {
    res.send('Hello')
})


app.listen(3000, function () {
  console.log('listening on 3000');
});