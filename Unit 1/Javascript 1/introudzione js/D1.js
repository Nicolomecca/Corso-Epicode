/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 I principali Data Types, detti anche "tipi ptimitivi" sono:-Dato stringa(usato per l'ultilizzo di caratteri,apici),-Dato numerico(usato per l'utilizzo
 di numeri indistintamente da interi o decimali,senza apici),-Dato booleano(detto anche semaforo, rappresentato da True o false, alla base delle strutture 
 condizionali,cicliche e iterative),-Null(usato per assegnare intenzionalmente un valore assente, non significa valore 0)-Undefined(usato per
 dichiarare una variabile che ancora però non ha un valore ma le verrà assegnata in futuro)
*/

let myName= 'Nicolò'
console.log(myName)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let numero1=12
let numero2=20
let somma= numero1 + numero2
console.log(somma)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let x=12
console.log(x)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

myName='Mecca'

Const age=24
Const age=26
console.log(age)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

let numero=4
let sottrazione= x - numero
console.log(sottrazione)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let name1='jhon'
let name2='Jhon'
let verifica= name1===name2?'la verifica è true':'la verifica è false'
console.log(verifica)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let trasformazione= name2.toLowerCase()===name1.toLowerCase()?'true':'false'
console.log(trasformazione)
