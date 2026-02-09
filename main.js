// PALINDROMA

// inizio chiededo la parola all'utente 
const word = prompt('Scrivi qui la tua parola')

// mi creo la funzione per controllare se la parola inserita è palindroma 
function palindromeWord(word) {
    let reverse_word = ''

    // trasformo la parola inserita dall'utente in Lower Case
    word = word.toLowerCase();

    // inverto la parola inserita dall'utente utilizzando il ciclo for 
    for (let i = word.length - 1; i >= 0; i--) {
        const char = word[i]
        reverse_word += char
    }

    // SE la parola inserita è palindroma stampa la stringa e il valore booleano 
    if (word === reverse_word) {
        console.log("La parola è palindroma");
        return true;
    }

    // ALTRIMENTI stampa che la parola non è palindroma e il false 
    else {
        console.log("La parola NON è palindroma");
        return false;
    }
}

// stampo il risultato in console
const result = palindromeWord(word);
console.log(result);


// ------------------------------------------------------------------


// Pari e Dispari

// inserisco il prompt per fare scegliere pari o dispari all'utente 
const evenOrOdd = prompt("Scegli: pari o dispari");

// aggiungo il prompt per inserire un numero che sia tra 1 e 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// inserisco la funzione che genera automaticamente il numero per il pc 
function numberRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

// creo la funzione per determinare se è pari o dispari 
function checkEvenOdd(number) {

    // SE il numero è pari 
    if (number % 2 === 0) {
        return 'Pari';
    }

    // ALTRIMENTI il numero è dispari
    else {
        return 'Dispari';
    }
}

// numero del pc
const pcNumber = numberRandom();

// stampo in console il numero inserito dall'utente e quello scleto dal pc 
console.log('Numero Utente', userNumber);
console.log('Numero PC', pcNumber);

// effettuo la somma per vedere se il numero dato è pari o dispari 
const sum = userNumber + pcNumber
console.log("Somma:", sum);

// controllo pari o dispari
const result = checkEvenOdd(sum);
console.log("La somma è:", result);

// SE il risultato è o pari o dispari, in base a quello che ha scelto, l'utente ha vinto 
if (result === evenOrOdd) {
    console.log("Hai vinto!🎉");
}

// ALTRIMENTI ha vinto il pc 
else {
    console.log("Ha vinto il computer!💻");
}