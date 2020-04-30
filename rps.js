let playerSelection; 
let computerSelection; 
var choiceRock = document.getElementById("rock");
var choicePaper = document.getElementById('paper');
var choiceScissors = document.getElementById('scissors');
var reset = document.getElementById('reset');
var round = 0;
var  playerScore = 0;
var cpuScore = 0;
let result; 
let playerWin;
let cpuWin


reset.disabled = true; 


// Selects the scores ids on the HTML
var playerDisplay = document.querySelector('#playerDisplay');
var cpuDisplay = document.querySelector('#cpuDisplay');
var roundDisplay = document.querySelector('#roundDisplay');



// Variables for texts

const resultsBoard = document.querySelector('#results');


const roundWinner = document.createElement('p');
roundWinner.classList.add('roundWinner');
resultsBoard.appendChild(roundWinner);


const winnerText = document.createElement('p');
winnerText.classList.add('winnerText');
resultsBoard.appendChild(winnerText);





// Function makes the decision for the CPU 
function computerPlay() {
    
    const choicesAvailable =  ["rock", "paper", "scissors"];
    return choicesAvailable[Math.floor(Math.random() * 3)];
}

// Player choice declaration of variables 


choiceRock.addEventListener('click', () => { 
    let playerSelection = 'rock';
    playRound(playerSelection, computerSelection, result);
    playerDisplay.textContent = playerScore;
    cpuDisplay.textContent = cpuScore;
    roundDisplay.textContent = round;
    
});

choiceScissors.addEventListener('click', () => { 
    let playerSelection = 'scissors'; 
    playRound(playerSelection, computerSelection, result);  
    playerDisplay.textContent = playerScore;
    cpuDisplay.textContent = cpuScore; 
    roundDisplay.textContent = round;  
            
});

choicePaper.addEventListener('click', () => { 
    let playerSelection = 'paper';  
    playRound(playerSelection, computerSelection, result);  
    playerDisplay.textContent = playerScore;
    cpuDisplay.textContent = cpuScore;  
    roundDisplay.textContent = round;  
           
});



// Function determines the winner of the round

function playRound(playerSelection, computerSelection, result) {

   computerSelection = computerPlay();

            while (round <= 5) {
                 round++;
           
        if (playerSelection === 'rock' && computerSelection === 'paper'){
            cpuScore++;                     
            roundWinner.textContent = 'You lost! Paper beats Rock'
            break;
            
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore++
            
            roundWinner.textContent = 'You win! Rock beats Scissors'
            break;
        }        
        else if (playerSelection === 'paper' && computerSelection === 'scissors'){
           cpuScore++; 
           
           roundWinner.textContent = 'You lost! Scissors beats Paper'
           break;
              
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++
           
            roundWinner.textContent = 'You win! Paper beats Rock'
            break;           
                  
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            cpuScore++; 
            
            roundWinner.textContent = 'You lost! Rock beats Scissors'
            break;
                    
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore++
           
            roundWinner.textContent = 'You win! Scissors beats Paper'
            break;
                     
        }
        else if (playerSelection === computerSelection) {
            
            roundWinner.textContent = "Tie! You've both chosen the same"
            break;
          
        }     

    }

    winner();

}




    
function winner(){

    if (round === 5) {

        choiceRock.disabled = true;
        choicePaper.disabled = true;
        choiceScissors.disabled = true;
        reset.disabled = false;

        if (playerScore > cpuScore) {
            roundWinner.textContent = '';
            winnerText.textContent = "Congrats. You won the game!"
        }
        else if (playerScore === cpuScore) {
            roundWinner.textContent = '';
            winnerText.textContent = "It's a DRAW"
        }
        else {
            roundWinner.textContent = '';
            winnerText.textContent = "CPU wins the game!"  
        }

    }

}
     
// New Game button functionality 


reset.addEventListener('click', function() {

    resetGame();
    playerDisplay.textContent = playerScore;
    cpuDisplay.textContent = cpuScore; 
    roundDisplay.textContent = round;   
    
});

function resetGame(){

    playerScore = 0;
    cpuScore = 0;
    round = 0;
    choiceRock.disabled = false;
    choicePaper.disabled = false;
    choiceScissors.disabled = false;
    reset.disabled = true;
    winnerText.textContent = " ";
    roundWinner.textContent = '';
}








