var router = require('express').Router();
var Word = require('./../models/word-model')

exports.mountPath = '/words'
exports.router = router

router.route('/')
  .get(getWord)

router.route('/')
  .post(createWord)

function getWord(){

}

function createWord(req, res, next){
  var newWord = req.body
    Word.create(newWord)
      .then(function(newlyCreatedWord){
        res.send(newlyCreatedWord)
      }).catch(function(err){
        console.log('createWord' + err)
      })
}
