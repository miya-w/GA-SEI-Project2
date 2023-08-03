const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /animes/:id/reviews
router.post('/animes/:id/reviews',ensureLoggedIn, reviewsCtrl.create)

// DELETE /reviews
router.delete('/reviews/:id',ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;