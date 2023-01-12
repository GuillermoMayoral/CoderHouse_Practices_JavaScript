/*
setTimeout(()=>{
    console.log("proceso asincronico");
}, 5000);
//salida -> *despues de 5 segundos* proceso asincronico


//----

console.log("primer proceso");

setTimeout(()=>{
    console.log("mitad del proceso");
}, 3000);

console.log("final del proceso");
*/
//salida ->
//primer proceso
//final del proceso
//*despues de 5 segundos* mitad del proceso

//Promesas

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve("Descuento aplicado");
    } else {
        reject("No se puede aplicar el descuento");
    }
})

aplicarDescuento //se usa junto a una promesa | Funciona como un console.log
    .then((resultado) => {
        console.log(resultado); //.then interpreta que "resultado" es el "resolve" de la promesa
    })
    .catch((error) => {
        console.log(error); //.catch interpreta que "error" es el "reject" de la promesa
    })



//ejemplo de promesas
const products = [{
        id: 1,
        nombre: "producto1",
        precio: 1000
    },
    {
        id: 2,
        nombre: "producto2",
        precio: 1500
    },
    {
        id: 3,
        nombre: "producto3",
        precio: 2000
    },
]

const findProdById = (id) => {
    const prod = productos.find((item) => item.id === id);
    return new Promise((resolve, reject) => {
        if (prod) {
            resolve(prod);
        } else {
            reject("No se encuentra el producto");
        }
    });
};

findProdById(3)
    .then((prod) => console.log(prod))
    .catch((err) => console.log(err));