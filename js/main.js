//Inizio del codice JS

/* Commento
multi
linea
*/

alert("Hello JS World");

//esempio di hoisting
console.log(prova);
var prova = 42;

document.writeln("Hello JS World");
document.getElementById("titolo").innerText = "NUOVO TITOLO"; //oppure innerHTML

console.log("Hello Console World");

prova = 13;

//backtick
let utente = "Luca";
let orario = "12:21";
let data = "05/04/2023";
let messaggio = `${utente} ha caricato la pagina alle ${orario} del ${data}`;
console.info(messaggio);
console.error("C'è un errore");

//prompt("eventuale messaggio", "eventuale valore di default")
let eta = prompt("Quanti anni hai?");
console.log(`L'utente dichiara di avere ${eta} anni`);

let annoCorrente = 2023;

// let etaNumero = parseInt(eta);
let etaNumero = Number(eta);
let annoDiNascita = annoCorrente - eta;

console.log(`Sei nato nel ${annoDiNascita}`);
console.log(`eta è di tipo: ${typeof eta}`);

document.getElementById("anno").innerText = annoDiNascita;