const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');

//load config
dotenv.config({ path: './config/config.env' });
connectDB();

//define app veriable
const app = express();

//logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server is running in ${process.env.NODE_ENV} and on ${PORT}`)
);
