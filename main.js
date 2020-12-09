//JSnack 1A
//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

var oggetto = {
    'nome': 'palla',
    'peso': 10
};

//JSnack 1B
//Attraverso un prompt dare la possibilità all’utente di
//modificare il peso della palla.

oggetto.peso = Number(prompt("Inserisci il nuovo peso per l'oggetto palla"));
console.log(oggetto);




//Scrivi una funzione che accetti una stringa 
//come argomento e la ritorni girata 
//(es. Ciao -> oaiC)

// const mirror = (word) =>{
//     let mirrorWord = "";
//     for (let index = (word.length - 1); index >= 0; index--) {
//         mirrorWord += word[index];
//     }
//     return mirrorWord;
// }
// console.log(mirror("Ciao"));

// //******************** */

// //dividi, rovescia, unisci
// const mirror2 = (word) => {
//     let mirrorWord = "";
//     mirrorWord = word.split("").reverse().join("");
//     return mirrorWord
// }

// console.log(mirror2("Cavolo"));

// const mirror3 = (word) => {
//     let separazione = word.split("");
//     let inversione = seperazione.reverse();
//     let unione = inversione.join("");
//     return unione;
// }

// console.log(mirror3("Miao"));

//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande 
//al massimo quanto il numero di elementi dell’array). 
//La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”


// list = [1, 2, 3, 4, 5, 6, 7, 8];
// const trim = (array, a, b) =>{
//     if(b > array.length){
//         b = array.length;
//     }
//     let trimList = [];
//     for (let index = 0; index < array.length; index++) {
        
//         if(index >= a && index <= b){
//             trimList [index] = array[index];
//         }
//         else{
//             trimList[index] = 0; 
//         }
        
//     }
//     return trimList;
// }

// console.log(trim(list, 3, 6));

//in alternativa si può usare .slice()

//[].slice