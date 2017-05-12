var router = require('express').Router()
var Game = require('./../models/game-model')
// var Game = require('./../models/game-model')

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


  function getGame(){

  }

  function createGame(){

  }

  function updateGame(){

  }

  function createGuess(){

  }
