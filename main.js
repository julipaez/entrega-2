const Zapatilla = function(nombre, talle, precio, stock){

this.nombre = nombre
this.talle = talle
this.precio = precio
this.stock = stock
}


let zapatilla1 = new Zapatilla ("adistar",35,100000,5)
let zapatilla2 = new Zapatilla ("ultrabounce",40,97500,10)
let zapatilla3 = new Zapatilla ("forum",37,174000,15)
let zapatilla4 = new Zapatilla ("supestar",36,104000,15)
let zapatilla5 = new Zapatilla ("forum low ",38,167000,8)

let lista = [zapatilla1,zapatilla2,zapatilla3,zapatilla4,zapatilla5]

function filtrarZapatilla(){

let palabraClave = prompt("Bienvenido, ingresa el nombre del Calzado").toLowerCase().trim()
let resultado = lista.filter((x)=> x.nombre.toLowerCase().includes(palabraClave))

if (resultado.length >0){
    console.table(resultado)
} else {
    alert("Lo sentimos las zapatillas " + palabraClave + " no se encuentran disponibles")
}
}

function agregarZapatilla(){

let nombre = prompt("Ingresa el nombre del Calzado").toLowerCase().trim()
let precio = parseFloat(prompt("Ingresa el precio del Calzado"))
let talle = parseFloat(prompt("Ingresa el talle del Calzado"))
let stock = parseFloat(prompt("Ingresa el stock del Calzado"))

if(isNaN(stock) || isNaN(talle) || isNaN(precio) || nombre ==""){
    alert("Por favor, ingresa valores válidos")
    return
}

let zapatilla = new Zapatilla (nombre,precio,talle,stock)

if(lista.some((p)=>p.nombre === zapatilla.nombre)){
    alert("No es posible agregar el producto porque ya existe")
    return
}

lista.push(zapatilla)
console.table(lista)
}

