! Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Chiedo all'utente di inserire una parola e la salvo in una costante ('userWord')

Richiamo la funzione 'isPalindrome' con argomento 'userWord'
    - se la funzione ritorna true, allora 'userWord' è palindroma
    - altrimenti 'userWord' non è palindroma

Creo funzione 'isPalindrome' con parametro 'string'
    scrivo un ciclo for con indice che va da 0 a string.length - 1 con il quale
        devo controllare che i caratteri alle posizioni (index) e (string.length - 1 - index) siano uguali
(il risultato sarà true o false)




! Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Chiedo all'utente se pari o dispari e lo salvo in una variabile ('userGuess')
Chiedo all'utente di inserire un numero da 1 a 5 e lo salvo in una variabile ('userNumber')
Richiamo la funzione 'getRandomNumber(1,5)' per generare il numero randomico del computer e lo salvo in 'computerNumber'
Dichiaro la variabile 'sum'
Dichiaro la variabile 'wordIs'

Controllo che 'userNumber' sia valido (ciclo while)
    finché 'userNumber' è minore 1 o è maggiore di 5 o è uguale a NaN
        richiedo di inserire un numero
        
Sommo 'userNumber' e 'computerNumber'
Richiamo la funzione 'isEven' con argomento  'sum'
    - se il risultato è true, allora 'wordIs' è 'even'
    - altrimenti 'wordIs' è 'odd'
Controllo se 'userGuess' coincide con 'wordIs'
    - se sì, ha vinto l'utente
    - altrimenti, ha vinto il computer


Creo la funzione 'getRandomNumber(min, max)'
    genera un numero randomico compreso tra min e max

Creo la funzione 'isEven' con parametro 'number'
    number % 2 deve dare resto 0
(il risultato sarà true o false)

