/*
function sumarNumerosEntre(inicio, fin){
    let total = 0;
    for (let i = inicio; i <= fin; i++) {
        total += i;
        
    }

    return total;
}

function sumar (numA,numB){
    return numA+numB;
}

console.log(sumarNumerosEntre(sumar(20,80), 1000));
*/


//Metodos de los arrays, que son funciones de orden superior

/*
const numeros = [1,2,3,4,5,6,7,8,9];
const triplicados = [];

console.log(triplicados);
numeros.forEach(element => {
    element =element*3;
    triplicados.push(element )
}); 
console.log(triplicados);
*/

const cursos = [{
    nombre: 'JavaScript',
    precio: 15000
},
{
    nombre: 'ReactJS',
    precio: 22000
},
{
    nombre: 'AngularJS',
    precio: 20500
},
{
    nombre: 'Desarrollo Web',
    precio: 16000
},
]

//find(). Retorna el primer elemneto que cumple con la condicion. Si no hay ninguno, retorna undefined

const encontrado = cursos.find(curso=>curso.precio>20000);

//console.log(encontrado);

//some(). Retorna true si algun elemnto cumple la condicion, p false si ninguno lo haces

const alguno = cursos.some(curso=>curso.precio>20000);
//console.log(alguno);

//filter(). Retorna un array con todos  los elementos que cumplen la condicion. si no hay ninguno devuelve un array vacio.

const filtrado = cursos.filter(curso=>curso.precio>20000);
//console.log(filtrado)

//map(). retorna un array con la misma cantidad de elementos que el array original, pero con la operacion aplicada

const cursosConDescuento = cursos.map(curso=>{
    return {
        nombre: curso.nombre,
        precio: curso.precio*.30
    }
})

//console.log(cursosConDescuento);

const numeros = [1,2,3,4,5,6,7,8,9,10];
//reduce. toma todos los elementos de un array y los va acumulando en un acumulador es un funcionamiento similar a for.each

const totalArray = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

//console.log(totalArray);

//sort(). Ordena el array original segun la funcion elegida (menor a mayor, mayor a menor). METODO DESTRUCTIVO

const desordenados = [1,5,23,45,2,78,4];
const ordenados = desordenados.slice(0);

ordenados.sort((a,b)=>b-a);
//console.log(ordenados);

//Math. te muestra constantes matematicas

console.log(Math.PI);

console.log(Math.max(22,64,57,85,35,125,2))

let azar = Math.random()*100;
console.log(azar);

//Clase date para manejo de fechas
let fechaActual = new Date();

//Clase date de forma especifica

let fechaActualEspecifica = new Date(2022, 7, 13); //enero es mes 0
