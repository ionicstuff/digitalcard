const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load config
dotenv.config({ path: './config/config.env' });
connectDB();

//define app veriable
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server is running in ${process.env.NODE_ENV} and on ${PORT}`)
);
