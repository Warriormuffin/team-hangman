var router = require('express').Router()
var Game = require('./../models/game-model')
var ScoreBoard = require('./../models/scoreboard-model')

exports.mountPath = '/scoreboard'
exports.router = router

router.route('/')
  .get(getScoreBoard)

router.route('/')
  .post(createScoreBoard)

function getScoreBoard(req, res, next){
  ScoreBoard.get({}).then(function(scoreBoard){
    res.send(scoreBoard)
  })
}

function createScoreBoard(req, res, next){

}
