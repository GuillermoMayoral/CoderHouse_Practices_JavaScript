//SUGAR SYNTAX

//-----------------------------OPERADOR ++

/*

let numero;

let suma = numero + 1;

//esta suma se puede remplazar por ++

let suma1 = numero++;



//-----------------------------operador ternario


let temperatura = 40;

if (temperatura > 35){
    console.log("hace calor");
} else{
    console.log("templado")
}

//-----------------------------OPERADOR and &&

//Solo si la condicion es verdadera

const carrito = [];

if(carrito.length===0){
    console.log("sin productos");
}

//  "SI PASA ESTO" --> "HACER ESTO"
carrito.length===0 && console.log("No hay productos");
*/

//-----------------------------OPERADOR or ||
/*
const usuario1 = {
    nombre:"gabriel",
    edad:30,
};

const usuario2 =null;

console.log(usuario1 || "usuario no existe") //->usuario1
console.log(usuario2 || "usuario no existe") //->"usuario no existe"

//SIEMPRE MOSTRARA UN VALOR ES VERDADERO

console.log(0||"f");  //f
console.log(null||"f");  //f
console.log(undefined||"f");  //f
console.log(""||"f");  //f
console.log(NaN||"f");  //f
console.log(false||"f");  //f

//SI AMBOS SON VERDADEROS MOSTRARA EL PRIMER VALOR (VALOR DE LA IZQUIERDA)

console.log(true||"f");  //true
console.log(50||"f");  //50
console.log("Hola mundo"||"f");  //"Hola mundo"

//Ejemplo misma funcion sin or y con or

//sin usar or ||
let carritoLocalStorage = JSON.parse(localstorage.getItem("carrito"));

if (carritoLocalStorage) {
    carrito = carritoLocalStorage;
} else{
    carrito = [];
}

//Usando or ||
let carrit =JSON.parse(localStorage.getItem("carrito")) || []



//-----------------------------ACCESO CONDICIONAL A UN OBJETO

const usuario = {
    nombre: "franco",
    edad: 25,
    cursos: {
        javascript: "en curso"
    }
}

console.log(usuario?.cursos?.html || "la propiedad no existe");  //"no existe"
console.log(usuario?.cursos?.javascript || "la propiedad no existe"); //"en curso"
*/
//DESESTRUCTURACION
/*
const usuario = {
    nombre: "franco",
    edad: 25,
}

console.log(usuario.nombre);
console.log(usuario.edad);

let nombre = usuario.nombre;

console.log(nombre);


//DESESTRUCTURACION DE ARRAY

const alumnos = ["franco","mayte","gabriel","marianela"]

const [franco, gabriel] = alumnos

console.log(franco);
//console.log(gabriel); //->impre mayte

//uso correcto

const alumnos2 = ["pedro","juan","jony","jesus"]

const [pedro, juan, jony, jesus] = alumnos2

console.log(jony); //->imprime jony


//-----------------------------SPREAD OPERATOR ARRAYS - combinar arrays

const frutas = ["sandia", "cereza","piña"];
const bebidas = ["soda","cerveza","agua"];

const ambos = [...frutas, ...bebidas];
//traeme lo que contenga frutas y traeme lo que contenga bebidas

console.log(ambos);


//-----------------------------SPREAD OPERATOR OBJETOS - combinar objetos

const usuario = {
    nombre: "franco",
    edad: 25,
}

const usuario2 = [...usuario, { nombre: "eve", edad: 23 }];

*/