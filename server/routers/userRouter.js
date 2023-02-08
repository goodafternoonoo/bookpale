const { Router } = require('express');
const router = Router();

const User = require('../db/schemas/User.js');

router.get('/', (req, res) => {
    User.findAll();
});

router.get('/:id', (req, res) => {
    User.findOneByid(req.params.id).then((result) => res.send(result));
});

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
    const { email, password } = req.body;

    User.findOneByEmailAndPassword(email, password)
        .then((user) => {
            user && res.status(200).send(user);

            res.status(401).send();
        })
        .catch((err) => res.status(500).send(err));
});

module.exports = router;
