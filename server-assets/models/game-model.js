var mongoose = require('mongoose')
var Schema = mongoose.Schema


var GameSchema = new Schema({
  word: {type: String, required: true},
  incorrectGuesses: {type: Number, required: true},
  guessedLetter: {type: Array, required: true},
  solved: {type: Boolean, required: true}
})


var Game = mongoose.model('Game', GameSchema)
module.exports = Game;