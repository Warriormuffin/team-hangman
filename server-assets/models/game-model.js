var mongoose = require('mongoose')
var Schema = mongoose.Schema


var GameSchema = new Schema({
  word: {type: Array, required: true},
  incorrectGuesses: {type: Number, required: true},
  guessedLetter: {type: Array},
  solved: {type: Boolean, required: true, default: false},
  user: {type: String}
})


var Game = mongoose.model('Game', GameSchema)
module.exports = Game;