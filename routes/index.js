var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/data-helpers')
var collection = require('../config/collections')

/* GET home page. We also give a message if user session exisit*/
router.get('/', async (req, res, next) => {

      res.render('home/add-page', { });
    
  })

module.exports = router;
