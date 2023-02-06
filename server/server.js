const express = require('express');
var cors = require('cors');
const app = express();
// const UserRouter = require('./routers/UserRouter');
// const db = require('./db.js');
const { User, Product } = require('./db/models/Users');

//db(); //db 연결시 주석 해제 

async function main() {
  console.log('------게시글을 생성합니다-----');
  await User.create([
    { title: 'first', name:'first post' },
    { title: 'second', name: 'second post' },
  ]);

  const users= await User.find({});
  

  console.log('------게시글이 생성되었습니다-----');
  users.map(({ title, name }) => {
    console.log(`제목: ${title}, 이름: ${name}`);
  });

  console.log('------제목이 없는 게시글을 생성합니다-----');
  try {
    await User.create({ title: 'post with no title' });
  } catch(err) {
    console.log('------게시글이 생성에 오류가 발생했습니다-----');
    console.log(err.message);
  }
  
}

app.use(cors());
// app.use('/auth',UserRouter)
app.get('/', function (req, res) {
    res.send('Hello')
})


app.listen(3000, function () {
  console.log('listening on 3000');
});