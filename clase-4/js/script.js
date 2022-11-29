//-----------------------------funciones sin parametros
function darBienvenida(){
    alert("bienvenidos a las funicones")
}

//invocacion de la funsion
// darBienvenida();

function calcularEdad(){
    const year=2022;
    let nacimiento=parseInt(prompt("ingresa año de nacimeinto"));
    let old=year - nacimiento;
    alert("tienes " + old);
}

//calcularEdad();

//-----------------------------Funciones con parametros
function calcularMultiplicacion(num1,num2){
    let resultado= num1 * num2;
    alert("el resultado de multiplicar " + num1 + " x " + num2 +" es: " + resultado);
}

//calcularMultiplicacion(2,5); //2 seria num 1 y 5 seria num2

// let primerNum=parseInt(prompt("ingresa numero 1"));
// let segundoNum=parseInt(prompt("ingresa numero 2"));

// calcularMultiplicacion(primerNum,segundoNum);

function calcularIVA(precio){
    let totalConIVA = precio * 1.16;
    alert("El precio (" + precio + ") mas IVA es: " + totalConIVA);
}

// let precioProd = parseFloat(prompt("ingresa el precio del producto"));
// calcularIVA(precioProd);

//-----------------------------usar funciones dentro de bucles
//FOR
// for(let i=1;i<4;i++){
//     let precioProd = parseFloat(prompt("ingresa el precio del producto" + i));
//     calcularIVA(precioProd);
// }

//while
// let precioProd = parseFloat(prompt("ingresa el precio del producto (0 para salir)"));
// while(precioProd!=0){
//     calcularIVA(precioProd);
//     precioProd = parseFloat(prompt("ingresa el precio del producto (0 para salir)"));
// }


//-----------------------------function con parametros y return
function calcularM2(largo, ancho){
    let metrosCuad=largo*ancho;
    return metrosCuad;
}

function mostrarResultado (result){
    alert("El valor calculado es: "+ result);
}

//una variable recibe lo que arroja la funcion
let resultado = calcularM2(5,7);
//alert("resultado es:" + resultado);
mostrarResultado (resultado);

