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
const levelWinnerLose = document.querySelector('.level-winner-lose')
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

const newAppear = () => {
    newRound.style.opacity = 1;
    
}
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
    levelWinnerLose.style.opacity =0;
    playButton.disabled == false;
    playButtonTwo.disabled == false;
    rollBox.innerText ='p1';
    rollBox2.innerText ='p2';
    isTie  =  false ;
    newRound.style.opacity = 0;
    playButtonTwo.disabled = true;
    levelWinner.innerText = " Player 1 Winner!"
    levelWinner2.innerText = "Player 2 Winner!"
});
tieButton.addEventListener('click', ()=> {
    resetDice()
    isTie = true;
    tieButton.style.opacity = 0;
    rollBox.innerText ='';
    rollBox2.innerText ='';
    levelWinnerTie.style.opacity = 0;

});
const autowin = () => {
    if (isTie !== true){
    player1.playerScore +=1
    levelWinner.innerText = '4,5,6 Automatic Win!'
    player1ScoreBoard.innerText = "$" + player1.playerScore;
    levelWinner.style.opacity = .5;
    newAppear()

    } else if (isTie == true){
    player1.playerScore +=2;
    levelWinner.innerText = '4,5,6 Automatic Win!'
    player1ScoreBoard.innerText = "$" + player1.playerScore;
    levelWinner.style.opacity = .5;
    newRound.style.opacity = 1;
    newAppear()

}
playButton.disabled = true;
playButtonTwo.disabled = true;
};
const autowin2 = () => {
    if(isTie !== true){
        player2.playerScore +=1;
        levelWinner2.innerText = '4,5,6 Automatic Win!'
        player2ScoreBoard.innerText = "$" + player2.playerScore;
        levelWinner2.style.opacity = .5;
        newAppear()

    }else if(isTie == true){
        player2.playerScore +=2;
        levelWinner2.innerText = '4,5,6 Automatic Win!'
        player2ScoreBoard.innerText = "$" + player2.playerScore;
        levelWinner2.style.opacity = .5;
        newRound.style.opacity = 1;
        newAppear()

}
playButtonTwo.disabled = true;
};
const autoloss = () => {
    if (isTie !== true){
    player1.playerScore +=1 
    player1ScoreBoard.innerText = "$" + player1.playerScore;
    levelWinnerLose.style.opacity =.5;
    newAppear()

    } else if (isTie == true){
    player1.playerScore +=2;
    player1ScoreBoard.innerText = "$" + player1.playerScore;
    levelWinnerLose.style.opacity =.5;
    newRound.style.opacity = 1;
    newAppear()

}
playButton.disabled = true;
playButtonTwo.disabled = true;
};
const autoloss2 = () => {
    if (isTie !== true){
    player2.playerScore +=1
    player1ScoreBoard.innerText = "$" + player1.playerScore;
    levelWinnerLose.style.opacity =.5;
    newAppear()

    } else if (isTie == true){
    player2.playerScore +=2;
    player1ScoreBoard.innerText = "$" + player1.playerScore;
    levelWinnerLose.style.opacity =.5;
    newRound.style.opacity = 1;
    newAppear()

}
playButton.disabled = true;
playButtonTwo.disabled = true;
};


//player one turn 
const roll = playButton.addEventListener('click', () => {
    const die1 = dice[0].innerText = Math.ceil(Math.random() * 6);
    const die2 = dice[1].innerText = Math.ceil(Math.random() * 6);
    const die3 = dice[2].innerText = Math.ceil(Math.random() * 6);
    
    if (die1 === die2) {
        player1.roll = player1.roll + die3;
        rollBox.innerText = (`${die3}`);
        playButton.disabled = true; 
        playButtonTwo.disabled = false;
    } else if (die1 === die3) {
        player1.roll = player1.roll + die2;
        rollBox.innerText = (`${die2}`);
        playButton.disabled = true; 
        playButtonTwo.disabled = false;

    } else if (die2 === die3) {
        player1.roll = player1.roll + die1;
        rollBox.innerText = (`${die1}`);
        playButton.disabled = true; 
        playButtonTwo.disabled = false;

    } else if ((die1 == 1) && (die2 == 2) && (die3 ==3)) {
        autoloss2()
    
    }else if ((die1 == 1) && (die2 == 3) && (die3 == 2)) {
        autoloss2()

    }else if ((die1 == 2) && (die2 == 1) && (die3 == 3)) {
        autoloss2()

    }else if ((die1 == 2) && (die2 == 3) && (die3 == 1)) {
        autoloss2()

    }else if ((die1 == 3) && (die2 == 2) && (die3 == 1)) {
        autoloss2()

    }else if ((die1 == 3) && (die2 == 1) && (die3 == 2)) {
        autoloss2()

    }else if ((die1 == 4) && (die2 == 5) && (die3 == 6)) {
        autowin()       
       
    }else if ((die1 == 4) && (die2 == 6) && (die3 == 5)) {
        autowin()       
    
    }else if ((die1 == 5) && (die2 == 4) && (die3 == 6)) {
        autowin()       
        
    }else if ((die1 == 5) && (die2 == 6) && (die3 == 4)) {
        autowin()       
       
    }else if ((die1 == 6) && (die2 == 4) && (die3 == 5)) {
        autowin()       
        
    }else if ((die1 == 6) && (die2 == 5) && (die3 == 4)) {
        autowin()       
        
    };
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
        
        } else if ((die1 == 1) && (die2 == 2) && (die3 == 3)) {
                autoloss()
                
        }else if ((die1 == 1) && (die2 == 3) && (die3 == 2)) {
                autoloss()
                
        }else if ((die1 == 2) && (die2 == 1) && (die3 == 3)) {
                autoloss()
        
        }else if ((die1 == 2) && (die2 == 3) && (die3 == 1)) {
                autoloss()
        }else if ((die1 == 3) && (die2 == 2) && (die3 == 1)) {
                autoloss()
        
        }else if ((die1 == 3) && (die2 == 1) && (die3 == 2)) {
                autoloss()
        
        }else if ((die1 == 4) && (die2 == 5) && (die3 == 6)) {
                autowin2()       
               
        }else if ((die1 == 4) && (die2 == 6) && (die3 == 5)) {
                autowin2()       
        
            }else if ((die1 == 5) && (die2 == 4) && (die3 == 6)) {
                autowin2()       
                
        }else if ((die1 == 5) && (die2 == 6) && (die3 == 4)) {
                autowin2()       
               
        }else if ((die1 == 6) && (die2 == 4) && (die3 == 5)) {
                autowin2()       
                
        }else if ((die1 == 6) && (die2 == 5) && (die3 == 4)) {
                autowin2()       
                
            };
});

    
   
// compare player score
const checkScore = () => {
    if ((player1.roll > player2.roll) && (isTie !== true)){
        player1.playerScore +=1
        player1ScoreBoard.innerText = "$" + player1.playerScore;
        levelWinner.style.opacity = .5;
        newAppear()

        
    } else if ((player1.roll > player2.roll) && (isTie == true)){
        player1.playerScore +=2;
        player1ScoreBoard.innerText = "$" + player1.playerScore;
        levelWinner.style.opacity = .5;
        newAppear()

        
    } else if((player2.roll > player1.roll) && (isTie !== true)){
        player2.playerScore +=1;
        player2ScoreBoard.innerText = "$" + player2.playerScore;
        levelWinner2.style.opacity = .5;
        newAppear()

    
    } else if ((player2.roll > player1.roll) && (isTie == true)){
        player2.playerScore +=2;
        player2ScoreBoard.innerText = "$" + player2.playerScore;
        levelWinner2.style.opacity = .5;
        newRound.style.opacity = 1;
        newAppear()


    
    } else if (player1.roll === player2.roll){
        
        tieButton.style.opacity = 1;
        newRound.disabled = true;
        newRound.style.opacity = 0;
        levelWinnerTie.style.opacity =.5;

        
    
    }

};


