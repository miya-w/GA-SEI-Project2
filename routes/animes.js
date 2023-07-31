var express = require('express');
var router = express.Router();
const animesCtrl = require('../controllers/animes');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// GET /movies/new
router.get('/new', animesCtrl.new);
// POST /movies
router.post('/', animesCtrl.create);

// GET /movies
router.get('/', animesCtrl.index);
// // GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', animesCtrl.show);


module.exports = router;
