var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var arr=['xz','wyb','bjyx'];

  // res.render('index', { title: 'Express' });
  res.render('index', { 
    title: 'Express' ,
    'name':arr
});
});

module.exports = router;
