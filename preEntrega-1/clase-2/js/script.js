//if
let nombre = prompt("ingresa tu nombre: ");

if(nombre=='Pepe'){
    console.log("Bienvenido Pepe!")
}else{
    console.log("Usuario " + nombre + " no reconocido")
};

//con else if

let calorias = parseInt(prompt("Ingresa la cantidad de calorias consumiddas: "))

if(calorias < 1500){
    alert("alerta, deficit calorico");
} else if(calorias < 2000){
    alert("Calorias adecuadas");
} else if(calorias < 2800){
    alert("EXCESO CALORICO!!!");
} else{
    alert("desnutricion");
}

//booleanos
let conEnvio = true;

if(conEnvio){
    let direccion = prompt("ingresa direccion de entrega ");
    console.log("mañana recibiras tu pedido en: " + direccion);
}

//operador == y ===
let num1 = 1;
let num2 = "1";

let iguales = (num1 == num2);
console.log("son iguales? " + iguales);

let noiguales = (num1 === num2);
console.log("son iguales? " + noiguales);

//operador && - AND
let user = prompt("digita user:");
let password = prompt("contraseña:");

if((usuario == "Pepe")&&(password == "1234")){
console.log("Sesion iniciada");
} else{
    console.log("Usuario " + user + " y contraseña " + password + " son incorrectos.");
}

//operador || - OR
let points = 0;
let question1 = prompt("Donde se juega el mundial 2022?");

if((question1 == "qatar")||(question1 == "catar")){
    alert("felicidades obtienes 2 puntos");
    points = points +2;
} else{
    alert("respuesta incorrecta -1 punto");
    points = points -1;
}

console.log("tus puntos totales son: " + points);