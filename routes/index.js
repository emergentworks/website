var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/program', function(req, res, next) {
  res.render('program', { title: 'our program' });
});

router.get('/support', function(req, res, next) {
    res.render('get-involved', { title: 'get involved - the code cooperative'});
});

router.get('/team', function(req, res, next) {
    res.render('team', { title: 'team - the code cooperative'});
});

module.exports = router;
