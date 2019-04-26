var express = require('express');
var router = express.Router();

// if ?delay=secs is specified then delay processing
router.use((req,res,next)=>{
  if (req.query.delay){
    setTimeout(next,req.query.delay*1000)
  }
  else {
    next();
  }
} )
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
