temario
-El DOM
-nodos element y text
-selectores

-----------------------------El DOM

-----------------------------.getElementById()

-----traer un elemento del dom por ID
let elemento = document.getElementById('parrafoEspecial');
console.log(elementoID);

-----------------------------.getElementsByClassName

-----traer varios elementos del dom por Class
let elementosClass=document.getElementsByClassName('resaltado');
console.log(elementosClass);

-----------------------------.querySelector()
-----Pueden seleccionar un elemento especifico | span es la etiqueta y .resaltado es la clase
let elementoQS = document.querySelector('span.resaltado');
console.log(elementoQS);

-----------------------------.querySelectorAll()
-----pueden seleccionar varios elementos especificos
let todosQS = document.querySelectorAll("span.resaltado");
console.log(todosQS);

let especificoQS = document.querySelectorAll("input[type='text']");
console.log(especificoQS);

-----------------------------.innerText
-----modifica el texto

let titulo = document.getElementById('tituloPrincipal'); ->trae el titulo del DOM

titulo.innerText = 'Nuevo título';

-----------------------------.className
-----asigna clases

titulo.className = 'bg-success text-light'; -> clases de bootstrap

-----------------------------.innerHTML
-----remplazar o modificar una etiqueta
let contenedor = document.querySelector('#teoria');
contenedor.innerHTML +='<p>Soy un nuevo párrafo agregado a través del método innerHTML. Debería aparecer luego de la imagen de DOM. </p>

-----------------------------.createElement
-----crea elementos de forma mas compleja

let nuevoDiv = document.createElement('div');
document.body.appendChild(nuevoDiv);
nuevoDiv.innerHTML = '<footer class="container-fluid bg-warning text-light py-5"><span>Flor Hendel 2022</span></footer>';

-----------------------------.remove()
-----elimina elementos

imagen.remove();

-----------------------------.plantillas literales

let producto ={
id: 1,
nombre: 'SMART TV SAMSUNG 32"HD',
codigo: 'UN32T4300AGCZB',
precio: 65000,
imagen: './img/TV32.jpg',
descripcion_corta: 'Led Smart TV 32"',
descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
}

-----Usando plantillas literales
let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} - $${producto.precio}`;
console.log(plantilla);
