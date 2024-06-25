/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
let l1 = 'base';
let l2 = 'altezza'
function area(l1, l2) {
    return l1 * l2
}
console.log(area(4, 7));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    if (a === b) {
        console.log((a + b) * 3);
    } else {
        return a + b
    }
}
console.log(crazySum(7, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
let absolute = 0;
let multiply = 0;
function crazyDiff (a) {
   let absolute = Math.abs (a - 19 );
   if ( a > 19) {

   }

console.log(crazyDiff(60));


/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
se n è uguale a 400.
*/
function buondary(int) {
    if (int % 2 === 0 && int > 20 && int <= 100 || int === 400) {
        return 'true'
    } else {
        return 'false'
    }
}
console.log(buondary(80));








