//BLOCCO 4

//JSnack 1A
//Creare un oggetto palla che abbia le seguenti proprietà.
//Nome = palla
//Peso = 10

// var oggetto = {
//     'nome': 'palla',
//     'peso': 10
// };

//JSnack 1B
//Attraverso un prompt dare la possibilità all’utente di
//modificare il peso della palla.

// oggetto.peso = Number(prompt("Inserisci il nuovo peso per l'oggetto palla"));
// console.log(oggetto);

//JSnack 2
//Creare un array di oggetti: ogni oggetto descriverà una bici
//da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

// biciclette = [
//     {'nome': 'bianchi',
//     'peso': '4800'},
//     {'nome': 'conalgo',
//     'peso': '3700'},
//     {'nome': 'adriatica',
//     'peso': '5000'},
//     {'nome': 'marca-x',
//     'peso': '4000'},
//     {'nome': 'marca-y',
//     'peso': '3200'},
//     {'nome': 'marca-z',
//     'peso': '3600'},
// ];

// const min = biciclette[0]['peso'];
// let marcaMin = "";
// for (let index = 1; index < biciclette.length; index++) {
    
//     if(min > biciclette[index]['peso']){
//         min = biciclette[index]['peso'];
//         marcaMin = biciclette[index]['nome'];
//     }    
// }

//console.log(`La bici di marca ${marcaMin} è la più leggera e pesa ${min} g`);

//JSnack 3
//Creare un oggetto che rappresenti un triangolo rettangolo,
//con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.

// const triangolo = {
//     'base': 4,
//     'altezza': 3
// };

// triangolo.ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));
// triangolo.perimetro = triangolo.base + triangolo.altezza + triangolo.ipotenusa;
// triangolo.area = (triangolo.base * triangolo.altezza)/2;

// console.log(triangolo);

//JSnack 4A
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà:
//nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre
//saranno tutte settate a 0.

const squadre = [
    {'nome':'atalanta','punti':0, 'falli':0},
    {'nome':'juventus','punti':0, 'falli':0},
    {'nome':'chievo','punti':0, 'falli':0},
    {'nome':'milan','punti':0, 'falli':0},
    {'nome':'inter','punti':0, 'falli':0},
    {'nome':'parma','punti':0, 'falli':0},
    {'nome':'lazio','punti':0, 'falli':0},
    {'nome':'napoli','punti':0, 'falli':0},
    {'nome':'fiorentina','punti':0, 'falli':0}
];

//JSnack 4B
//Generare numeri random al posto degli 0 nelle proprietà:
//punti fatti e falli subiti

random = (min, max) => {
    let randomNum = Math.floor(Math.random()*(max - min)) + min;
    return randomNum;
}

for (let index = 0; index < squadre.length; index++) {
    squadre[index]['punti'] = random(20, 200);
    squadre[index]['falli'] = random(10, 50);
}

console.log(squadre);

//BLOCCO 5







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