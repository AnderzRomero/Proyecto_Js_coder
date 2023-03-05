//Simulador de convertidor de divisas

/* 
cada moneda 
{
    nombre
    id
    valor
} 
*/

// Crear Clase modena

class Moneda {
    constructor(nombre, id, valor) {
        this.nombre = nombre
        this.id = id
        this.valor = valor
    }
}

const dolar = new Moneda('Dolares Americanos', 'USD', 4788)
const euro = new Moneda('Euros', 'EUR', 5100)
const libras = new Moneda('Libras Esterlinas', 'GBP', 5763)
const yenes = new Moneda('Yenes Japoneses', 'JPY', 35)
const pesos = new Moneda('Pesos Mexicanos', 'MXN', 266)

let from = parseInt(prompt("Escoge la moneda que desea convertir  1. USD - 2. EUR - 3. GBP - 4. JPY - 5. MXN"));

//variable para condicion de moneda correcta
let escogioMoneda = false

let infMonedaEscogida

while (escogioMoneda === false) {
    if (from === 1) {
        escogioMoneda = true
        infMonedaEscogida = dolar
    } else if (from === 2) {
        escogioMoneda = true
        infMonedaEscogida = euro
    } else if (from === 3) {
        escogioMoneda = true
        infMonedaEscogida = libras
    } else if (from === 4) {
        escogioMoneda = true
        infMonedaEscogida = yenes
    } else if (from === 5) {
        escogioMoneda = true
        infMonedaEscogida = pesos
    } else {
        from = parseInt(
            prompt(
                "Escoge UNA moneda correcta  1. USD - 2. EUR - 3. GBP - 4. JPY - 5. MXN"
            ));
    }
}
alert('Divisa escogida es:  '+ infMonedaEscogida.nombre +" " +infMonedaEscogida.id);
console.log('infoMoneda', infMonedaEscogida);

let to = parseInt(prompt("convertir A: 1. USD - 2. EUR - 3. GBP - 4. JPY - 5. MXN"));

let escogidaConvertir = false
let infMonedaConvertir

while (escogidaConvertir === false) {
    if (to === 1) {
        escogidaConvertir = true
        infMonedaConvertir = dolar
    } else if (to === 2) {
        escogidaConvertir = true
        infMonedaConvertir = euro
    } else if (to === 3) {
        escogidaConvertir = true
        infMonedaConvertir = libras
    } else if (to === 4) {
        escogidaConvertir = true
        infMonedaConvertir = yenes
    } else if (to === 5) {
        escogidaConvertir = true
        infMonedaConvertir = pesos
    } else {
        to = parseInt(
            prompt(
                "Escoge UNA moneda correcta  1. USD - 2. EUR - 3. GBP - 4. JPY - 5. MXN"
            ));
    }
}

const cantidad = parseFloat(prompt("Ingrese la cantidad de dinero a convertir"));


// alert('Divisa escogida es:  '+ infMonedaConvertir.nombre +" " +infMonedaConvertir.id);
console.log('infoMoneda', infMonedaConvertir, cantidad);

