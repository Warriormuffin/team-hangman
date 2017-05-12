var router = require('express').Router();
var Word = require('./../models/word-model')

exports.mountPath = '/words'
exports.router = router

router.route('/')
  .get(getWord)

function getWord(){

}
