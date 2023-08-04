const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 10
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const animeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    releaseYear: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      },
      min: 1980
    },
    status: {
      type: String,
      enum: ['Watching', 'Watched', 'Not Start', 'Skip it']
    },
    nowWatching: { type: Boolean, default: true },
     // reviews is an array of review subdocs!
  reviews: [reviewSchema],
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  }, {
    timestamps: true
  });
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('Anime', animeSchema);