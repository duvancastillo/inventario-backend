const mongoose = require('mongoose');
/**
 *{URI} almacena la direcion en donde encuantra alojada al base de datos
 */
const URI = 'mongodb://localhost/article';

/**
 * {mongose} realiza la conexion con la base de datos
 */

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })

  .then(db => console.log('DB is conection'))
  .catch(err => console.error(err));

module.exports = mongoose;
