var mongoose = require('mongoose')
var Schema = mongoose.Schema


var WordSchema = new Schema({
  word: {type: String, required: true},
})

var Word = mongoose.model('Word', WordSchema)
module.exports = Word