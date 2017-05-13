function GameService() {
    var url = 'http://localhost:3000/game';

    //this object will store what the object is that we get from the server
    var gameObj = {};

    this.userGuess = function (guess, cb) {
        for (var i = 0; i < gameObj.guessedLetter.length; i++) {
            if (guess == gameObj.guessedLetter[i]) {
                console.log("Already Guessed") //eventually change to updated DOM
                return
            }
        }
        var objGuess = {'guess': guess}
            $.post(url + '/guess', objGuess).then(function (data) {
                gameObj = data;
                cb(gameObj.guessedLetter, gameObj.word, gameObj.incorrectGuesses)
            })
    }

    //still need newGame and getGame

    this.newGame= function(cb){
        $.post(url).then(function(data){
            gameObj = data
         cb(gameObj.guessedLetter, gameObj.word, gameObj.incorrectGuesses)

        })
    }



    //this was a tester funtion (ignore)
    this.tempDrawResponse = function(guess, cb){
        for (var i = 0; i < tempGameObj.guessedLetter.length; i++) {
            if (guess == tempGameObj.guessedLetter[i]) {
                console.log("Already Guessed") //eventually change to updated DOM
                return
            }
        cb(tempGameObj.guessedLetter, tempGameObj.word, tempGameObj.incorrectGuesses)
    }



    }
}