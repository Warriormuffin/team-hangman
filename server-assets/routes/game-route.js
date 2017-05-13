var router = require('express').Router()
var Game = require('./../models/game-model')
var Word = require('./../models/word-model')
// var Game = require('./../models/game-model')
var currentWord = ''
var game = {}
var currentGuessedLetter = ''


exports.mountPath = '/game'
exports.router = router;

router.route('/')
 .get(getGame)

router.route('/')
  .post(createGame)

router.route('/')
  .put(updateWord)

router.route('/guess')
  .post(guess)


function getGame(req, res, next){
    Game.find({}).then(function(game) {
        res.send(game)
    })
}

function createGame(req, res, next){
    Word.find({}).then(function(arr) {
      currentWord = getRandomWord(arr)
      let blankedWord = drawTemplate(currentWord)
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
      var template = []
      for (var i = 0; i < str.length; i++) {
        template.push('_')
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


function updateWord(letter){
for(var i = 0; i < currentWord.length; i++) {
  if(currentWord[i] == letter){
    game.word[i] = letter
  }
}
  
    
  //if found replace space with found letter
//add letter to guessed letters
}

function guess(req, res, next){
      var newGuess = req.body
      //game.guesdletter.push()
//if werd.inc(newGuess){

    if(!currentWord.includes(newGuess.guess)) {
      game._doc.incorrectGuesses++
      updateWord(newGuess.guess)
        game.save().then(function(gameObj){
          game = gameObj
          res.send(game)
        }).catch(function(err) {
          console.log(err)
        })
    } else {
        updateWord(newGuess.guess)
        game.save().then(function(gameObj){
          game = gameObj
          res.send(game)
        }).catch(function(err) {
          console.log(err)
        })
    }


//update string if found or increment incorrect guesses
}
