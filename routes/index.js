var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/pants', function(req, res, next) {
  res.render('pants', { title: 'Express' });
});

router.get('/shirts', function(req, res, next) {
  res.render('shirts', { title: 'Express' });
});

router.get('/howitwork', function(req, res, next) {
  res.render('howitwork', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/forgetpsw', function(req, res, next) {
  res.render('forgetpsw', { title: 'Express' });
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Express' });
});

router.get('/shirtcustomizer', function(req, res, next) {
  res.render('shirtcustomizer', { title: 'Express' });
});

router.get('/pantcustomizer', function(req, res, next) {
  res.render('pantcustomizer', { title: 'Express' });
});
module.exports = router;
