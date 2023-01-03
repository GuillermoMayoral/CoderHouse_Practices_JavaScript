STORAGE - JS

temario
-localstorage

> ----------------------------- localStorage y sessionStorage

> ----- Crear claves. Los metodos son los mismos para ambos tipos de storage

localStorage.setItem('nombre','Emiliano');
localStorage.setItem('apellido','Velazquez');
localStorage.setItem('edad',24);
localtorage.setItem('esMayor',true);

sessionStorage.setItem('nombre','Martina');
sessionStorage.setItem('apellido','DiMaria');
sessionStorage.setItem('edad',15);
sessionStorage.setItem('esMayor',false);

> ----- Si vuelvo a guardar una clave que ya existe, voy a sobreescribir su valor

sessionStorage.setItem('edad',16);

> ----------------------------- Uso info del form para guardarla en el storage

let emailUsuario = document.getElementById('emailAddress');
let btnLogin = document.getElementById('btnLogin');

> ----- La capturo del DOM mediante un botón, y la guardo

btnLogin.addEventListener('click',()=>{
localStorage.setItem('email',emailUsuario.value);
})

> ----------------------------- Recuperar información desde el storage

let nombreUsuario = localStorage.getItem('nombre');
console.log(nombreUsuario);
let edadUsuario = sessionStorage.getItem('edad');
console.log(edadUsuario);

> ----- Puedo averiguar cuantas claves tengo guardadas, usando la propiedad length

console.log(sessionStorage.length);

> ----------------------------- Puedo acceder a las claves del storage usando key

for (let i = 0; i < sessionStorage.length; i++) {
let clave =sessionStorage.key(i);
let valor = sessionStorage.getItem(clave);
console.log('Clave: ' + clave);
console.log('Valor: ' +valor);
}

> ----- Por defecto, los valores se guardan como strings, independientemente del tipo de dato original. Y se recuperan también como strings.

> ----------------------------- JSON

let flor = {
user: "Flor",
pass: 123,
esCasada:true
}

-Esto solo dara [object] necesitamos usar json para que de valores del objeto
sessionStorage.setItem('user',flor);
let usuaria = sessionStorage.getItem('user');
console.log(usuaria);

> ----- transformar todo a string

console.log(JOSN.stringify(flor))

> ----- guardar un dato con JSON

sessionStorage.setItem('user', JSON.stringify(flor))

> ----- recuperar texto plano en un objeto con json

> con esto creamos un objeto

let usuaria = JSON.parse(sessionStorage.getItem('user'));

console.log(usuaria)

> ----- RECAPITULANDO guardar un string u object

let carrito = [{nombre:'papas',cantidad:3,marcas:'Pringles'},{nombre:'cerveza',cantidad:1,marcas:'quilmes'}]

localStorage.setItem('carritoEnStorage',JSON.stringify(carrito));

console.log(json.parse(localStorage.getItem('carritoEnStorage)));

> -----------------------------Remover claves individuales

sessionStorage.removeItem('carritoEnStorage');

> -----------------------------Limpiar todo el storage

sessionStorage.clear();
