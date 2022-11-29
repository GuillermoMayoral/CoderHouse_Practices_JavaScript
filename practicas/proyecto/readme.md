temas projecto

-------------------------------------------------------------------------------clase 1
DECLARACION DE VARIABLES

-var

-let

const

    IMPRESION

-console.log

-alert

    INPUTS

-prompt

-parseInt(prompt())

-parseFloat(prompt())

-------------------------------------------------------------------------------clase2

temario

    condicionales

-if

-else if

-else

    OPERADORES

- ==

- ===

- &&

-||

-------------------------------------------------------------------------------clase 3
temario

CICLOS

    -Ciclo por conteo for

for(desde; hasta; actualizacion) {
lo que esta aqui se repetira todo lo que for diga
}

    -continue: seirve para saltarse un caso de un if dentro de un ciclo

for(let i = 1; i <= 10; i++){
if(i%2==1){
continue; <-------
}else{
console.log("el numero par es: " + i)
}
}

WHILE

while(nota != -1){
contador = contador + 1;
sumadorNotas = sumadorNotas + nota;
nota = parseInt(prompt("ingrese la nota: (-1 para salir)"))
}

SWITCH

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

-------------------------------------------------------------------------------clase 4
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
