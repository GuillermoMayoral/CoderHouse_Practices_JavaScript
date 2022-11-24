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
