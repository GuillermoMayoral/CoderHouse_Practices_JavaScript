EVENTOS
-Como usar un evento (con funcion simple y con parametros).
-eventos mouse:

> click
> onclick
> onmousemove
> onmouseover
> onmouseout

> -----------------------------Primero llamamos del DOM los elementos a enlazar con eventos.

const btnSaludoGenerico = document.getElementById('generico'),
btnSaludoPersonalizado = document.getElementById('personalizado'),
titulo = document.querySelector('.codertitulo'),
btnTest = document.getElementById('prueba'),
inputNombre = document.querySelector('#inputNombre'),
caja = document.querySelector('.embajada'),
inputPassword = document.querySelector('#inputPassword'),
fotoBotellas = document.getElementById('imgBotellas');

> -----------------------------addEventListener()
> -----Primero debemos crear una funcion para el evento:

function saludarGenerico() {
alert("Hola!");

-----Ahora tenemos dos opciones para el evento

> > Primera opción, usar el método addEventListener
> > Podemos nombrar el evento que queremos escuchar, así (acá es el evento 'click')

btnSaludoGenerico.addEventListener('click', saludarGenerico);

> > O podemos guardar el nombre del evento en una variable y pasarlo así al addEventListener

let evento = 'click';
btnSaludoGenerico.addEventListener(evento, saludarGenerico);

> > Segunda opción, usar la propiedad on (onclick, onmousemove, onkeypress, onchange, etc)

btnSaludoGenerico.onclick = saludarGenerico;

btnSaludoPersonalizado.onclick = () => {
saludarPersonalizado('Eli')

> -----------------------------Ejecutar funcion con parametros

function saludarPersonalizado(nombre) {
alert('Hola, ' + nombre);
}

> > No puedo pasar funciones que precisan parámetros directamente al addEventListener
> > FORMA INCORRECTA, LOS '()' HARA QUE LA FUNCTION SE EJECUTE SOLA:
> > btnSaludoPersonalizado.addEventListener('click',saludarPersonalizado('Flor'));

> > Forma correcta

btnSaludoPersonalizado.addEventListener('click', ()=>{
let nombre = prompt('Ingresa tu nombre');
saludarPersonalizado(nombre);
})

> -----------------------------Eventos Mouse
> -----.onmouseover y .onmouseout. Sirve para dar evento al estar sobre un elemento y salir de este elemento

caja.onmouseover = () => {
caja.style.backgroundImage = 'url("./img/estados.jpg")';
console.log('Estados Unidos');
}

caja.onmouseout = () => {
caja.style.backgroundImage = 'url("./img/australia.jpg")';
console.log('Australia');

> -----.onclick

btnTest.onclick = () => {
console.log('Hiciste click en el boton');}

> -----.onmousemove

btnTest.onmousemove = () => {
console.log('Moviste el mouse por acá');
}

> -----------------------------Radios Input Event

let radios = document.querySelectorAll('input[type="radio"]') ->traemos todos los radios.

> > -----Atención que esta línea no funciona, porque no podemos agregar de una sola vez el evento a todos los elementos del nodeList:
> > radios.addEventListener(('click', () => {
> > console.log('Hiciste click en el radiobutton');
> > }))

> > -----Así se agregan eventos a un nodeList

radios.forEach(item=>{
item.addEventListener('click',()=>{
console.log('Hiciste click en el radiobutton '+item.value);
})
})

> > -----O con un for...of

for (const radio of radios) {
radio.addEventListener('click',()=>{
console.log('Hiciste click en el radiobutton '+radio.value);
})
