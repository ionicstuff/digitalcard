const express = require('express');
const router = express.Router();

//@desc Home page
//@route GET /
router.get('/', (req, res) => {
  res.render('home');
});

//@desc login/user
//@route GET /
router.get('/login', (req, res) => {
  res.render('login', {layout: 'login'});
});

//@desc login/franchise
//@route GET /
router.get('/franchise-login', (req, res) => {
  res.render('franchise-login', {layout: 'login'});
});

//@desc user/dashboard
//@route GET /
router.get('/dashboard/:id', (req, res) => {
  res.render('users/dashboard', {layout: 'main'});
});

module.exports = router;
