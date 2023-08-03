const Anime = require('../models/anime');
const Character = require('../models/character');


module.exports = {
  
    new:newAnime,
    create,
    index,
    show,
    delete: deleteOne,
    update: updateOne,
    showUpdate
  };


  async function showUpdate(req, res) {

    const anime = await Anime.findById(req.params.id);
   
    //console.log(characters)
    res.render('animes/edit', { title: 'Animes Detail',anime });
   }

  async function updateOne(req, res) {
      try {
          // Retrieve the updated data from the request body
          const { title, releaseYear, status } = req.body;
          
          // Construct the update object with the fields to be updated
          const updateData = {
              title: title,
              releaseYear: releaseYear,
              status: status
          };
          
          // Find the anime by ID and update it with the new data
          const updatedAnime = await Anime.findByIdAndUpdate(req.params.id, updateData, { new: true });
    
          if (!updatedAnime) {
              return res.status(404).send('Anime not found');
          }
    
          res.redirect('/animes'); // Redirect after the update
      } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
      }
  }


  async function deleteOne(req, res) {
    try {
      const animes = await Anime.findByIdAndDelete(req.params.id)  
      res.redirect('/animes');
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('Animes', { errorMsg: err.message });
    }
  }



  async function index(req, res) {
    const animes = await Anime.find({});
    res.render('animes/index', { title: 'All Animes', animes });
  }

  async function show(req, res) {
    const anime = await Anime.findById(req.params.id).populate('cast');
    const characters = await Character.find({ _id: { $nin: anime.cast } }).sort('name');
    //console.log(characters)
    res.render('animes/show', { title: 'Animes Detail', anime, characters });
  }

  function newAnime(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('animes/new', { title: 'Add Animes', errorMsg: '' });
  }


  async function create(req, res) {

    try {
   
      const anime = await Anime.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the anime index after we implement it
      res.redirect(`/animes/${anime._id}`);  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('Animes', { errorMsg: err.message });
    }
   }