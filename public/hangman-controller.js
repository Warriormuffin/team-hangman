function GameController() {
    var gameService = new GameService()

    var statArr = ['rope', 'head', 'torso', 'waist', 'body', 'fullbody', 'redeyes']


    // Grabs the guess from the user
    this.userGuess = function (e) {
        e.preventDefault()

        var form = e.target

        //sends the guess to the game service
        gameService.userGuess(form.letter.value, draw)

        //user guess will be returning game obj for processing/drawing
    }

    this.newGame = function () {
        gameService.newGame(draw)
    }



    //draws to the page
    function draw(arrLetters, wordArr, incorrectGuesses) {
        debugger
        let word = wordArr.join(' ')
        document.getElementById('picture').className = statArr[incorrectGuesses]
        var elemLetters = document.getElementById("letters-guessed")

        templateLetters = `<h1>${word}</h1>`;
        for (var i = 0; i < arrLetters.length; i++) {
            var letter = arrLetters[i];
            templateLetters += `
            <h6>${letter}</h6>`

        }
        elemLetters.innerHTML = templateLetters;
    }
}