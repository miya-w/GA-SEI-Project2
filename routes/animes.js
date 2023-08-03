var express = require('express');
var router = express.Router();
const animesCtrl = require('../controllers/animes');
const ensureLoggedIn = require('../config/ensureLoggedIn');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// GET /movies/new
router.get('/new',ensureLoggedIn, animesCtrl.new);
// POST /movies
router.post('/',ensureLoggedIn, animesCtrl.create);

// GET /anime
router.get('/', animesCtrl.index);
 // GET /anime/:id (show functionality) MUST be below new route
router.get('/:id', animesCtrl.show);
//DELETE/animes/:id
router.get('/delete/:id', ensureLoggedIn, animesCtrl.delete);
//Edit
router.get('/update/:id', animesCtrl.showUpdate);
router.post('/update/:id', animesCtrl.update);



module.exports = router;
