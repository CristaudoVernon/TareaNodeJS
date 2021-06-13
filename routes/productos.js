var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productos', { title: 'Pagina Productos' });
});

module.exports = router;
