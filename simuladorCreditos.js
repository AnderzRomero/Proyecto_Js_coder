//Simulador de Creditos Bancarios

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

//Solicitamos los datos necesarios para realizar la simulacion del credito
let montoPrestamo = parseFloat(prompt("Ingrese el monto de dinero que necesitas"));
let plazoEnMeses = parseInt(prompt("Ingrese ¿A cuantos meses?"));
const tasaInteresAnual = 12;


const pagoMensual = calcularPagosMensuales(montoPrestamo, tasaInteresAnual, plazoEnMeses);

alert(`El pago mensual es de ${pagoMensual} pesos.`);