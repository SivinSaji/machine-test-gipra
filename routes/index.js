var express = require('express');
var router = express.Router();
const dataHelpers = require('../helpers/data-helpers')
var collection = require('../config/collections')
const url = require('url');

/* GET home page. Home page consist a input field to insert a value to the list*/
router.get('/', async (req, res, next) => {
  let status = null
  status = req.query.status;
  res.render('home/add-page', { status });
})
/*Add Item to list. Here we add item to list while we submit the form*/
router.post('/add-item', async (req, res, next) => {
  dataHelpers.additem(req.body).then(() => {
    res.redirect(url.format({
      pathname: "/",
      query: {
        "status": "success",
      }
    }));
  })

})
/*Here we render the page list-page.hbs and dislay the item in the list*/
router.get('/list-page', async (req, res, next) => {
  let listItem = await dataHelpers.getItemList()
  let slno = 1
  listItem.forEach(items => {
    items.slno = slno
    slno++
  })
  slno = null
  console.log(listItem);
  res.render('home/list-page', { listItem });

})
module.exports = router;
