//console.log("router 123 file");
const { Router } = require('express');
//const path = require("path");
const router = Router();

router.post('/signup', async (req, res, next) => {
  res.send("회원가입 ");
});

router.post('/login', async (req, res, next) => {
  res.send("로그인  ");
});

module.exports = router;