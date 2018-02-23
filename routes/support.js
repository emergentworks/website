var express = require('express');
var router = express.Router();

/* GET get involved page. */
router.get('/support', function(req, res, next) {
    res.render('get-involved', { title: 'get involved - the code cooperative'});
});

module.exports = router;
