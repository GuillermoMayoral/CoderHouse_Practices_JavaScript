temario

-----------------------------FUNCIONES-----------------------------

-----------------------------funciones sin parametros
function darBienvenida(){
alert("bienvenidos a las funicones")
}

-----------------------------Funciones con parametros

function calcularMultiplicacion(num1,num2){
let resultado= num1 \* num2;
alert("el resultado de multiplicar " + num1 + " x " + num2 +" es: " + resultado);
}

calcularMultiplicacion(2,5); ----> 2 seria num 1 y 5 seria num2

-----------------------------usar funciones dentro de bucles

let precioProd = parseFloat(prompt("ingresa el precio del producto"));
calcularIVA(precioProd);

FOR
for(let i=1;i<4;i++){
let precioProd = parseFloat(prompt("ingresa el precio del producto" + i));
calcularIVA(precioProd);
}

-----------------------------function con parametros y return
function calcularM2(largo, ancho){
let metrosCuad=largo\*ancho;
return metrosCuad;
}

function mostrarResultado (result){
alert("El valor calculado es: "+ result);
}
