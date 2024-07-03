console.log("enlazado")

/*Creo Array de objetos */
const PRODUCTOS = [];

/*Tomando Productos desde la pagina */
let botonAddItem = document.getElementById("AddItem")
console.log(botonAddItem)

const MOSTRAR = () => {
    let nombre = document.getElementsByClassName("itemName")[0].value
    let precio = document.getElementsByClassName("itemPrice")[0].value
    let description = document.getElementsByClassName("itemDescription")[0].value
    PRODUCTOS.push({nombre,precio,description})
    console.log(PRODUCTOS)
}
botonAddItem.addEventListener("click",MOSTRAR)
/**/