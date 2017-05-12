function GameController() {
    var gameService = new GameService()

    // Grabs the guess from the user
    this.userGuess = function(e) {
        e.preventDefault()
        var form = e.target

        //sends the guess to the game service
        gameService.userGuess(form.letter.value, draw)
        
        //user guess will be returning game obj for processing/drawing
    }

    //draws to the page
    function draw(arrLetters, word, incorrectGuesses){
    var elemLetters = document.getElementById("letters-guessed")
        
        templateLetters = "";
        for (var i = 0; i < arrLetters.length; i++){
            var letters = arrLetter[i];
            templateLetters += `
            <h6>${letters}</h6>`
        }
    } elemLetters.innerHTML = templateLetters;
}