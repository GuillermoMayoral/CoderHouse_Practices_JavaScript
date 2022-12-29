temario clase 6

-----------------------------arrays

const NAME = ['objet1','objet2','objet3'];

-----Los arrays pueden tener distintos valores mezclados como strings, numeros y boleanos, tambien pueden terner otros arrays dentro.

const name = [12,3.12,'menta granizada','quso',['neymar','messi',['paredes','lautaro']],false];

-----El array puede mostrarse en console

console.log(name);

-----------------------------Length

-----Es una forma de saber la cantidad de valores dentro del array
console.log(name.length);

-----------------------------Llamar un elemento especifico del array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

-----Recordemos que la secuencia de los array empieza a contar desde "0" por lo que si queremos mostrar el "4" debemos especificar la casilla [3]
console.log(numeros[3]);

--si queremos el "1" debemos especificar [0]
console.log(numeros[0]);

-----------------------------Llamar a todos los elementos del array con un FOR

for(let i=0; i<numeros.length; i++){
console.log(numeros[i]);
}

-----Tambien podemos llamarlos para operaciones

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let resultado = numeros[7]\*numeros[2];
console.log(resultado);

-----------------------------Sustituir elementos de un array

numeros[5] = '24';
console log(numeros) ---> el array ahora sera:numeros = [1, 2, 3, 4, 5, 24, 7, 8, 9]

-----------------------------Crear elementos en un array

numeros[20]='21';
-----Los elementos entre [10] y [20] que no han sido declarados se daran como vacios y podran seguir usandose

ejemplo:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, -, -, -, -, -, -, -, -, -, 20];

-----------------------------metodos de los arrays

-----------------------------agregar elementos
-----push agrega uno o mas elementos al final del array
familiaSimpson.push()

-----unshifty agrega uno o mas elementos al inicio del array
familiaSimpso.unshift('paty','barney')

-----------------------------eliminar elementos
-----eliminar ultimo elemento
familiaSimpson.pop();

-----eliminar primer elemento
familiaSimpson.shift();

-----y podemos guardar este elemento borrado en una variable
let eliminado = familiaSimpson.pop();

let eliminado = familiaSimpson.shift();

-----eliminar uno o mas elementos especificos
familiaSimpson.splice(3, 4); ---> el numero uno señala la posiocion de inicio y el 2do numero la cantidad de elementos a eliminar

familiaSimpson.splice(3); ---> si solo hay un numero significa que se borra todo a partir de ese elemento

-----------------------------Modificar array

----- .toString vuelve todos los elementos en strings
const aCadena = familiaSimpson.toString();
console.log(aCadena);

----- .join cambia el caracter de separacion del strin, en ete caso cambie ' , ' por ' & '
const imprimible = familiaSimpson.join(' & ');
console.log(imprimible);

-----------------------------concatenar arrays
const perros = ['firu', 'alfonso', 'gordo', 'peque'];
const gatos = ['morgana', 'hana', 'nyako'];

--- .concat permite acuplar otro array
const mascotas = perros.concat(gatos);
console.log(mascotas);

-----------------------------Copiar un array

-----el primer numero indica donde empieza a copiar y el 2do numero indica donde termina de copiar pero no incluye ese ultimo valor
const otrosPerros = perros.slice(1,3);

-----copiar todo el array

-----el valor de .slice debe ser 0
const otrosPerros = perros.slice(0);

-----------------------------Ubicar el numero de un elemento
-----.indexOf te entrega el numero del elemento especificado, si este no ezxiste dara resultado '-1'
console.log(familiaSimpson.indexOf('bart'));

---.include nos ayuda a saber si el elemento existe con true o false
console.log(familiaSimpson.includes('lisa'));

-----------------------------invertir valores

numeros.reverse()

-----cuidado al usarlo ya que modifica el array
resultado:
const numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1];
