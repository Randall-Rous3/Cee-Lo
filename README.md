# Cee-Lo
Dice Game
## ***The Game***
 ![](https://lh3.googleusercontent.com/proxy/McB7Tfo7uWac9cgyvBUKNiozhGz3M2w17B4qZWIFiJIQ9hyPMNGxG0RjOFmLluzXVRF4rNo0tsH87haspiWNGWE1WHpUJRUxfUUE10ZQBCDBwLjbFTsKnuamWN5GRhNYGg)
### Cee-Lo is a back alley dice game best played while enjoying a lil' malt liqour. 
* For simplicity 2 players roll 3 dice.
* The first player rolls all three dice until one of the following conditions are met:
    1. 2 dice land on the same number. In which case the value of the 3rd dice is the players score. if all 3 dice land on the same number that is the players score.
    2. A player roles 1,2,3 this is an automatic loss.
    3. A player rolls 4,5,6 this is an automatic win. 
* The player who has the highest score wims.
* In the event of a "push" (tie) the players will double their bet for each "push" in the currect round until there is a clear winner. 

# ***Getting Started***
To get started we'll need to fork and clone the repo to your local device.
1. Add in 2 html files/ a javascript file/ and a css file.
2. In the first html file we will make the intro page to the game.
3. in the second html file we will define the different game elements.
4. In our javaScript file we will define the variables and write the game logic.

## javaScript 
* Once we have defined our variables in javaScript we can begin to write the game logic.
* To begin writing the game logic we can write a start game code which will set all of the condiions of the game back to scratch.
* once we have defined all of the startGame conditions we can move on to set our gamePlay conditions.
* Starting with player one the first step should be to place a bet either 1$ or 5$. The second player will automatically match whatever the bet is.
* add an eventlistener to a "roll" button to run a code that will randomly generate a number between 1-6 for each of the three dice. write code that identifies when 2>= of the dice are equal and signal that the remaining dice is the players score and that the turn is over. swapPlayer()
* set 1,2,3 and 4,5,6 to automantic loose and win respectively 
* write the conditions that in the event of a tie the bet will double and the players will keep rolling until a winner is determined. 
* ![](https://c.tenor.com/beTSEyCoetcAAAAM/money-money-money-make-it-rain.gif)

## CSS
* style intro page
* style the board and dice 
* import fonts
* add any animations or hover elements to taste

## Landing page HTML elements:
* Welcome Message
* dice button that anchors to the rules HTML page.

## Rules HTML elements:
* Outline rules of the game
* Dice button that clicks to the gam

## Game HTML elements:
* Gameboard
* Dice
* Scoreboard
* Roll Button
* New round button 
* Tie-breaker button
* Rules button

## save your work
* git add/commit/push your work regularly 
* deploy finished project on surge
