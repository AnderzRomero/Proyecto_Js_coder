//Menu de Simuladores

let entrada = prompt("ESCRIBA EL NUMERO DEL SIMULADOR QUE REQUIERE:" + "\n" +
    "1.  Creditos bancarios" + "\n" +
    "2.  Cambio de divisas" + "\n" +
    "3.  Venta de productos tecnologicos" + "\n" +
    "4.  Salir"
);
//Repetimos hasta que se ingrese la opcion "4" para salir 
while (entrada != "4") {
    switch (entrada) {
        case "1":
            //Simulador de Creditos Bancarios

            //Solicitamos los datos necesarios para realizar la simulacion del credito
            let montoPrestamo = parseFloat(prompt("Ingrese el monto de dinero que necesitas"));
            let plazoEnMeses = parseInt(prompt("Ingrese ¿A cuantos meses? requiere el prestamo"));
            const tasaInteresAnual = 12;


            function calcularPagosMensuales(monto, tasaInteresAnual, plazoEnMeses) {
                // Convertimos la tasa de interés anual a una tasa de interés mensual decimal
                const tasaInteresMensual = (tasaInteresAnual / 12) / 100;
                console.log(tasaInteresMensual);

                // Calculamos el pago mensual utilizando la fórmula de pagos uniformes
                const numerador = monto * tasaInteresMensual * Math.pow(1 + tasaInteresMensual, plazoEnMeses);
                const denominador = Math.pow(1 + tasaInteresMensual, plazoEnMeses) - 1;
                console.log(numerador, "Intereses");
                const pagoMensual = numerador / denominador;
                console.log(pagoMensual, "Precio mensual");

                // Redondeamos el pago mensual a dos decimales
                return Math.round(((pagoMensual * 100) / 100), 1);
            }

            const pagoMensual = calcularPagosMensuales(montoPrestamo, tasaInteresAnual, plazoEnMeses);

            alert(`El pago mensual es de ${pagoMensual} pesos.`);
            break;

        case "2":
            //Simulador de convertidor de divisas

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

            // Pedimos la moneda origen que se convertira
            let modenaOrigen = prompt("Escoge la moneda que desea convertir:" + "\n" +
                "USD :  " + dolar.nombre + "\n" +
                "EUR :  " + euro.nombre + "\n" +
                "GBP :  " + libras.nombre + "\n" +
                "JPY :  " + yenes.nombre + "\n" +
                "MXN :  " + pesos.nombre).toLowerCase();

            //variable para condicion de moneda correcta
            let escogioMoneda = false
            let infMonedaEscogida

            while (escogioMoneda === false) {
                if (modenaOrigen === "usd") {
                    escogioMoneda = true
                    infMonedaEscogida = dolar
                } else if (modenaOrigen === "eur") {
                    escogioMoneda = true
                    infMonedaEscogida = euro
                } else if (modenaOrigen === "gbp") {
                    escogioMoneda = true
                    infMonedaEscogida = libras
                } else if (modenaOrigen === "jpy") {
                    escogioMoneda = true
                    infMonedaEscogida = yenes
                } else if (modenaOrigen === "mxn") {
                    escogioMoneda = true
                    infMonedaEscogida = pesos
                } else {
                    modenaOrigen = prompt(
                        "Escoge UNA moneda correcta: " + "\n" +
                        "USD :  " + dolar.nombre + "\n" +
                        "EUR :  " + euro.nombre + "\n" +
                        "GBP :  " + libras.nombre + "\n" +
                        "JPY :  " + yenes.nombre + "\n" +
                        "MXN :  " + pesos.nombre
                    );
                }
            }
            alert('Divisa escogida es:  ' + infMonedaEscogida.nombre + " " + infMonedaEscogida.id);

            // Pedimos la moneda destino a la que se convertira
            let modenaDestino = prompt("convertir A:" + "\n" +
                "USD :  " + dolar.nombre + "\n" +
                "EUR :  " + euro.nombre + "\n" +
                "GBP :  " + libras.nombre + "\n" +
                "JPY :  " + yenes.nombre + "\n" +
                "MXN :  " + pesos.nombre).toLowerCase();

            //variable para condicion de moneda correcta
            let escogidaConvertir = false
            let infMonedaConvertir

            while (escogidaConvertir === false) {
                if (modenaDestino === "usd") {
                    escogidaConvertir = true
                    infMonedaConvertir = dolar
                } else if (modenaDestino === "eur") {
                    escogidaConvertir = true
                    infMonedaConvertir = euro
                } else if (modenaDestino === "gbp") {
                    escogidaConvertir = true
                    infMonedaConvertir = libras
                } else if (modenaDestino === "jpy") {
                    escogidaConvertir = true
                    infMonedaConvertir = yenes
                } else if (modenaDestino === "mxn") {
                    escogidaConvertir = true
                    infMonedaConvertir = pesos
                } else {
                    modenaDestino = prompt("Escoge UNA moneda correcta: " + "\n" +
                        "USD :  " + dolar.nombre + "\n" +
                        "EUR :  " + euro.nombre + "\n" +
                        "GBP :  " + libras.nombre + "\n" +
                        "JPY :  " + yenes.nombre + "\n" +
                        "MXN :  " + pesos.nombre
                    );
                }
            }
            alert('Divisa escogida es:  ' + infMonedaConvertir.nombre + " " + infMonedaConvertir.id);

            //pedimos la cantidad de dinero a convertir y la guardamos en la variable 
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

                while ((escogidaConvertir === false) && (infMonedaEscogida === false)) {
                    if ((modenaOrigen === "usd") && (modenaDestino === "eur")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * USDEUR;
                        return converted;
                    } else if ((modenaOrigen === "usd") && (modenaDestino === "gbp")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * USDGBP;
                        return converted;
                    } else if ((modenaOrigen === "usd") && (modenaDestino === "jpy")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * USDJPY;
                        return converted;
                    } else if ((modenaOrigen === "usd") && (modenaDestino === "mxn")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * USDMXN;
                        return converted;
                    } else if ((modenaOrigen === "eur") && (modenaDestino === "usd")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * EURUSD;
                        return converted;
                    } else if ((modenaOrigen === "eur") && (modenaDestino === "gbp")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * EURGBP;
                        return converted;
                    } else if ((modenaOrigen === "eur") && (modenaDestino === "jpy")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * EURJPY;
                        return converted;
                    } else if ((modenaOrigen === "eur") && (modenaDestino === "mxn")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * EURMXN;
                        return converted;
                    } else if ((modenaOrigen === "gbp") && (modenaDestino === "usd")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * GBPUSD;
                        return converted;
                    } else if ((modenaOrigen === "gbp") && (modenaDestino === "eur")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * GBPEUR;
                        return converted;
                    } else if ((modenaOrigen === "gbp") && (modenaDestino === "jpy")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * GBPJPY;
                        return converted;
                    } else if ((modenaOrigen === "gbp") && (modenaDestino === "mxn")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * GBPMXN;
                        return converted;
                    } else if ((modenaOrigen === "jpy") && (modenaDestino === "usd")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * JPYUSD;
                        return converted;
                    } else if ((modenaOrigen === "jpy") && (modenaDestino === "eur")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * JPYEUR;
                        return converted;
                    } else if ((modenaOrigen === "jpy") && (modenaDestino === "gbp")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * JPYGBP;
                        return converted;
                    } else if ((modenaOrigen === "jpy") && (modenaDestino === "mxn")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * JPYMXN;
                        return converted;
                    } else if ((modenaOrigen === "mxn") && (modenaDestino === "usd")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * MXNUSD;
                        return converted;
                    } else if ((modenaOrigen === "mxn") && (modenaDestino === "eur")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * MXNEUR;
                        return converted;
                    } else if ((modenaOrigen === "mxn") && (modenaDestino === "gbp")) {
                        escogidaConvertir = true
                        infMonedaEscogida = true
                        let converted = cantidad * MXNGBP;
                        return converted;
                    } else if ((modenaOrigen === "mxn") && (modenaDestino === "jpy")) {
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
            alert("Resultado es: " + convert() + " " + infMonedaConvertir.id);
            break;

        case "3":

            let menuTienda = prompt("Bienvenidos a HeroSystems" + "\n" +
                "Selecciona la opción a realizar: " + "\n" +
                "1. Ingresar Producto" + "\n" +
                "2. Modificar Producto" + "\n" +
                "3. Eliminar Producto" + "\n" +
                "4. Mostrar Producto" + "\n" +
                "5. Buscar producto" + "\n" +
                "6. Salir"
            );

            while (menuTienda != "6") {
                switch (menuTienda) {
                    case "1":

                        break;

                    case "2":
                        break;
                    case "3":
                        break;
                    case "4":
                        break;
                    case "5":
                        break;
                    case "6":
                        break;                    
                }
            }

            break;
        case "4":
            alert("MUCHAS GRACIAS POR UTILIZAR NUESTROS SIMULADORES");
            break;
        default:
            alert("ESCRIBA LA OPCION CORRECTA")
            break;
    }
    entrada = prompt("ESCRIBA EL NUMERO DEL SIMULADOR QUE REQUIERE:" + "\n" +
        "1.  Creditos bancarios" + "\n" +
        "2.  Cambio de divisas" + "\n" +
        "3.  Venta de productos tecnologicos" + "\n" +
        "4.  Salir");
}