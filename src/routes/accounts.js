const express = require('express');
const router = express.Router();
const web3service = require('../services/web3.service.js');
const bodyParser = require('body-parser');
 
router.get('/', function(req, res) {
    // do something
   web3service.getAccounts().then(result => {
    res.send(result)
  })
  .catch(err => console.log(err))
});
 
module.exports = router;