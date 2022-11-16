/*  CONSEGNA: Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata */

//Trasformazione  dell'input dell'utente in una variabile iniziale

let input_word = prompt("Inserisca una parola");

/* SANIFICAZIONE DELL'INPUT DELL'UTENTE
Siccome l'input deve essere una parola, vengono cercati tutti i caratteri che non sono lettere (numeri inclusi) e vengono cambiati in uno spazio nullo, eleminandoli dall'input */

let clean_word = input_word.replace(/[^a-zA-Z]/g, "");
   
// Per operare in modo efficiente, è necessario trasformare tutte le lettere dell'input in lettere minuscole

let lowercase_word = clean_word.toLocaleLowerCase();

/* Per verificare se la parola dell'utente è un palindromo oppure no, è necessario suddividere le lettere della parola dell'utente in un array (questo grazie alla funzione .split),
dopodichè è necessario creare una copia del primo array, invertire l'ordine delle lettere, e verificare se la posizione delle lettere è cambiato o meno */

let normal_letters = lowercase_word.split("");

/* Creazione copia del primo array. Viene fatta una copia siccome il reverese method è distruttivo, rendendo impossibile un confronto con l'ordine dell'array originale senza
la creazione di una copia */

let reversed_letters = []

for (i = 0; i < normal_letters.length; i++) {

    reversed_letters[i] = normal_letters[i]

}

// Inversione dell'ordine delle lettere nella copia

reversed_letters = reversed_letters.reverse();

console.log(normal_letters)
console.log(reversed_letters)
// Confronto dell'ordine normale con l'ordine inverso delle lettere

if (normal_letters[0] == reversed_letters[0]) {console.log(true)}
else {console.log(false)}
    
