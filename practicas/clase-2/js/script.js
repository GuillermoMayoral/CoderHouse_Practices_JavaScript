let num1 = parseInt(prompt("¿que numero es mayor a 1,000 y menor a infinito?"));

if(num1 > 1000){
    alert("correcto");
}else{
    alert("incorrecto");
}

let saludo = prompt("Menciona un saludo que inicie con 'H':");

if(saludo == "Hola"){
    alert("correcto");
}else{
    alert("incorrecto");
}

let num2 = parseInt(prompt("digita un numero entre 10 y 50:"));

if((num2 > 10)&&(num2 < 50)){
    alert("correcto, tu numerero es 10<" + num2 +"<50");
}else if(num2 <= 10){
    alert("incorrecto, tu numero " + num2 + "<10");
}else{
    alert("incorrecto, tu numero " + num2 + ">50");
}