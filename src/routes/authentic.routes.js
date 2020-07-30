const express = require('express');
const router = express.Router();
const config = require('../config/config')
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { json } = require('express');


router.get('/', (req, res) => {
});

router.post('/', async (req, res) => {
    const {name,email, password} = req.body;
    const email = await User.findOne({email : email});
    const password = await User.findOne({password: password});
    if (email) {
        if (req.body.email === email && req.body.password === password) {
            const payload = {
                check:  true
               };
               const token = jwt.sign(payload, app.get('llave'), {
                expiresIn: 1440
               });
               res.json({
                mensaje: 'Autenticación correcta',
                token: token });
            
        } else {
            return res.json({status: 'constrasea incorrecta'})
        }
    } else {
        return res.json({status : 'el usuario no existe'});
        
    }


})

module.exports = router;

