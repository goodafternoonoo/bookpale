const { Router } = require('express');
const router = Router();

const User = require('../db/schemas/User.js');

router.post('/signup', async (req, res, next) => {
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

router.post('/login', async (req, res, next) => {
    res.send('로그인  ');
});

module.exports = router;
