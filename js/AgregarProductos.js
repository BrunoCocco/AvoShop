/*Creo Array de objetos */
const PRODUCTOS = [];

/* Constructor de Objetos */
class Item {
    constructor(nombre, precio, description) {
        this.name = nombre;
        this.price = precio;
        this.descrip = description;
    }
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
    /*corre la funcion storage */
    storage(PRODUCTOS)
    console.log(PRODUCTOS)
}
botonAddItem.addEventListener("click",MOSTRAR)

/*Aqui Agrego datos al storage */
function storage(){
localStorage.setItem("datos", JSON.stringify(PRODUCTOS));
}