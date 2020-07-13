const express = require('express');
const router = express.Router();

//@desc login/user
//@route GET /
router.get('/', (req, res) => {
  res.render('home');
});

//@desc login/user
//@route GET /
router.get('/login', (req, res) => {
  res.render('login');
});

//@desc login/franchise
//@route GET /
router.get('/franchise-login', (req, res) => {
  res.render('franchise-login');
});

module.exports = router;
