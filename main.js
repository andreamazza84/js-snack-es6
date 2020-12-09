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

// const squadre = [
//     {'nome':'atalanta','punti':0, 'falli':0},
//     {'nome':'juventus','punti':0, 'falli':0},
//     {'nome':'chievo','punti':0, 'falli':0},
//     {'nome':'milan','punti':0, 'falli':0},
//     {'nome':'inter','punti':0, 'falli':0},
//     {'nome':'parma','punti':0, 'falli':0},
//     {'nome':'lazio','punti':0, 'falli':0},
//     {'nome':'napoli','punti':0, 'falli':0},
//     {'nome':'fiorentina','punti':0, 'falli':0}
// ];

//JSnack 4B
//Generare numeri random al posto degli 0 nelle proprietà:
//punti fatti e falli subiti

// random = (min, max) => {
//     let randomNum = Math.floor(Math.random()*(max - min)) + min;
//     return randomNum;
// }

// for (let index = 0; index < squadre.length; index++) {
//     squadre[index]['punti'] = random(20, 200);
//     squadre[index]['falli'] = random(10, 50);
// }

// console.log(squadre);

//BLOCCO 5

//JSnack 1
//Crea 10 oggetti che rappresentano una zucchina,
//indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

// class Zucchina{
//     constructor(varietà, peso, lunghezza){
//         this.varietà = varietà;
//         this.peso = peso;
//         this.lunghezza = lunghezza; 
//     }
// }
// let zucchine = [];

// zucchine[0] = new Zucchina('milanese', 150, 20);
// zucchine[1] = new Zucchina('romana', 200, 12);
// zucchine[2] = new Zucchina('faentina', 160, 18);
// zucchine[3] = new Zucchina('siciliana', 230, 16);
// zucchine[4] = new Zucchina('calabrese', 170, 20);
// zucchine[5] = new Zucchina('modenese', 220, 10);
// zucchine[6] = new Zucchina('triestina', 130, 12);
// zucchine[7] = new Zucchina('bolognese', 180, 14);
// zucchine[8] = new Zucchina('romagnola', 210, 15);
// zucchine[9] = new Zucchina('fiorentina', 175 , 14);

// let peso = 0;
// for (let index = 0; index < zucchine.length; index++) {
//     peso += zucchine[index]['peso'];
// }

// console.log(`Il peso di tutte le zucchine è pari a ${peso}`);

//JSnack 2
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
// console.log(`"Ciao" al contratio è: ${mirror("Ciao")}`);

// // Alternativa

// //dividi, rovescia, unisci
// const mirror2 = (word) => {
//     let mirrorWord = "";
//     mirrorWord = word.split("").reverse().join("");
//     return mirrorWord
// }

// console.log(`"Cavolo" al contratio è: ${mirror2("Cavolo")}`);

//JSnack 3
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

// class Zucchina{
//     constructor(varietà, peso, lunghezza){
//         this.varietà = varietà;
//         this.peso = peso;
//         this.lunghezza = lunghezza; 
//     }
// }
// let zucchine = [];

// zucchine[0] = new Zucchina('milanese', 150, 20);
// zucchine[1] = new Zucchina('romana', 200, 12);
// zucchine[2] = new Zucchina('faentina', 160, 18);
// zucchine[3] = new Zucchina('siciliana', 230, 16);
// zucchine[4] = new Zucchina('calabrese', 170, 20);
// zucchine[5] = new Zucchina('modenese', 220, 10);
// zucchine[6] = new Zucchina('triestina', 130, 12);
// zucchine[7] = new Zucchina('bolognese', 180, 14);
// zucchine[8] = new Zucchina('romagnola', 210, 15);
// zucchine[9] = new Zucchina('fiorentina', 175 , 14);

// let corte = [];
// let lunghe = [];

// for (let index = 0; index < zucchine.length; index++) {
//     (zucchine[index]['lunghezza'] < 15) ? corte.push(zucchine[index]) : lunghe.push(zucchine[index]);
// }
// let pesoCorte = 0;
// let pesoLunghe = 0;
// for (let index = 0; index < zucchine.length; index++){
//     if(zucchine[index]['lunghezza'] < 15){
//         corte.push(zucchine[index]);
//         pesoCorte += zucchine[index]['peso'];
//     }
//     else{
//         lunghe.push(zucchine[index]);
//         pesoLunghe += zucchine[index]['peso'];
//     }
// }

// console.log(`zucchine più corte di 15cm pesano: ${pesoCorte} g`);
// console.log(`zucchine più lunghe di 15cm pesano: ${pesoLunghe} g`);

//JSnack 4
// Scrivi una funzione che fonda due array (con lo stesso
//     numero di elementi) prendendo alternativamente gli
//     elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l'];

mixer = (array1, array2) => {
    mixedArray = [];
    for (let index = 0; index < array1.length; index++) {
        mixedArray[2*index] = array1[index];
        mixedArray[2*index + 1] = array2[index];      
    }
    return mixedArray;
}

console.log(mixer(numbers, letters));

//JSnack 5
//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande 
//al massimo quanto il numero di elementi dell’array). 
//La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

// list = [1, 2, 3, 4, 5, 6, 7, 8, "Marco", true] ;
// const trim = (array, a, b) =>{
//     if(b > array.length){
//         b = array.length;
//     }
//     let trimList = [];
//     let j = 0;
//     for (let index = 0; index < array.length; index++) {
        
//         if(index >= a && index <= b){
//             trimList [j] = array[index];
//             j++;
//         }        
//     }
//     return trimList;
// }

// console.log(trim(list, 3, 8));
