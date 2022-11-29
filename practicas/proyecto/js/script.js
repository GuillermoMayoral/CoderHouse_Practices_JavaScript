//TEMA PRINCIPAL: Cajas.
/*
QUE SE USARA?

        CLASE 1
-DECLARACION DE VARIABLES (var, let, const)
-IMPRESION 
    console.log()

    alert()

-INPUTS
    prompt()

    parseInt(prompt())

    parseFloat(prompt())

        CLASE 2
-CONDICIONALES 
    if

    else if

    else

OPERADORES
    ==

    ===

    &&

    ||

        CLASE 3
CICLOS
    for(desde; hasta; actualizacion){

    }


    while(){

    }


    do(){

    }while{

    }


    switch(caso){
        case "5":
            ....
        break;
        case "10":
            ....
        break;
        case "15":
            ....
        break;
        }

        CLASE 4
FUNCIONES

SIN PARAMETROS
    function darBienvenida(){
    alert("bienvenidos a las funicones")
    }

CON PARAMETROS
    function sumar(a,b){
    let resultado= a + b;
    alert(resultasdo)
    }

    sumar (3,8);

CON PARAMETROS Y RETURN
    function calcularM2(largo, ancho){
    let metrosCuad=largo\*ancho;
    return metrosCuad;
    }

    function mostrarResultado (result){
    alert("El valor calculado es: "+ result);
    }
*/

let alto;
let ancho;

let area;
let perimetro;
let costo;

let total;


alert("Bienvenido a tu creador de cajas favorito!");

let name1 = prompt("Cual es tu nombre? ");

let box = prompt("Muy bien " + name1 + ", que tamaño de caja buscabas? -grande -mediana -chica");


switch(box){
case "grande":
    alto = 50;
    ancho = 40;
    costo = 100;
break;
case "mediana":
    alto = 40;
    ancho = 30;
    costo = 80;
break;
case "chica":
    alto = 30;
    ancho = 20;
    costo = 60;
break;
default:
    alert("no encontramos: '" + box + "' solo tenemos tamaños -grande -mediana -chica");
}


let tamaño = prompt("Muy bien la caja " + box + " tine una medida de: " + alto + "cm de alto y " + ancho + "cm de ancho, quieres saber algo mas? -area - perimetro -ambas -nada");

if(tamaño=="area"){
    area = alto * ancho;
    alert("La area de su caja es de " + area + "cm².");
}else if(tamaño=="perimetro"){
    perimetro = alto*2 + ancho*2;
    alert("El perimetro de su caja es de " + perimetro + "cm.");
}else if(tamaño=="ambas"){
    area = alto * ancho;
    perimetro = alto*2 + ancho*2;
    alert("La area de su caja es de " + area + "cm² y el perimetro de su caja es de " + perimetro + "cm.");
}else{
    alert("Entendido!!!");
}

let num = parseInt(prompt("La caja " + box + " que usted escogio, cuesta $" + costo + " cuantas cajas va querer?"))

function calcularTotal(precio, cantidad){
    total = precio * cantidad;
}

calcularTotal(costo,num);

alert("Imprimiendo nota... en console")

console.log("nombre: " + name1);
console.log("tamaño: " + box);
console.log("medidas- alto:" + alto + "cm. ancho:" + ancho + "cm");
console.log("Su pedido es:");

for(let i = 1; i <= num; i++){
    console.log("1 caja - serie: " + 000 + i)
}

console.log("total: $" + total);