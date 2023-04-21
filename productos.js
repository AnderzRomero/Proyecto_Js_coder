// 3.... Simulador Venta de productos

//Tienda Tecnologica

// //clase Producto

// class Producto {
//     constructor(id, nombre, precio) {
//         this.id = id
//         this.nombre = nombre
//         this.precio = precio
//     }
// }

// // creamor 4 productos
// const teclado = new Producto(1, 'Teclado Bluetooth', 65000)
// const mouse = new Producto(2, 'MOUSE GAMING EXTREME 7 BOTONES', 27000)
// const bluetooth = new Producto(3, 'adaptador Bluetooth y WIFI', 95000)
// const audifonos = new Producto(4, 'Manos libres', 10000)

// // guardamos los productos
// const productos = [teclado, mouse, bluetooth, audifonos]

// // Agregar opciones de productos al select

// const selectNode = document.querySelector('#listaProductos')
// productos.forEach((producto) => {
//     const optionProd = document.createElement('option')
//     optionProd.innerText = `${producto.nombre}: $ ${producto.precio}`
//     optionProd.setAttribute('id', `${producto.id}`)
//     selectNode.append(optionProd)
// })

// // carrito
// const carrito = []

// // boton añadir producto
// const anadirBtnNode = document.querySelector('#anadirProd')
// anadirBtnNode.onclick = () => {
//     const index = selectNode.selectedIndex
//     const prodSelecionado = productos[index]
//     carrito.push(prodSelecionado)
//     console.log(carrito);
// }

// // Boton Finalizar Compra
// const finalizarBtnNode = document.querySelector('#finalizarCompra')
// finalizarBtnNode.onclick = () => {
//     let totalCompra = 0;
//     carrito.forEach((producto) => {
//         totalCompra = totalCompra + producto.precio
//     })
//     localStorage.setItem('infoHistoriaCompras', JSON.stringify(carrito))
//     localStorage.setItem('totalCompras', JSON.stringify(totalCompra))
//     alert(`El total de tu compra es $${totalCompra}`)
// }

// // Boton Historial Compras

// const btnHistorial = document.querySelector('#historialCompra');

// function historialCompra() {
//     const infoHistorial = localStorage.getItem('infoHistoriaCompras')
//     const arrayHistorial = (JSON.parse(infoHistorial));
//     const historial = [];
//     for (i = 0; i < arrayHistorial.length; i++) {
//         historial.push(arrayHistorial[i].nombre);        
//     }
//     const infoTotalCompras = localStorage.getItem('totalCompras')
//     const totalComprasHisto = (JSON.parse(infoTotalCompras))
//     alert(`Tu ultima Compras fue: \n     
//     ${historial} \n
//     por un valor de compra : $${totalComprasHisto}`);
// }

// btnHistorial.onclick = historialCompra;


const formulario = document.getElementById('formulario')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const titulo = document.getElementById('titulo')
const divProductos = document.getElementById('divProductos')

// click sobre el boton ingresar
formulario.onsubmit = (e) => {
    e.preventDefault();
    const infoUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value
    };
    localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario));
    formulario.remove();
    titulo.innerText = `Bienvenido ${infoUsuario.nombre} ${infoUsuario.apellido}`
};

// mirar si en storage existe infoUsuario
const infoUsuario = JSON.parse(localStorage.getItem('infoUsuario'))
if (infoUsuario) {
    formulario.remove();
    titulo.innerText = `Bienvenido ${infoUsuario.nombre} ${infoUsuario.apellido}`

}

//  clase
class Producto {
    constructor(id, image, nombre, precio, stock) {
        this.id = id
        this.image = image
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const productos = [
    new Producto(1, '../assets/img/iPhone.jpg', 'iPhone', 600, 10),
    new Producto(2, '../assets/img/iPad.jpg', 'iPad', 200, 5),
    new Producto(3, '../assets/img/AirPods.jpg', 'AirPods', 100, 4),
    new Producto(4, '../assets/img/Macbook.jpeg', 'Macbook', 1200, 8),
    new Producto(5, '../assets/img/AppleWatch.jpg', 'AppleWatch', 250, 2),
    new Producto(6, '../assets/img/Samsung Galaxy.jpg', 'Samsung Galaxy', 600, 15),
    new Producto(7, '../assets/img/Xiaomi.jpeg', 'Xiaomi', 500, 25),
    new Producto(8, '../assets/img/Smart TV.jpg', 'Smart TV', 800, 12),
    new Producto(9, '../assets/img/GoPro.jpeg', 'GoPro', 200, 10),
    new Producto(10, '../assets/img/Digital Camera.jpeg', 'Digital Camera', 550, 4)
]

productos.forEach(prod => {
    divProductos.innerHTML +=
        `<div class="card m-3" style="max-width: 540px">
            <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.nombre}">
                    </div>
                    <div class="col-md-8 grid text-center">
                        <div class="card-body">
                            <h5 class="card-title placeholder-wave">${prod.nombre}</h5>
                            <p class="card-text ">Precio: $${prod.precio}</p>
                            <p class="card-text"><small class="text-body-secondary">Unidades Disponibles: <b>${prod.stock}</b></small></p>
                            <button id=${prod.id} class="btn btn-outline-dark placeholder-wave">Agregar</button>
                        </div>
                    </div>
            </div>
        </div>`
})