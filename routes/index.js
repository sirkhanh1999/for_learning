

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'TOMMY HILFIGER - HOMEPAGE', 
    prd_name : 'WASHED INDIGO SLIM FIT JEAN',
    price : "91$",
    prd_color : "dark blue",
    prd_id : "sj01"
  });
});

router.get('/prd2', function(req, res, next) {
  res.render('prd2', { 
    title: 'PRODUCT 2 : Navy long shir - TOMMY HILFIGER', 
    prd_name : 'Navy long shirt',
    price : "104$",
    prd_color : "light pink",
    prd_id : "sj02"
  });
});

router.get('/prd3', function(req, res, next) {
  res.render('prd3', { 
    title: 'PRODUCT 3 : Travel bag US - TOMMY HILFIGER', 
    prd_name : 'Travel bag US',
    price : "58$",
    prd_color : "Jet black",
    prd_id : "tb01"
  });
});

router.get('/prd4', function(req, res, next) {
  res.render('prd4', { 
    title: 'PRODUCT 4 : Red jacket - TOMMY HILFIGER', 
    prd_name : 'Red jacket',
    price : "82$",
    prd_color : "Origin blue",
    prd_id : "rj02"
  });
});



module.exports = router;
