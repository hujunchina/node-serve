var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  console.log(res)
  console.log(next)
});

module.exports = router;