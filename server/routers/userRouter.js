<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'blahblah';

const { Router } = require('express');
const router = Router();
=======
import express from 'express';
import User from '../db/schemas/User.js';
>>>>>>> a6929b9a8380553fcb073c23dc61e0ec99b511f7

// import 구문에서 Route가 무엇을 정의하는지 모름
// express에서 route를 땡겨오기 위해 사용
const userRouter = express.Router();

<<<<<<< HEAD
const { auth } = require('../middleware/authMiddleware.js');

router.get('/', auth, (req, res, next) => {
    User.findAll().then((result) => {
        return res.status(200).json({
            code: 200,
            message: '토큰은 정상입니다.',
            data: result,
        });
    });
});

router.get('/:id', (req, res, next) => {
    User.findOneByid(req.params.id).then((result) => res.send(result));
});

router.post('/signup', async (req, res, next) => {
=======

userRouter.post('/signup', async (req, res, next) => {
>>>>>>> a6929b9a8380553fcb073c23dc61e0ec99b511f7
    // res.send('회원가입 ');
    const { email, password, name, address1, address2, zipCode } = req.body;
    const user = {
        email: email,
        password: password,
        address: {
            zipCode: zipCode,
            address1: address1,
            address2: address2,
        },
        name: name,
    };

    User.create(user)
        .then((user) => res.send(user))
        .catch((err) => res.status(500).send(err));
});

<<<<<<< HEAD
router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    User.findOneByEmailAndPassword(email, password)
        .then((user) => {
            if (!user) return res.status(401).send();

            token = jwt.sign(
                {
                    type: 'JWT',
                    email: email,
                },
                SECRET_KEY,
                {
                    expiresIn: '15m', // 만료시간 15분
                    issuer: 'blahblah',
                }
            );

            res.status(200).json({
                code: 200,
                message: '토큰이 발급되었습니다.',
                token: token,
            });
        })
        .catch((err) => res.status(500).send(err));
=======
userRouter.post('/login', async (req, res, next) => {
    res.send('로그인  ');
>>>>>>> a6929b9a8380553fcb073c23dc61e0ec99b511f7
});

// module.exports = router;
export default userRouter;