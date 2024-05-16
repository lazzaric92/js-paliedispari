let userGuess = prompt('Even or Odd?');
userGuess = userGuess.toLowerCase();
let userNumber = Number.parseInt(prompt('Type a number from 1 to 5'), 10);
const computerNumber = getRandomNumber(1,5);
let sum;
let wordIs;

while (userNumber < 1 || userNumber > 5 || Number.isNaN(userNumber)){
    userNumber = Number.parseInt(prompt('Type a number from 1 to 5'), 10);
}


// --> funzione per generare un numero randomico compreso tra min e max inclusi
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// --> funzione per verificare che un numero sia pari
function isEven(number){
    result = number % 2 === 0;
    return result;
}