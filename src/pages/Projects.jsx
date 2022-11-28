import Tictactoe from '../assets/tic-tac-toe.png'
import War from '../assets/war-card-game.png'
import CoolerCarsAndMotorcycles from '../assets/cooler-cars-and-motorcycles.png'


const Projects = (props) =>[
  {
    title:"Tic Tac Toe ",
    description:"This Tic Tac Toe app is an original take on the OG Tic Tac Toe game we all love playing with friends and family. You will be playing against a partner (you will need another person to play this game, I have not yet added computer funtionality). Play Tic Tac Toe as you orginally would with the original board game. Best of luck players!",
    image: Tictactoe,
    repositoryLink:"https://github.com/J3NNog1/ttt-weekend",
    deploymentLink:"https://jenn-juarez-tic-tac-toe.netlify.app/"
  },
  {
    title:"War Card Game",
    description:"In this project a player can play the original War Card game! You will be playing against the computer. The functionality of war is already programmed where a users cards are automatically compared to the computers cards. From there the highest card wins and the winners hands gets the two cards that were just played. There is also functionality where if both the player and the computer hits a tie, War will automatically take affect(war means https://bicyclecards.com/how-to-play/war ). The perspective winner will take the cards. There is also double war functionality. Check out my GitHub to take a closer look at my code!",
    image: War,
    repositoryLink:"https://github.com/J3NNog1/war-card-game.git",
    deploymentLink:"https://war-card-game-1.netlify.app"
  },
  {
    title:"Cooler Cars and Motorcycles",
    description:"Cooler Cars and Motorcycles is a full CRUD application where users can add as many vehicles as they like. You can add w",
    image: CoolerCarsAndMotorcycles,
    repositoryLink:"https://github.com/J3NNog1/cooler-cars-motorcycles.git",
    deploymentLink:"flyio-cooler-cars-motorcycles.fly.dev"
  },
  

]

export default Projects
