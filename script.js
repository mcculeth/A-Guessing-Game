let DoTheThing = function() {


    /* Loops have three parts: CONTROL VARIABLE; CONTROL BOOLEAN EXPRESSIONS; CONTROL INCREMENT/DECREMENT/UPDATE

            CONTROL VARIABLE - controls when the loop executes

            CONTROL BOOLEAN EXPRESSION = boolean expression using the control variable which should at some point evaluate to false

            CONTROL UPDATE = assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false

         */

    let restart = "Yes";
    while (restart === "Yes") {

        //Computer picks a number
        let computerNumber = Math.floor((Math.random() * 10) + 1);
        //Alert to get player's guess

        let playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);
        while (playersGuess !== computerNumber)
            if (playersGuess > computerNumber) {
                playersGuess = parseInt(prompt("Too high, guess again."));
            } else {
                playersGuess = parseInt(prompt("Too low, guess again."));

            }

        alert("You Guessed It!");

        restart = prompt("Would you like to  play again? Type 'Yes' or 'No' (case sensitive)");
    }
};

    //count++ = +1
    //Alert to get player's guess
    //Compare guess to number
        //If higher - Alert too high and then get player's guess - repeat
        //If lower - Alert too low and then get player's guess - repeat
        //If equal - Alert You win then ask to restart
            //If yes - repeat from beginning
            //If no - set computer on fire and escape



let DoTheOtherThing = function () {

    //SAME PROGRAM WITH A DO-WHILE LOOP
    let restart;

    do{
        let computerNumber = Math.floor((Math.random()*10)+1);
        let playersGuess;

        do {
            playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);

            if (playersGuess > computerNumber){
                playersGuess = parseInt(prompt("Too high, guess again."));
            }else
                playersGuess = parseInt(prompt("Too low, guess again."));


        }while (playersGuess !== computerNumber) ;

        alert("YOU GUESSED IT!!!");
        restart = prompt("Would you like to  play again? Type 'Yes' or 'No' (case sensitive)");

    }while(restart === "Yes");
};