// Comentario simple
/*Comentario
de multiples
lines*/

// Formas de declarar variables

// 1.- let
// Declarar variable
let myName = 'Memo';

// Rreasignar variable
myName = 'Juan';

// 2.- var
//Ya no se usa, es mala practica
var myNameVar = 'Jose';

// 3.- const
//variable que no va cambiar, se escribe en MAYUSCULAS
const PI = 3.14;

//concatenacion y uso de prompt

let word1;

word1 = prompt('ingresa tu nombre');

let word2 = prompt('ingresa apellido');

//alert y console.log
alert('Bienvenid@ ' + word1 + ' ' + word2);

console.log('Bienvenid@ ' + word1 + ' ' + word2);

//Uso de "parseInt y parseFloat" para obtener datos numericos
let ageUser = parseInt(prompt('Ingresa tu edad'));
let medida= parseFloat(prompt('ingresa altura'));

console.log(ageUser);
console.log(medida);