const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
require('./database');
// settings
app.set('port', process.env.PORT || 4001);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/article', require('./routes/articles.routes'));
app.use('/user', require('./routes/user.routes'))


// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting serve
app.listen(app.get('port'), () => {
  console.log(`serve on port ${app.get('port')}`);
});
