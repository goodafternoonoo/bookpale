//console.log("router 123 file");
const { Router } = require('express');
const path = require("path");
const router = Router();

router.post('/signup', async (req, res, next) => {
 // res.send("회원가입 ");
  res.sendFile(path.join(__dirname ,'../views/signup.html'));
});

router.post('/login', async (req, res, next) => {
  //res.send("로그인  ");
  res.sendFile(path.join(__dirname ,'../views/login.html'));
});

module.exports = router;