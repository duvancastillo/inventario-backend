const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    const user = await User.find();
    return res.json(user);

});

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            return res.json({status : 'el correo ya existe' })

        } else {
            const user = new User({ name, email, password });
            const newUser = await user.save()
            return res.json({ status: 'user registre' })

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'ha ocurrido un error user' });

    }


});

module.exports = router;