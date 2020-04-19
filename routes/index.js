

var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {prd_id:req.params.prd_id,});
});





/* GET database page................................ */

router.get('/database', function(req, res) {
  var sql = require("mssql");

  // config for your database
  var config = {
      user: 'khanhdb',
      password: '123',
      server: 'localhost', 
      database: 'TRADING' 
  };

  // connect to your database
  sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      var request = new sql.Request();
      // query to the database and get the records
      request.query(
        'select ProductName from Products where ProductID = 1; Select * from Orders', 
        function (err, recordset) {
          if (err) console.log(err)
          // send records as a response
          res.send(recordset);
          
      });
  });
});







/* GET Products page by IDs. */
router.get('/*.:prd_id', function(req, res, next) {

  var id = req.params.prd_id;
  if(!req.session.Viewed){
    req.session.Viewed = [];
  }

  if(req.session.Viewed.indexOf(id) == -1){
    req.session.Viewed.push(id)               // check if havent one id yet, push it to the array ( prevent to duplication )
  };

  res.render('prd', { 
    prd_id:req.params.prd_id,
    List:req.session.Viewed
  });
});



module.exports = router;

