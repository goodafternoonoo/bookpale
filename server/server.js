const express = require('express');
var cors = require('cors');
const app = express();
const UserRouter = require('./routers/UserRouter');
const CategoryRouter = require('./routers/categoryRouter');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./db.js');
//const { User, Product } = require('./db/models/Users');

db(); //db 연결시 주석 해제 



app.use(cors());
app.use(express.json())
app.use('/auth',UserRouter)
app.use('/categories', CategoryRouter)
//http://localhost:3000/categories로 들어오는 요청은 CategoryRouter에서 처리
app.get('/', function (req, res) {
    res.send('Hello')
})


app.listen(3000, function () {
  console.log('listening on 3000');
});