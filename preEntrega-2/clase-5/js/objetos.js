//objetos literales
const lapicera={
    marca:"toyo",
    color:"negro",
    trazo:"fino"
}

console.log(lapicera);

console.log("el color de lapicera es: " + lapicera.color);
console.log("la marca de lapicera es: " + lapicera["marca"]);

//modificar una propiedad
lapicera.trazo = "grueso";

console.log(lapicera);



const producto = {
    nombre:"mouse wireless",
    marca:"logitech",
    cantidad: 34,
    disponibilidad: true,
}

//constructores
function persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new persona("memo","21 años","calle heroes");
console.log(persona1);

const persona2 = new persona("juan","30 años","calle altosa");
console.log(persona2);

//---otro ejemplo

function automovil(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

const automovil1 = new automovil("chevrolet", "onix", "azul");
console.log(automovil1);

//pasando un objeto literal como parametro a constructo

function mascota(objetoMascota){
    this.nombre = objetoMascota.nombre;
    this.raza = objetoMascota.raza;
    this.tamaño = objetoMascota.tamaño;
}

const miPerro = new mascota({nombre:"poppy", raza:"freshpul", tamaño:"pequeño", edad:10})
console.log(miPerro);




//metodos de Strings en objetos JS

let frase = "esto estaba en minusculas sin touppercase!";
console.log(frase.toUpperCase());

let frase2 = "ESTO ESTABA EN MAYUSCULAS SIN TOLOWERCASE!";
console.log(frase2.toLowerCase());

//propiedad length
let frase3 = "esto estara separado por length!";
console.log("la longitud de " + frase3.length);


//funcion constructora con metodos propios
function rectangulo(base, altura){
    this.base = base;
    this.altura = altura;
    //metodo
    this.calcularArea = function(){console.log("el area del rectangulo es " +this.base*this.altura)}
}

let rectangulo1 = new rectangulo(2,4);
rectangulo1.calcularArea();

let rectangulo2 = new rectangulo(6,8);
rectangulo2.calcularArea();


//operador in y for... in
for(const propiedad in rectangulo1) {
    console.log(propiedad);
    console.log(rectangulo1[propiedad]);
}

//clases

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