

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {prd_id:req.params.prd_id,});
});

/* GET Products page by IDs. */
router.get('/:prd_id', function(req, res) {
  res.render('prd', { prd_id:req.params.prd_id});
});



module.exports = router;
