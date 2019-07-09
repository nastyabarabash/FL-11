let game;
let number;
const MAX_RANGE = 8;
let n = parseInt(Math.random()*MAX_RANGE);

if (confirm('Do you want to play a game?')) {
    let pocket = prompt('Choose a roulette pocket number from 0 to 8 \nAttempts left: 3', number);
   if (pocket === n){
       alert('true');
   }
} else {
    alert('You did not become a billionaire, but can.');
}