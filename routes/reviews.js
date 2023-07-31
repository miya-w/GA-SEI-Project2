const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/reviews');
// POST /movies/:id/reviews
router.post('/animes/:id/reviews',reviewsCtrl.create)

module.exports = router;