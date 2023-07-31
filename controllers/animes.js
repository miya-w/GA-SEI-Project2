const Anime = require('../models/anime');


module.exports = {
  
    new:newAnime,
    create,
    index,
    show,
  };


  async function index(req, res) {
    const animes = await Anime.find({});
    res.render('animes/index', { title: 'All Animes', animes });
  }
  async function show(req, res) {
    const anime = await Anime.findById(req.params.id);
    res.render('animes/show', { title: 'Animes Detail', anime });
  }
  function newAnime(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('animes/new', { title: 'Add Animes', errorMsg: '' });
  }


  async function create(req, res) {
//     // convert nowShowing's checkbox of nothing or "on" to boolean
//     req.body.nowShowing = !!req.body.nowShowing;
//     // remove any whitespace at start and end of cast
//     req.body.cast = req.body.cast.trim();
//     // split cast into an array if it's not an empty string - using a regular expression as a separator
//     if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
//     // Remove empty properties so that defaults will be applied
//     for (let key in req.body) {
//       if (req.body[key] === '') delete req.body[key];
//     }
    try {
      await Anime.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/animes');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('Animes', { errorMsg: err.message });
    }
   }