const Character = require('../models/character');
const Anime = require('../models/anime');

module.exports = {
  new: newCharacter,
  create,
  show,
  addToCast
}

async function addToCast(req, res) { 
  const anime = await Anime.findById(req.params.id); 
  // The cast array holds the performer's ObjectId (referencing) 
  anime.cast.push(req.body.characterId); 
  await anime.save(); 
  res.redirect(`/animes/${anime._id}`); } 

async function show(req, res){
  const character = await Character.findById(req.params.id)

  res.render('characters/show', { title: 'Character Detail', character });
}


async function newCharacter(req, res) {
  //Sort performers by their name
  const characters = await Character.find({}).sort('name');
  res.render('characters/new', { title: 'Add character', characters });
}

async function create(req, res) {
 
  try {
    const character = await Character.create(req.body);
    res.redirect(`/characters/${character._id}`);
  } catch (err) {
    console.log(err);
  }
 
}