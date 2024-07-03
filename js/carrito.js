const COMPRA = []

/*funcion para chequiar storage */
function checkStorage(){
    const datosStorage = localStorage.getItem('datos');
    /*parseo los datos del navegador */
    let datosparseados = JSON.parse(datosStorage)
    /*pusheo los datos al navegador */
    COMPRA.push(datosparseados)
}

/*traigo los datos del navegador */
checkStorage();

/*muestro el array de COMPRA */
console.log(COMPRA)


let peras = document.getElementById("peras");
let manzana = document.getElementById("manzana");
let palta = document.getElementById("palta");

const agregarPera = () => {
    console.log("se agrego al carrito")
    let pera = {
        nombre: "pera",
        precio: "2"
    }
    COMPRA.push(pera)
    console.log(COMPRA)
}
const agregarManz = () => {
    console.log("se agrego al carrito")
    let manzana = {
        nombre: "manzana",
        precio: "1"
    }
    COMPRA.push(manzana)
    console.log(COMPRA)
}

const agregarPalta = () => {
    console.log("se agrego al carrito")
    let palta = {
        nombre: "palta",
        precio: "5"
    }
    COMPRA.push(palta)
    console.log(COMPRA)
}


peras.addEventListener("click", agregarPera)
manzana.addEventListener("click", agregarManz)
palta.addEventListener("click", agregarPalta)