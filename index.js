// document.addEventListener("DOMContentLoaded", function(event) {

// the two players of the game
const player = {
    currentChoice: null
}

const computer = {
    currentChoice: null
}

// the array that will be shuffled and used to match the choices in the game///
const choices = ['faceCard1', 'faceCard2', 'faceCard3'];


// this function is based on fisher yates algorithm, it will shuffle the array
// so that each game the cards are in a different order it also creates the cards and displays them
function shuffleArray(choices) {

    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        //   fisher yates randomizer
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    
    for ( let i = 0; i < choices.length; i++) {
        // used the shuffleArray function to create the face cards and ammend them to the DOM
        if (choices[i] === 'faceCard1')   { 
            const card1 = document.createElement('img')
            card1.src = 'images/faceCard.jpeg'
            card1.style.width = '150px'
            card1.alt = 'faceCard1'
            card1.id = 'faceCard1'
            document.getElementsByClassName('cards')[0].appendChild(card1) 
            // console.log('in shuffleArray conditional card1',document.getElementsByClassName('cards')[0]);
      
        } else if (choices[i] === 'faceCard2') {  
            const card2 = document.createElement('img')
            card2.src = 'images/faceCard.jpeg'
            card2.style.width = '150px'
            card2.alt = 'faceCard2'
            card2.id = 'faceCard2'
            document.getElementsByClassName('cards')[0].appendChild(card2) 
            // console.log('in shuffleArray conditional card2',document.getElementsByClassName('cards')[0]);

        } else  {  
            const card3 = document.createElement('img')
            card3.src = 'images/faceCard.jpeg'
            card3.style.width = '150px'
            card3.alt = 'faceCard3'
            card3.id = 'faceCard3'
            document.getElementsByClassName('cards')[0].appendChild(card3) 
            // console.log('in shuffleArray conditional card3',document.getElementsByClassName('cards')[0]);
   
        }
    console.log('in shuffleArray, choices',choices)
    }
    

}

shuffleArray(choices);

// these functions change the image of the card the player clicked
document.getElementById('faceCard1').addEventListener('click', changeImage)
function changeImage() {
    document.getElementById('faceCard1').src='images/bellaJPG.jpeg'
}

document.getElementById('faceCard2').addEventListener('click', changeImage2)
function changeImage2() {
    document.getElementById('faceCard2').src='images/cheppy.JPG'
}

document.getElementById('faceCard3').addEventListener('click', changeImage3)
function changeImage3() {
    document.getElementById('faceCard3').src='images/fisher.jpg'
}

// this function creates the target event click and checks if it matched the match card. 
let playerTurn = true
const matchCheck = (event) => {
    console.log('in matchCheck, event.target.id',event.target.id)
    let selection = event.target.id
    console.log('matchCheck, choices', choices)
    if (selection === 'faceCard1') {
        result = document.getElementById("results").innerText='Congratulations, You Win! Press the button to play again.';
        removeHandler()
    //    need to stop game remove click events on facecards
    } else  {
        console.log('got here')
        playerTurn = false
        console.log(playerTurn)
        result = document.getElementById("results").innerText='Sorry, no match. It is the computers turn.';
       
    } 
    console.log('in matchCheck, result',result)
     // remove the card choice from the array for computers turn
    choices.splice(choices.indexOf(selection),1)
    console.log(choices) 
    if (playerTurn === false) {
        const myTimeout = setTimeout(computerChoice, 4000);
        computerChooses()
             
    }

   
}



// this is so that the play cannot click on the inmages after the first play
function removeHandler() {
    document.getElementById('faceCard1').removeEventListener('click', matchCheck);
    document.getElementById('faceCard2').removeEventListener('click', matchCheck);
    document.getElementById('faceCard3').removeEventListener('click', matchCheck);
    document.getElementById('faceCard1').removeEventListener('click', changeImage);
    document.getElementById('faceCard2').removeEventListener('click', changeImage2);
    document.getElementById('faceCard3').removeEventListener('click', changeImage3);
}


// this function is where the computer selects a random choice 
function computerChooses() {
    console.log('computer chooses ran')
    if (playerTurn === false) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
    console.log(randomIndex)
    removeHandler()
    }  
} 

// this function compares the computers choice to determine if its a win or draw
function computerChoice()  {

    if(computer.currentChoice === 'faceCard1') {
        result = document.getElementById("results").innerText='The Computer Wins. Press the play again button to restart the game';
    
    } else if (computer.currentChoice === 'faceCard2'){
     
        result = document.getElementById("results").innerText='No one matched the Card. It is a Draw. Press the play again button to restart the game';
    
    } else if  (computer.currentChoice === 'faceCard3'){
       
        result = document.getElementById("results").innerText='No one matched the Card. It is a Draw. Press the play again button to restart the game';

    }
}
// console.log('in computerChooses, result',computerChooses)

// these are the click event listeners for the player and will determin the outcome in the matchCheck function
document.getElementById('faceCard1').addEventListener('click', matchCheck)
document.getElementById('faceCard2').addEventListener('click', matchCheck)  
document.getElementById('faceCard3').addEventListener('click', matchCheck)  




