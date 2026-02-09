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
const scelta = prompt("Scegli: pari o dispari");