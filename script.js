//----------------SEZIONE DEL PALIDROMO----------------

/*  CONSEGNA: Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata */

//PalindromeCheck()

function PalindromeCheck() {

    //Trasformazione  dell'input dell'utente in una variabile iniziale

    let input_word = prompt("Inserisca una parola");

    /*  SANIFICAZIONE DELL'INPUT DELL'UTENTE
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

    // Confronto dell'ordine normale con l'ordine inverso delle lettere

    for (i = 0; i < normal_letters.length; i++) {

        //Se le lettere non sono uguali, vuol dire che la parola non è palindroma 

        if (normal_letters[i] != reversed_letters[i]) {

            console.log("La parola " + lowercase_word + " non è palindroma!");
            break;

            //Altrimenti, il confronto delle singole lettere continua fino alla fine. Se il ciclo raggiunge la fine dei due array con successo, se ne deduce che la parola è palindroma

        } if (i == normal_letters.length - 1) {

            console.log("La parola " + lowercase_word + " è palindroma!");
        }
    }
}

 /*----------------FINE SEZIONE DEL PALIDROMO----------------

----------------INIZIO SEZIONE DEL PARI E DISPARI----------------

    CONSEGNA:   L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
                Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
                Sommiamo i due numeri
                Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
                Dichiariamo chi ha vinto. */

//Richiesta all'utente della predizione della somma, che verrà trasformata in variabile

let prediction_text = prompt("La somma finale sarà pari o dispari?");

/*  SANIFICAZIONE DELL'INPUT DELL'UTENTE
    Per verificare l'input dell'utente si trasfromano tutte le lettere in lettere minuscole, omettendo nel frattempo numeri e caratteri speciali come fatto prima */

let lowercase_prediction = prediction_text.toLocaleLowerCase();

let clean_prediction = lowercase_prediction.replace(/[^a-zA-Z]/g, "");

