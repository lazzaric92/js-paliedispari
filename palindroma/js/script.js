//  --> funzione per verificare se una parola è palindroma
function isPalindrome(string){
    let result;
    for (let index = 0; index < string.length - 1; index++){
    result = (string.charAt(index) === string.charAt(string.length - 1 - index));
    }
    return result;
}