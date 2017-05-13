var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ScoreBoardSchema = new Schema({
  user: {type: String, required: true},
  score: {type: Number, required: true}
})

var ScoreBoard = mongoose.model('ScoreBoard', ScoreBoardSchema)
module.exports = ScoreBoard