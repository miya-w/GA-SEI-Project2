const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/characters/new', charactersCtrl.new);
// POST /performers (create functionality)
router.post('/characters',ensureLoggedIn, charactersCtrl.create);

//GET
router.get('/characters/:id', charactersCtrl.show);
// POST /movies/:id/performers
router.post('/animes/:id/characters',ensureLoggedIn, charactersCtrl.addToCast); 


module.exports = router;