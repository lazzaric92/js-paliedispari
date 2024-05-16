// --> funzione per generare un numero randomico compreso tra min e max inclusi
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// --> funzione per verificare che un numero sia pari
function isEven(number){
    result = number % 2 === 0;
    return result;
}