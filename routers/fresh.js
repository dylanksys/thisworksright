var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/cool', function(req, res) {
  res.send('Path: /cool');
};

router.get('/home', function(req, res) {
  res.send('Path: /home');
};

module.exports = router;
