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

let from = prompt("Escoge la moneda que desea convertir  USD - EUR - GBP - JPY - MXN").toLowerCase();

//variable para condicion de moneda correcta
let escogioMoneda = false

let infMonedaEscogida

while (escogioMoneda === false) {
    if (from === "usd") {
        escogioMoneda = true
        infMonedaEscogida = dolar
    } else if (from === "eur") {
        escogioMoneda = true
        infMonedaEscogida = euro
    } else if (from === "gbp") {
        escogioMoneda = true
        infMonedaEscogida = libras
    } else if (from === "jpy") {
        escogioMoneda = true
        infMonedaEscogida = yenes
    } else if (from === "mxn") {
        escogioMoneda = true
        infMonedaEscogida = pesos
    } else {
        from = prompt(
                "Escoge UNA moneda correcta  USD - EUR - GBP - JPY - MXN"
            );
    }
}
alert('Divisa escogida es:  '+ infMonedaEscogida.nombre +" " +infMonedaEscogida.id);

let to = prompt("convertir A: USD - EUR - GBP - JPY - MXN").toLowerCase();

let escogidaConvertir = false
let infMonedaConvertir

while (escogidaConvertir === false) {
    if (to === "usd") {
        escogidaConvertir = true
        infMonedaConvertir = dolar
    } else if (to === "eur") {
        escogidaConvertir = true
        infMonedaConvertir = euro
    } else if (to === "gbp") {
        escogidaConvertir = true
        infMonedaConvertir = libras
    } else if (to === "jpy") {
        escogidaConvertir = true
        infMonedaConvertir = yenes
    } else if (to === "mxn") {
        escogidaConvertir = true
        infMonedaConvertir = pesos
    } else {
        to = prompt(
                "Escoge UNA moneda correcta  USD - EUR - GBP - JPY - MXN"
            );
    }
}
alert('Divisa escogida es:  '+ infMonedaConvertir.nombre +" " +infMonedaConvertir.id);

const cantidad = parseFloat(prompt("Ingrese la cantidad de dinero a convertir"));


function convert() {    

    let infMonedaEscogida = false
    let escogidaConvertir = false

    // Definimos las tasas de conversión
    let USDEUR = 0.94;
    let USDGBP = 0.83;
    let USDJPY = 135.84;
    let USDMXN = 17.96;

    let EURUSD = 1.07;
    let EURGBP = 0.88;
    let EURJPY = 144.67;
    let EURMXN = 19.09;

    let GBPUSD = 1.20;
    let GBPEUR = 1.13;
    let GBPJPY = 163.43;
    let GBPMXN = 21.61;

    let JPYUSD = 0.0074;  
    let JPYEUR = 0.0069;
    let JPYGBP = 0.0061;
    let JPYMXN = 0.13;

    let MXNUSD = 0.056;
    let MXNGBP = 0.046;
    let MXNJPY = 7.57;
    let MXNEUR = 0.052;


    // Realizar la conversión

    while ((escogidaConvertir === false)&&(infMonedaEscogida === false)) {
        if ((from === "usd" )&&(to === "eur")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * USDEUR;
            return converted;                 
        } else if ((from === "usd" )&&(to === "gbp")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * USDGBP;
            return converted;                 
        } else if ((from === "usd" )&&(to === "jpy")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * USDJPY;
            return converted;                 
        } else if ((from === "usd" )&&(to === "mxn")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * USDMXN;
            return converted;                 
        } else if ((from === "eur" )&&(to === "usd")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * EURUSD;
            return converted;                 
        } else if ((from === "eur" )&&(to === "gbp")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * EURGBP;
            return converted;                 
        } else if ((from === "eur" )&&(to === "jpy")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * EURJPY;
            return converted;                 
        } else if ((from === "eur" )&&(to === "mxn")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * EURMXN;
            return converted;                 
        } else if ((from === "gbp" )&&(to === "usd")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * GBPUSD;
            return converted;                 
        } else if ((from === "gbp" )&&(to === "eur")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * GBPEUR;
            return converted;                 
        } else if ((from === "gbp" )&&(to === "jpy")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * GBPJPY;
            return converted;                 
        } else if ((from === "gbp" )&&(to === "mxn")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * GBPMXN;
            return converted;                 
        }else if ((from === "jpy" )&&(to === "usd")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * JPYUSD;
            return converted;                 
        } else if ((from === "jpy" )&&(to === "eur")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * JPYEUR;
            return converted;                 
        } else if ((from === "jpy" )&&(to === "gbp")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * JPYGBP;
            return converted;                 
        } else if ((from === "jpy" )&&(to === "mxn")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * JPYMXN;
            return converted;                 
        }else if ((from === "mxn" )&&(to === "usd")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * MXNUSD;
            return converted;                 
        } else if ((from === "mxn" )&&(to === "eur")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * MXNEUR;
            return converted;                 
        } else if ((from === "mxn" )&&(to === "gbp")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * MXNGBP;
            return converted;                 
        } else if ((from === "mxn" )&&(to === "jpy")) {
            escogidaConvertir = true
            infMonedaEscogida = true
            let converted = cantidad * MXNJPY;
            return converted;                 
        }
        else {
            alert("no se encuentra en las opciones porfavor escriba la opcion correcta")
            break        
        }
    }     

}
alert("Resultado es: " + convert() +" " + infMonedaConvertir.id);


