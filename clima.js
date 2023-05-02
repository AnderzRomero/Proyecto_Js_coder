
let lat = '4.53679312679476';
let long = '-74.11383806779136';
const apiKey = '789a65a58f8c85ce5fd2381911146ef6';
const lang = 'es';

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&lang=${lang}&units=metric`)
    .then(response => response.json())
    .then(rest => {
        console.log(rest)
        let cards = document.getElementById('cards');
        let html = '';

        let dayService = new Date(rest.dt * 1000);

        let day = dayService.getDate();
        let month =
            dayService.getMonth() == 0 ? "Enero" :
            dayService.getMonth() == 1 ? "Febrero" :
            dayService.getMonth() == 2 ? "Marzo" :
            dayService.getMonth() == 3 ? "Abril" :
            dayService.getMonth() == 4 ? "Mayo" :
            dayService.getMonth() == 5 ? "Junio" :
            dayService.getMonth() == 6 ? "Julio" :
            dayService.getMonth() == 7 ? "Agosto" :
            dayService.getMonth() == 8 ? "Septiembre" :
            dayService.getMonth() == 9 ? "Octubre" :
            dayService.getMonth() == 10 ? "Noviembre" :
            dayService.getMonth() == 11 ? "Diciembre" : "";


        let year = dayService.getFullYear();

            let dayOfWeek =
                dayService.getDay() == 0 ? "Domingo" :
                dayService.getDay() == 1 ? "Lunes" :
                dayService.getDay() == 2 ? "Martes" :
                dayService.getDay() == 3 ? "Miércoles" :
                dayService.getDay() == 4 ? "Jueves" :
                dayService.getDay() == 5 ? "Viernes" :
                dayService.getDay() == 6 ? "Sábado" : "";

        html = `
            <div class="card card-1">
                <div class="card__icon"><img src="http://openweathermap.org/img/wn/${rest.weather[0].icon}@2x.png" alt=""></div>
                        <p class="card__icon"><a class="card__link"> ${rest.weather[0].description}</a> </p>
                        <h3 class="card__exit">${dayOfWeek} ${day} de ${month}</h3>
                        <h2 class="card__title">Temperatura ${Math.round(rest.main.temp)} °C</h2>
                        <p class="card__apply">
                        <a class="card__link" href="#">minima: ${Math.round(rest.main.temp_min)} °C - Maxima ${Math.round(rest.main.temp_max)} °C</a>
                        <a class="card__link" href="#">Sensacion termica: ${Math.round(rest.main.feels_like)} °C </a>
                        <a class="card__link" href="#">Humedad: ${Math.round(rest.main.humidity)} % </a>
                        <a class="card__link" href="#">Viento: a ${Math.round(rest.wind.speed)} Km/h </a>
                        </p>                                                                 
                </div>
            `
            cards.innerHTML = html;
    })
    .catch(error => console.error(error));