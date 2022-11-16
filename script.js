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

//Creazione della funzione per generare un numero a caso per il computer

function random_number(n) {

    //Il numero deve essere da 1 (ergo il +1) a n (n verrà cambiato in 5) e intero (parseInt)

    return parseInt((Math.random() * n) + 1);

}

//Creazione della funzione per stabilire se la somma è pari o dispari

function even_or_odd(sum) {

    //Se la somma è divisibile per 2 senza resto, significa che la somma è pari

    if (sum % 2 == 0) {

        //È stato scelto il numero 2 per rappresentare i numeri pari, come nella prediction dell'utente che verrà chiesta sotto

        return 2

        //Altrimenti il numero è dispari, e come return si avrà il numero 1

    } else {

        return 1
    }
}

//Richiesta all'utente della predizione della somma, che verrà trasformata in variabile

let prediction_text = prompt("La somma finale sarà pari o dispari?");

/*  SANIFICAZIONE DELL'INPUT DELL'UTENTE
    Per verificare l'input dell'utente si trasfromano tutte le lettere in lettere minuscole, omettendo nel frattempo numeri e caratteri speciali come fatto prima */

let lowercase_prediction = prediction_text.toLocaleLowerCase();

let clean_prediction = lowercase_prediction.replace(/[^a-zA-Z]/g, "");

//Creazione della variabile prediction, nella quale è conservata la predizione dell'utente

let prediction = "";

if (clean_prediction == "pari") {

    //Se l'utente ha predetto che la somma sarà pari, il valore di prediction sarà "2"

    prediction = 2;

} else if (clean_prediction == "dispari") {

    //Se l'utente ha predetto che la somma sarà dispari, il valore di prediction sarà "1"

    prediction = 1;

    //Altrimenti, l'utente non ha scritto correttamente la propria scelta, viene dato errore

} else { console.error("Scelta scritta incorrettamente.") }

//Viene chiesto all'utente un numero da 1 a 5

let StringUserNumber = prompt("Digiti un numero da 1 a 5");

//Viene convertito l'input da stringa a numero effettivo

let user_number = parseInt(StringUserNumber);

//Controllo dell'input dell'utente, se non risulta essere all'interno dell'intervallo stabilito, o se non è un numero, viene dato errore

if (user_number < 1 || user_number > 5 || isNaN(user_number)) {

    console.error("Numero invalido.")
}

//Somma del numero scelto dall'utente con il numero generato a caso dal computer, grazie alla funzione scritta in precedenza

let sum = user_number + random_number(5);
console.log("Il numero generato dal computer è: " + (sum - user_number));
console.log("Dunque la somma è: " + sum);

//Utilizzando la funzione scritta in precedenza, si scoprirà se la somma è pari (risultato finale 2) o dispari (risultato finale 1)

let result = even_or_odd(sum);

/* Per dichiarare la vittoria o la sconfitta dell'utente, è necessario cofrontare il "result" con la "prediction"
Nel caso in cui l'utente ha predetto correttamente, ha vinto */

if (prediction == result) {
    console.log("Congratulazioni, hai indovinato correttamente!!!")

    //Altrimneti, l'utente ha perso
} else {
    console.log("Ci dispiace, non hai indovinato correttamente!")
}