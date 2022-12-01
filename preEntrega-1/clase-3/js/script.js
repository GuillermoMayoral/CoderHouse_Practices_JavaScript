//contador de 0 a 9
/*
for(let i = 0; i < 10; i++) {
    alert(i);
}
*/

//contador de 1 a 10
/*
for(let i = 1; i <= 10; i++) {
    alert(i);
}
*/
/*
for(let i = 1; i <= 5; i++){
    console.log("numero de vuelta: " + i);
}
*/

//continue

// for(let i = 1; i <= 10; i++){
//     if(i%2==1){
//         continue;
//     }else{
//         console.log("el numero par es: " + i)
//     }
// }



//Ciclos por condicion - WHILE
//Calculador de promedio de notas

// let contador = 0;
// let sumadorNotas = 0;
// let promedio = 0;

// let nota = parseInt(prompt("ingrese la nota: (-1 para salir)"))

// while(nota != -1){
//     contador = contador + 1;
//     sumadorNotas = sumadorNotas + nota;
//     nota = parseInt(prompt("ingrese la nota: (-1 para salir)"))
// }

// console.log("Se ingresaron " + contador + " notas");
// console.log("la suma de todas las notas es: " + sumadorNotas);
// promedio = sumadorNotas / contador;
// console.log("El promedio de las notas de los " + contador + " alumnos es " + promedio);


//DO... WHILE

// let equipo;

// do{
//     let equipo = prompt("ingresa tu equipo de futbol favorito (s para salir)");
//     if(equipo != "s"){
//     console.log("el equipo ingresado es: " + equipo);
//     }
// }while(equipo!="s");