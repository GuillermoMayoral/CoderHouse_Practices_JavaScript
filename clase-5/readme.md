temario clase 5

-----------------------------objetos literales

const objeto={
objetito:caracteristica
objetito:caracteristica
objetito:caracteristica
}

-----------------------------llamar un objeto

console.log(objeto);

-----------------------------modificar propiedad

objeto.objetito = "otraCaracteristica";

-----------------------------constructores

function persona(nombre, edad, calle) {
this.nombre = nombre;
this.edad = edad;
this.calle = calle;
}

const persona1 = new persona("memo","21 años","calle heroes");
console.log(persona1);

-----------------------------pasando un objeto literal como parametro a constructo

function mascota(objetoMascota){
this.nombre = objetoMascota.nombre;
this.raza = objetoMascota.raza;
this.tamaño = objetoMascota.tamaño;
}

const miPerro = new mascota({nombre:"poppy", raza:"freshpul", tamaño:"pequeño", edad:10})

-----------------------------metodos de Strings en objetos JS

toUpperCase = todo el string en mayusculas
toLowerCase = todo el string en minusculas

let frase = "esto estaba en minusculas sin touppercase!";
console.log(frase.toUpperCase())

let frase2 = "ESTO ESTABA EN MAYUSCULAS SIN TOLOWERCASE!";
console.log(frase2.toLowerCase())

> > > > > > > > > > > > > > NOTA (PUEDES USAR ESTO A LA HORA DE PEDIR UN DATO PARA UN CONDICIONAL == ASI NO IMPORTA SI EL USUARIO USA MAYUSCULAS O minusculas YA QUE EL PROGRAMA LO RECIBIRA SIEMPRE CON LowerCase O UpperCase)

-----------------------------propiedad length
let frase3 = "esto estara separado por length!";
console.log("la longitud de " + frase3.length);

-----------------------------funcion constructora con metodos propios
function rectangulo(base, altura){
this.base = base;
this.altura = altura;
//metodo
this.calcularArea = function(){console.log("el area del rectangulo es " +this.base\*this.altura)}
}

let rectangulo1 = new rectangulo(2,4);
rectangulo1.calcularArea();

let rectangulo2 = new rectangulo(6,8);
rectangulo2.calcularArea();

-----------------------------operador in y for... in
for(const propiedad in rectangulo1) {
console.log(propiedad);
console.log(rectangulo1[propiedad]);
}

-----------------------------clases

class clientes{
constructor(nombre, edad, calle){
this.nombre=nombre;
this.edad=edad;
this.calle=calle;
}
hablar(){
console.log("hola soy "+ this.nombre)
}
}
const cliente1 = new clientes("Pedro", 48, "zaragoza");
console.log(cliente1);
cliente1.hablar()

-
-
- -----------QUESTIONS-----------
  ->¿que pasa si agregamos una PROPIEDAD extra al llamar una function de objeto?
  esta no afecta, ya que function solo toma lo necesraio
  ejemplo:

function mascota(objetoMascota){
this.nombre = objetoMascota.nombre;
}

const miPerro1 = new mascota({nombre:"poppy", edad:10})
console.log(miPerro1);

->¿que pasa si no agregamos todas las PROPIEDADES al llamar una function de objeto?
esta no afecta pero los valores no establecidas se daran "undefined"
ejemplo:

function mascota(objetoMascota){
this.nombre = objetoMascota.nombre;
this.raza = objetoMascota.raza;
}

const miPerro2 = new mascota({nombre:"poppy"})
console.log(miPerro2);

-----------la consola mostrara lo siguiente
-----------nombre: poppy
-----------raza: undefined
