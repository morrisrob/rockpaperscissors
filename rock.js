let computerScore = 0;
let playerScore = 0;
let round = 1;
let computerSelection;

    function computerPlay() {
        randomNumber = Math.floor((Math.random() * 3) + 1);
        switch(randomNumber) {
            case 1:
                return "rock";
            case 2: 
                return "paper";
            case 3:
                return "scissors"
        }
    }

    function keepScore() {
        document.getElementById("demo4").innerHTML = "Round " + round + " score is computer " + computerScore + " player " + playerScore;
        ++round;

        if (round == 6) {
            document.getElementById("btnRock").disabled = true;
            document.getElementById("btnPaper").disabled = true;
            document.getElementById("btnScissors").disabled = true;
            addResetButton();

            if (computerScore == playerScore) {
                document.getElementById("demo5").innerHTML = "The match is a tie!";
            }
            else if (computerScore > playerScore) {
                document.getElementById("demo5").innerHTML = "The computer won the match!";
            }
            else if (computerScore < playerScore) {
                document.getElementById("demo5").innerHTML = "You won the match!";
            }
        }
        
    }

    function addResetButton() {
        var btnReset = document.createElement("BUTTON"); 
        btnReset.id = "btnReset";
        btnReset.innerHTML = "Reset game";
        document.getElementById("demo6").appendChild(btnReset);
        document.getElementById('btnReset').addEventListener("click", function() {
            resetMatch()
        });
    }

    function resetMatch(){
        computerScore = 0;
        playerScore = 0;
        round = 1;
        document.getElementById("btnRock").disabled = false;
        document.getElementById("btnPaper").disabled = false;
        document.getElementById("btnScissors").disabled = false;
        document.getElementById("demo6").removeChild(btnReset);
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        document.getElementById("demo5").innerHTML = "";

    }

    function playRound(playerSelection) {
        computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);

        if (playerSelection == computerSelection) {
            document.getElementById("demo3").innerHTML = "Computer chose " + computerSelection + "." + " It's a tie";
            keepScore();
        }
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++;
            document.getElementById("demo3").innerHTML = "Computer chose paper. You lose!";
            keepScore();
        }
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++;
            document.getElementById("demo3").innerHTML = "Computer chose scissors. You win!";
            keepScore();
        }
        if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore++;
            document.getElementById("demo3").innerHTML = "Computer chose paper. You win!";
            keepScore();
        }
        if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++;
            document.getElementById("demo3").innerHTML = "Computer chose rock. You lose!";
            keepScore();
        }
        if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++;
            document.getElementById("demo3").innerHTML = "Computer chose scissors. You lose!";
            keepScore();
        }
        if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore++;
            document.getElementById("demo3").innerHTML = "Computer chose rock. You win!";
            keepScore();
        }
    } 

    document.getElementById('btnRock').addEventListener("click", function() {
        playRound("rock")
    })
    document.getElementById("btnRock").addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "You chose rock";
    });
    
    document.getElementById('btnPaper').addEventListener("click", function() {
        playRound("paper")
    })
    document.getElementById("btnPaper").addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "You chose paper";
    });
    
    document.getElementById('btnScissors').addEventListener("click", function() {
        playRound("scissors")
    })
    document.getElementById("btnScissors").addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "You chose scissors";
    });