const express = require('express');
const router = express.Router();
const config = require('../config/config')
const jwt = require('jsonwebtoken');
const User = require('../models/user');

app = express();

app.set('llave', config.llave);

router.get('/', (req, res) => {
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
        if (user.email === email && user.password === password) {
            const payload = {
                check: true
            };
            const token = jwt.sign(payload, app.get('llave'), {
                expiresIn: 1440
            });
            res.json({
                status: 'Autenticación correcta',
                token: token
            });

        } else {
            return res.status(404).json({ status: 'constrasea incorrecta' })
        }
    } else {
        return res.status(404).json({ status: 'el usuario no existe' });

    }


})

module.exports = router;

