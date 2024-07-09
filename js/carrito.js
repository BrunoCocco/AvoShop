const COMPRA = []

function checkStorage() {
    const datosStorage = localStorage.getItem('carrito');
    let datosparseados = JSON.parse(datosStorage)
    console.log(datosparseados)
    COMPRA.push(...datosparseados)
}

checkStorage();
console.log(COMPRA)

let mostrarCarro = document.getElementById("mostrarCarrito")

const printCarrito = () => {

    mostrarCarro.innerHTML = "";

    let cantidadTotal = 0;
    let precioTotal = 0;

    COMPRA.forEach(item => {

        cantidadTotal += item.cantidad;
        precioTotal += item.precio * item.cantidad;

        let muestra = `
        <p> tienes "${item.nombre}" en tu carrito </p>
        <p>Por un precio de "${item.precio}"</p>
        `
        mostrarCarro.innerHTML += muestra;
        console.log(muestra)

    })
    let resumen = `
    <h3 class"mt-5">Cantidad total de objetos: ${cantidadTotal}</h3>
    <h2>Precio total: ${precioTotal}</h2>
    `;
    mostrarCarro.innerHTML += resumen;
    console.log(resumen)
}

printCarrito()