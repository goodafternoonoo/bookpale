import express from 'express';
import User from '../db/schemas/User.js';

// import 구문에서 Route가 무엇을 정의하는지 모름
// express에서 route를 땡겨오기 위해 사용
const userRouter = express.Router();


userRouter.post('/signup', async (req, res, next) => {
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

userRouter.post('/login', async (req, res, next) => {
    res.send('로그인  ');
});

// module.exports = router;
export default userRouter;