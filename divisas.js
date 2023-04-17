// 2....  Simulador de convertidor de divisas

const btnConvertir = document.querySelector('#botonCovertir');
const btnLimpiar = document.querySelector('#botonLimpiar');
const btnHistorial = document.querySelector('#botonHistorial');


function convertirMoneda(cantidad, tasa) {
	return cantidad * tasa;
}

function convertir() {

	// Crear Clase modena
	class Moneda {
		constructor(nombre, id) {
			this.nombre = nombre
			this.id = id
		}
	}

	// definimos un array para contener los objetos con la información de las divisas.            
	const divisas = [];
	divisas.push(new Moneda('Dolares Americanos', 'USD'));
	divisas.push(new Moneda('Euros', 'EUR'));
	divisas.push(new Moneda('Libras Esterlinas', 'GBP'));
	divisas.push(new Moneda('Yenes Japoneses', 'JPY'));
	divisas.push(new Moneda('Pesos Mexicanos', 'MXN'));

	// Obtener la moneda origen, la moneda de destino y el monto a cambiar	
	let monedaOrigen = document.getElementById("divisa-origen").value;
	let monedaDestino = document.getElementById("divisa-destino").value;
	let cantidad = document.getElementById("monto").value;

	//variable para condicion de moneda correcta
	let escogioMoneda = false
	let infMonedaEscogida;

	while (escogioMoneda === false) {
		if (monedaOrigen === "USD") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('USD'))
		} else if (monedaOrigen === "EUR") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('EUR'))
		} else if (monedaOrigen === "GBP") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('GBP'))
		} else if (monedaOrigen === "JPY") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('JPY'))
		} else if (monedaOrigen === "MXN") {
			escogioMoneda = true
			infMonedaEscogida = divisas.filter((el) => el.id.includes('MXN'))
		} else {
			break
		}
	}

	// console.log("Divisa escogida es: " + infMonedaEscogida[0].nombre);

	//variable para condicion de moneda correcta
	let escogidaConvertir = false
	let infMonedaConvertir;

	while (escogidaConvertir === false) {
		if (monedaDestino === "USD") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('USD'))
		} else if (monedaDestino === "EUR") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('EUR'))
		} else if (monedaDestino === "GBP") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('GBP'))
		} else if (monedaDestino === "JPY") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('JPY'))
		} else if (monedaDestino === "MXN") {
			escogidaConvertir = true
			infMonedaConvertir = divisas.filter((el) => el.id.includes('MXN'))
		} else {
			break;
		}
	}
	// console.log('Divisa escogida es:  ' + infMonedaConvertir[0].nombre);

	// Definimos las tasas de conversión
	let tasa;

	if (monedaOrigen === "USD" && monedaDestino === "EUR") {
		tasa = 0.94;
	} else if (monedaOrigen === "USD" && monedaDestino === "JPY") {
		tasa = 135.84;
	} else if (monedaOrigen === "USD" && monedaDestino === "GBP") {
		tasa = 0.83;
	} else if (monedaOrigen === "USD" && monedaDestino === "MXN") {
		tasa = 17.96;
	} else if (monedaOrigen === "EUR" && monedaDestino === "USD") {
		tasa = 1.07;
	} else if (monedaOrigen === "EUR" && monedaDestino === "JPY") {
		tasa = 144.67;
	} else if (monedaOrigen === "EUR" && monedaDestino === "GBP") {
		tasa = 0.88;
	} else if (monedaOrigen === "EUR" && monedaDestino === "MXN") {
		tasa = 19.09;
	} else if (monedaOrigen === "JPY" && monedaDestino === "USD") {
		tasa = 0.0074;
	} else if (monedaOrigen === "JPY" && monedaDestino === "EUR") {
		tasa = 0.0069;
	} else if (monedaOrigen === "JPY" && monedaDestino === "GBP") {
		tasa = 0.0061;
	} else if (monedaOrigen === "JPY" && monedaDestino === "MXN") {
		tasa = 0.13;
	} else if (monedaOrigen === "GBP" && monedaDestino === "USD") {
		tasa = 1.20;
	} else if (monedaOrigen === "GBP" && monedaDestino === "EUR") {
		tasa = 1.13;
	} else if (monedaOrigen === "GBP" && monedaDestino === "JPY") {
		tasa = 163.43;
	} else if (monedaOrigen === "GBP" && monedaDestino === "MXN") {
		tasa = 21.61;
	} else if (monedaOrigen === "MXN" && monedaDestino === "USD") {
		tasa = 0.056;
	} else if (monedaOrigen === "MXN" && monedaDestino === "EUR") {
		tasa = 0.052;
	} else if (monedaOrigen === "MXN" && monedaDestino === "GBP") {
		tasa = 0.046;
	} else if (monedaOrigen === "MXN" && monedaDestino === "JPY") {
		tasa = 7.57;
	}

	const resultado = convertirMoneda(cantidad, tasa);

	let contenedor = document.createElement("div");
	contenedor.setAttribute('class', 'convertidor convertidor__resultado');
	//Definimos el innerHTML del elemento con una plantilla de texto
	contenedor.innerHTML = `<h2> Resultado es: </h2>
							<p> <b>${cantidad}</b>   ${infMonedaEscogida[0].nombre} = <b>${resultado.toFixed(2)}</b>    ${infMonedaConvertir[0].nombre}</p>`;

	//Agregamos el contenedor creado al main
	document.getElementById("principal").appendChild(contenedor);

	const historial = {
		monto: cantidad,
		escogioMoneda: infMonedaEscogida[0].nombre,
		result: resultado,
		convertida: infMonedaConvertir[0].nombre
	}
	console.log(historial);

	localStorage.setItem('infoHistorialDivisas', JSON.stringify(historial))

}

function limpiarDatos() {
	document.getElementById("divisa-origen").value = "";
	document.getElementById("divisa-destino").value = "";
	document.getElementById("monto").value = "";
	let resultados = document.getElementsByClassName("convertidor convertidor__resultado");
	for (const resultado of resultados) {
		resultado.remove();
	}
}

function historialConversion() {
	const infHistorialDivisa = localStorage.getItem('infoHistorialDivisas');
	const ultimoHistorial = (JSON.parse(infHistorialDivisa));

	let contenedorhistorial = document.createElement('div');
	contenedorhistorial.setAttribute('class', 'convertidor convertidor__resultado');
	contenedorhistorial.innerHTML = `<h2>Tu ultima conversion fue: </h2>
									<p>monto:   <b>${ultimoHistorial.monto}</b></p>
									<p>Divisa a Convetir:   <b>${ultimoHistorial.escogioMoneda}</b></p>
									<p>Resultado:   <b>${ultimoHistorial.result}</b></p>
									<p>Divisa Equivalente:   <b>${ultimoHistorial.convertida}</b></p>`;

	//Agregamos el contenedor creado al main
	document.getElementById("principal").appendChild(contenedorhistorial);

}

btnConvertir.onclick = convertir;
btnLimpiar.onclick = limpiarDatos;
btnHistorial.onclick = historialConversion;