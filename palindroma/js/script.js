const userWord = prompt('Type a word');
isPalindrome(userWord);

if (isPalindrome(userWord) === true){
    console.log(`${userWord} è palindroma`);
} else {
    console.log(`${userWord} non è palindroma`);
}


//  --> funzione per verificare se una parola è palindroma
function isPalindrome(string){
    let result;
    for (let index = 0; index < string.length - 1; index++){
    result = (string.charAt(index) === string.charAt(string.length - 1 - index));
    }
    return result;
}