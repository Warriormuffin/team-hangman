function GameService() {
    var url = 'http://localhost:3000/game';

    //this object will store what the object is that we get from the server
    var gameObj = {}

    //this was a tester object (ignore)
    var tempGameObj = {
        word: '_ _ _',
        incorrectGuesses: 0,
        guessedLetter: [],
        solved: false
    };

    this.userGuess = function (guess, cb) {
        for (var i = 0; i < tempGameObj.guessedLetter.length; i++) {
            if (guess == tempGameObj.guessedLetter[i]) {
                console.log("Already Guessed") //eventually change to updated DOM
                return
            }
            $.post(url + '/guess', guess).then(function (data) {
                gameObj = data; 
                cb(gameObj.guessedLetter, gameObj.word, gameObj.incorrectGuesses)
            })
        }
    }

    //still need newGame and getGame





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