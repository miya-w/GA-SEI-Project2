const Anime = require('../models/anime');

module.exports = {
  create
};

async function create(req, res) {
    const anime = await Anime.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    anime.reviews.push(req.body);
    try {
      // Save any changes made to the movie doc
      await anime.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/animes/${anime._id}`);
  }