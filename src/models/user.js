const mongoose = require('mongoose');

const {Schema} = mongoose;

/**
 * creando esquema de usuarios
 */

 const SchemeUser = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}

 });

 module.exports = mongoose.model('user', SchemeUser);