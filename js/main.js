const PRODUCTOS = [
    {
        nombre: "Manzanas",
        descripcion: "Importadas desde paraguay.",
        precio: 4,
        posicion: 1,
        cantidad: 1        
    },
    {
        nombre: "Peras",
        descripcion: "Importadas desde Australia.",
        precio: 6,
        posicion: 2,
        cantidad: 1  
    },
    {
        nombre: "Aguacates",
        descripcion: "Los Mejores del mundo.",
        precio: 10,
        posicion: 3,
        cantidad: 1  
    },
    {
        nombre: "Melones",
        descripcion: "Especiales, super dulces.",
        precio: 7,
        posicion: 4,
        cantidad: 1  
    },
    {
        nombre: "Papas",
        descripcion: "Importadas desde Alemaña.",
        precio: 3.5,
        posicion: 5,
        cantidad: 1  
    },
    {
        nombre: "duraznos",
        descripcion: "Deliciosos.",
        precio: 5,
        posicion: 6,
        cantidad: 1  
    }
]
console.log(PRODUCTOS)

const crearHtml = () => {

    const agregarHtml = document.getElementById("AgregarProductos")
    console.log(agregarHtml)

    agregarHtml.innerHTML = "";

    PRODUCTOS.forEach(item => {

        let cardItem = `
            <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${item.nombre}</h5>
                        <p class="card-description mb-2 text-body-secondary">${item.descripcion}</p>
                        <p class="card-precio">${item.precio}</p>
                        <button id="boton${item.posicion}" class="card-link" onclick="agregarAlCarrito(${item.posicion})">Agregar a Carrito</button>
                    </div>
                </div>
            </div>
            `
        agregarHtml.innerHTML += cardItem;
        console.log(cardItem)
    });
}
crearHtml();

console.log("funcion agregar al carrito")

const carrito = [];

const agregarAlCarrito = (posicion) => {
    const producto = PRODUCTOS.find(item => item.posicion === posicion);
    if (producto) {
        carrito.push(producto);
        console.log(`Producto "${producto.nombre}" agregado al carrito.`);
        console.log("Carrito actual:", carrito);
    }
    storage()
};

function storage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    }