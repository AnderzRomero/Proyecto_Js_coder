const formulario = document.querySelector('#formulario')
const inputNombre = document.querySelector('#nombre')
const inputApellido = document.querySelector('#apellido')
const titulo = document.querySelector('#titulo')
const divProductos = document.querySelector('#divProductos')
const parrafoTotal = document.querySelector('#total')

// click sobre el boton Ingresar
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
        `<div class="card m-3" style="max-width: 400px">
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


//guardar productos en carrito
const carrito = []

//se grega la funcion en cada boton de los productos agregar
const botonesAgregar = document.querySelectorAll(".btn-outline-dark")
botonesAgregar.forEach(boton => {
    boton.onclick = () => {
        const producto = productos.find(producto => producto.id === parseInt(boton.id))

        const prodCarrito = {
            id: producto.id,
            image: producto.image,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
        }
        const indexProd = carrito.findIndex(prod => prod.id === prodCarrito.id)

        indexProd === -1 ? carrito.push(prodCarrito) : carrito[indexProd].cantidad++

        Toastify({
            text: "Se agrego tu producto al carrito!",
            className: "info",
            duration: 5000,
            gravity: 'bottom',
            position: 'right',
            style: {
                background: "linear-gradient(90deg, rgba(50,57,56,1) 0%, rgba(118,190,198,1) 100%)",
                border: "1px solid #fff",
            }
        }).showToast();
    }

})

// boton ir al carrito de compras
const irCarritoLogo = document.querySelector('#irCarritoLogo')
const irCarrito = document.querySelector('#irCarrito')
const thead = document.querySelector('#thead')
const tbody = document.querySelector('#tbody')
const divFinalizar = document.querySelector('#divFinalizar')
const btnMensaje = document.querySelector('#btnMensaje')
const btnVaciar = document.querySelector('#btnVaciar')
const btnSegirCompra = document.querySelector('#btnSegirCompra')
const popup = document.querySelector('#popup')

irCarritoLogo.onclick = () => {
    divProductos.remove();
    irCarritoLogo.remove();
    irCarrito.remove();
    titulo.remove();
    titulocarro.innerText = `Productos en el carrito`;

    thead.innerHTML = ` 
        <tr>
            <th scope="col"></th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
        </tr>`

    let totalCompra = 0;
    carrito.forEach(prod => {
        totalCompra += prod.cantidad * prod.precio
        tbody.innerHTML += `
            <tr class="align-middle">            
                <td><img src="${prod.image}" class="img-thumbnail" alt="${prod.nombre}"></td>
                <td>${prod.nombre}</td>
                <td>${prod.cantidad}</td>
                <td>$ ${prod.cantidad * prod.precio}</td>
            </tr>`
    })
    divFinalizar.innerHTML = `
        <div>
            <button id="finalizarCompra" class="button close">Finalizar Compra</button>        
        </div>`

    btnMensaje.innerHTML = `
        <div>
            <button id="btnMensaje" class="button slide">Enviar Mensaje</button>
        </div>`

    btnVaciar.innerHTML = `
        <div>
            <button id="btnVaciar" class="button fill">Vaciar Carrito</button>        
        </div>`

    btnSegirCompra.innerHTML = `
        <div>
            <button id="btnSegirCompra" class="button raise">Seguir Comprando</button>
        </div>`


    // Mostrar Popup-mensaje de datos
    function mostrarPopup() {
        document.getElementById("popup").style.display = "flex";
    }

    // Cerrar Popup-mensaje de datos
    function cerrarPopup() {
        document.getElementById("popup").style.display = "none";
    }

    // Obtener el botón para mostrar el Popup-mensaje de datos
    let botonAbrir = document.getElementById("btnMensaje");


    // Asignar función para mostrar el Popup-mensaje de datos al hacer clic en el botón
    botonAbrir.onclick = () => {
        mostrarPopup();

        setTimeout(() => {
            cerrarPopup();
        }, 20000)
    }


    divFinalizar.onclick = () => {
        Swal.fire({
            title: 'Estas seguro de realizar la compra?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#006600',
            cancelButtonColor: '#CC0033',
            confirmButtonText: 'Si, Comprar!'
        }).then((result) => {
            if (result.isConfirmed) {
                tbody.remove();
                thead.remove();
                divFinalizar.remove();
                titulocarro.remove();
                parrafoTotal.innerHTML = `<div id="delayMsg"></div>`;
                titulo.innerText = `Gracias por la compra Vuelve Pronto!`;
                Swal.fire(
                    'Compra realizada!',
                    'Sus productos han sido comprados.',
                    'success'
                )
                function delayRedirect() {
                    document.getElementById('delayMsg').innerHTML = `Por favor espera, serás redirigido después <span id="countDown">5</span> seconds....`;

                    let count = 5;
                    setInterval(function () {
                        count--;
                        document.getElementById('countDown').innerHTML = count;
                        if (count == 0) {
                            window.location = 'productos.html';
                        }
                    }, 1000);
                }
                delayRedirect();
            }
        })
    }

    btnVaciar.onclick = () => {
        const divCarrito = document.querySelector('#divCarrito');
        const carritoVacio = document.querySelector('#carritoVacio');

        divCarrito.remove();
        carritoVacio.innerHTML = `<div><h3>Carrito vacio</h3></div>`;

    }

    btnSegirCompra.onclick = () => {
        window.location = 'productos.html'
    }

    parrafoTotal.innerText = `El total de tu compra es: $ ${totalCompra}`
}


