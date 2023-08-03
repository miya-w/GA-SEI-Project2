const Anime = require('../models/anime');

module.exports = {
  create,
  delete: deleteReview,
};


async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const anime = await Anime.findOne({ 
    'reviews._id': req.params.id, 
    'reviews.user': req.user._id 
  });
  // Rogue user!
  if (!anime) return res.redirect('/animes');
  // Remove the review using the remove method available on Mongoose arrays
  anime.reviews.remove(req.params.id);
  // Save the updated movie doc
  await anime.save();
  // Redirect back to the movie's show view
  res.redirect(`/animes/${anime._id}`);
}

async function create(req, res) {
    const anime = await Anime.findById(req.params.id);
     // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

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