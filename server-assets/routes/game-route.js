var router = require('express').Router()
var Game = require('./../models/game-model')
var Word = require('./../models/word-model')
// var Game = require('./../models/game-model')
var testWord = ''
var game = {}

exports.mountPath = '/game'
exports.router = router;

router.route('/')
 .get(getGame)

router.route('/')
  .post(createGame)

router.route('/')
  .put(updateGame)

router.route('/guess')
  .post(createGuess)


function getGame(req, res, next){
    Game.find({}).then(function(game) {
        res.send(game)
    })
}

function createGame(req, res, next){
    Word.find({}).then(function(arr) {
      testWord = getRandomWord(arr)
      let blankedWord = drawTemplate(testWord)
      let newGame = new GameConstructor(blankedWord)
      Game.create(newGame).then(function(savedGame) {
        game = savedGame
        res.send(savedGame)
      }).catch(function(err) {
        res.send(err)
      })
    })

    function getRandomWord(arr) {
      var testedWord = arr[Math.floor(Math.random() * arr.length)]
      return testedWord._doc.word
    }

    function drawTemplate(str) {
      var template = ''
      for (var i = 0; i <= str.length; i++) {
        template += '_ '
      }
      return template
    }

    function GameConstructor(word){
      this.word = word,
      this.incorrectGuesses = 0,
      this.guessedLetter = [],
      this.solved = false
    }
}


function updateGame(){
  var update = req.body

}

function createGuess(req, res, next){
      var newGuess = req.body;
//add letter to guessed letters
//update string if found
//or increment incorrect guesses

}
