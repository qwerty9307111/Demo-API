var express = require('express');
var router = express.Router();

router.post('*', function ( req, res, next ) {
  const parseUrl = req.url.split('/');
  if(parseUrl.length !== 3)  return res.json({status: -1, data: { message: "The interface module is invalid" } });
  let params = {
    module: parseUrl[1],
    action: parseUrl[2]
  };
  return params
})

module.exports = router;
