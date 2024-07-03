/*Creo Array de objetos */
const PRODUCTOS = [];

/* Constructor de Objetos */
function Item(nombre,precio,description){
    this.name = nombre;
    this.price = precio;
    this.descrip = description;
}

/*Tomando Productos desde la pagina */
let botonAddItem = document.getElementById("AddItem")

const MOSTRAR = () => {
    /*tomamos los elementos de los inputs */
    let nombre = document.getElementsByClassName("itemName")[0].value
    let precio  = document.getElementsByClassName("itemPrice")[0].value
    let description  = document.getElementsByClassName("itemDescription")[0].value
    /*Nuevo objeto */
    let newItem = new Item(nombre, precio, description)
    console.log(newItem)
    /*pusheamos al array en forma de objeto */
    PRODUCTOS.push(newItem)
    console.log(PRODUCTOS)
}
botonAddItem.addEventListener("click",MOSTRAR)

/**/