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
}
