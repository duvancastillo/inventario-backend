const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * creando esquema de los articulos
*/
const ArticleSchema = new Schema({
  reference: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model('article', ArticleSchema);
