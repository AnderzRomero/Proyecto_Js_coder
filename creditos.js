// 1.... Simulador de Creditos Bancarios

// Solicitamos los datos necesarios para realizar la simulacion del credito

const btnCalcular = document.querySelector("#calcular");
const btnLimpiar = document.querySelector('#Limpiar');
const btnHistorial = document.querySelector("#historial");

function calcularPagosMensuales() {

    let montoPrestamo = document.querySelector("#montoPrestamo").value;
    let plazoEnMeses = document.querySelector("#plazoMeses").value;
    let tasaInteresAnual = document.querySelector("#tasaAnual").value;

    // Convertimos la tasa de interés anual fija a una tasa de interés mensual fija decimal
    const tasaInteresMensual = (tasaInteresAnual / 12);
    console.log(tasaInteresMensual);

    // Calculamos el pago mensual utilizando la fórmula de pagos
    const interesesPrestamoMes = ((montoPrestamo * tasaInteresMensual) / 100);
    const interesesPlazoMeses = (interesesPrestamoMes * plazoEnMeses);
    const pagoMensual = ((montoPrestamo / plazoEnMeses) + interesesPrestamoMes);

    let contenedor = document.createElement("div");
    contenedor.setAttribute('class', 'convertidor convertidor__resultado');
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h2> El pago mensual es de: </h2>
                            <p> <b>$ ${pagoMensual.toFixed(2)}</b></p>
                            <p>El pago de intereses mensuales seria de: <b>$ ${interesesPrestamoMes}</b></p>
                            <p>El pago total de interes por el prestamo seria de : <b>$ ${interesesPlazoMeses}</b></p>`;

    //Agregamos el contenedor creado al main
    document.querySelector("#principalCreditos").appendChild(contenedor);

    const historial ={
        monto: montoPrestamo,
        meses: plazoEnMeses,
        tasaAnual: tasaInteresAnual,
        mensualidad: pagoMensual,
        interesesMes: interesesPrestamoMes,
        totalInteres: interesesPlazoMeses,
    }   

    localStorage.setItem('HistorialCreditos', JSON.stringify(historial))
}

function limpiarDatos() {
    document.querySelector("#montoPrestamo").value = "";
    document.querySelector("#plazoMeses").value = "";
    document.querySelector("#tasaAnual").value = "";
    let resultados = document.getElementsByClassName("convertidor convertidor__resultado");
    for (const resultado of resultados) {
        resultado.remove();
    }
}

function historial() {
    const infHistorialCreditos = localStorage.getItem('HistorialCreditos');
	const ultimoHistorial = (JSON.parse(infHistorialCreditos));

	let contenedorhistorial = document.createElement('div');
	contenedorhistorial.setAttribute('class', 'convertidor convertidor__resultado');
	contenedorhistorial.innerHTML = `<h2>Tu ultima conversion fue: </h2>
									<p>Monto Prestamo:   <b>$ ${ultimoHistorial.monto}</b></p>
									<p>Meses Prestamo:   <b>${ultimoHistorial.meses}</b></p>
									<p>Tasa Interes Anual:   <b>${ultimoHistorial.tasaAnual}%</b></p>
									<p>Mesualidad del prestamo:   <b>$ ${ultimoHistorial.mensualidad}</b></p>
									<p>Intereses Mesuales:   <b>$ ${ultimoHistorial.interesesMes}</b></p>
									<p>Total de interes prestamo:   <b>$ ${ultimoHistorial.totalInteres}</b></p>`;

	//Agregamos el contenedor creado al main
	document.getElementById("principalCreditos").appendChild(contenedorhistorial);

}

btnCalcular.onclick = calcularPagosMensuales;
btnLimpiar.onclick = limpiarDatos;
btnHistorial.onclick = historial;
