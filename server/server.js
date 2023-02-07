const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const db = require('./db.js');
//const { User, Product } = require('./db/models/Users');

const UserRouter = require('./routers/userRouter');
const CategoryRouter = require('./routers/categoryRouter');
const ProductRouter = require('./routers/productRouter');

db(); //db 연결시 주석 해제 

app.use(cors());
app.use(express.json());

app.use('/auth',UserRouter);
app.use('/categories', CategoryRouter);
app.use('/product', ProductRouter);

app.get('/', function (req, res) {
    res.send('Hello')
});

app.listen(3000, function () {
  console.log('listening on 3000');
});