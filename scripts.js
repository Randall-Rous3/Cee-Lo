const dice = document.querySelectorAll('.die')
const board = document.getElementById('board')
const scoreboard = document.getElementById('scoreboard')
const playButton = document.getElementById('playButton')
const playButtonTwo = document.getElementById('playButton2')
const player1ScoreBoard = document.getElementById('player1Score')
const player2ScoreBoard = document.getElementById('player2Score')
let isGameOver = false 
const levelWinner = document.querySelector('.level-winner');
const levelWinner2 = document.querySelector('.level-winner-p2');
const levelWinnerTie = document.querySelector('.level-winner-tie');
const newRound = document.getElementById('newRound')
const rollBox = document.getElementById('player1Roll')
const rollBox2 = document.getElementById('player2Roll')
let isTie = false;
const tieButton = document.getElementById('tieBreaker')
const losenums = [1, 2, 3]
const winnums = [4, 5, 6]
class player{
    constructor(character){
        this.character = character;
        this.roll = 0
        this.isPlaying = true
        this.playerScore = 0.0
    }
}
const player1 = new player('p1')
const player2 = new player('p2') 
player2.isPlaying !=true

const resetDice = () => {
    player1.roll = 0;
    player2.roll = 0;
    playButton.disabled = false;
    playButtonTwo.disabled = false;
    newRound.disabled = false;
};

newRound.addEventListener ('click', () => {
    resetDice();
    levelWinner.style.opacity = 0;
    levelWinner2.style.opacity = 0;
    playButton.disabled == false;
    playButtonTwo.disabled == false;
    rollBox.innerText ='';
    rollBox2.innerText ='';
    isTie  =  false ;
});
tieButton.addEventListener('click', ()=> {
    resetDice()
    isTie = true;
    tieButton.style.opacity = 0;
    rollBox.innerText ='';
    rollBox2.innerText ='';
    levelWinnerTie.style.opacity = 0;

});

//player one turn 
const roll = playButton.addEventListener('click', () => {
    const die1 = dice[0].innerText = Math.ceil(Math.random() * 6);
    const die2 = dice[1].innerText = Math.ceil(Math.random() * 6);
    const die3 = dice[2].innerText = Math.ceil(Math.random() * 6);
    if (die1 === die2) {
        player1.roll = player1.roll + die3;
        rollBox.innerText = (`${die3}`);
        playButton.disabled = true; 
    } else if (die1 === die3) {
        player1.roll = player1.roll + die2;
        rollBox.innerText = (`${die2}`);
        playButton.disabled = true; 

    } else if (die2 === die3) {
        player1.roll = player1.roll + die1;
        rollBox.innerText = (`${die1}`);
        playButton.disabled = true; 
    } 
    });
    //player two turn
    playButtonTwo.addEventListener('click', () => {
        const die1 = dice[0].innerText = Math.ceil(Math.random() * 6);
        const die2 = dice[1].innerText = Math.ceil(Math.random() * 6); 
        const die3 = dice[2].innerText = Math.ceil(Math.random() * 6);
        
        if (die1 === die2) {
            player2.roll = player2.roll + die3;
            rollBox2.innerText = (`${die3}`);
            checkScore();
            playButtonTwo.disabled = true; 

        } else if (die1 === die3) {
            player2.roll =player2.roll +die2;
            rollBox2.innerText = (`${die2}`);
            checkScore();
            playButtonTwo.disabled = true; 

        } else if (die2 === die3) {
            player2.roll = player2.roll + die1;
            rollBox2.innerText = (`${die1}`);
            checkScore();
            playButtonTwo.disabled = true; 

        }
        });
   
// compare player score
const checkScore = () => {
    if ((player1.roll > player2.roll) && (isTie !== true)){
        player1.playerScore +=1
        player1ScoreBoard.innerText = "$" + player1.playerScore;
        levelWinner.style.opacity = .5;
        
    } else if ((player1.roll > player2.roll) && (isTie == true)){
        player1.playerScore +=2;
        player1ScoreBoard.innerText = "$" + player1.playerScore;
        levelWinner.style.opacity = .5;
        newRound.style.opacity = 1;
    
    } else if((player2.roll > player1.roll) && (isTie !== true)){
        player2.playerScore +=1;
        player2ScoreBoard.innerText = "$" + player2.playerScore;
        levelWinner2.style.opacity = .5;
    
    } else if ((player2.roll > player1.roll) && (isTie == true)){
        player2.playerScore +=2;
        player2ScoreBoard.innerText = "$" + player2.playerScore;
        levelWinner2.style.opacity = .5;
        newRound.style.opacity = 1;

    
    } else if (player1.roll === player2.roll){
        
        tieButton.style.opacity = 1;
        newRound.disabled = true;
        newRound.style.opacity = 0;
        levelWinnerTie.style.opacity =.5;
        
    
    }

};
