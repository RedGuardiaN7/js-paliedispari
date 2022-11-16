/*  Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata */

//Trasformo l'input dell'utente in una variabile iniziale

let word_input = prompt("Inserisca una parola");

/* Sanificazione dell'input dell'utente
Siccome l'input deve essere una parola, vengono cercati tutti i caratteri che non sono lettere (numeri inclusi) e vengono cambiati in uno spazio nullo, eleminandoli dall'input */

let word_clean = word_input.replace(/[^a-zA-Z]/g, "");
   
