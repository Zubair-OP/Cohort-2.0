let search = document.getElementById('searchBtn');
let errorMsg = document.getElementById('errorMsg');
let city = document.getElementById('cityInput');
let temperature = document.getElementById('temperature');
let weatherDesc = document.getElementById('description');
let humidity = document.getElementById('humidity'); 
let windSpeed = document.getElementById('wind');
let cityName = document.getElementById('cityName');


search.addEventListener('click', getWeather)

async function getWeather(){

    let cityValue = city.value

    if (cityValue == "") {
        errorMsg.style.display = 'block';
        errorMsg.innerText = "Please enter city name";
        return;
    }
    
    let apikey = '5211ea6751696976ad25f496b2f8cd51'
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}&units=metric`)

    if (!raw.ok) {
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'
        let data = await raw.json();
        
        temperature.innerText = `${data.main.temp}`;
        humidity.innerText = `${data.main.humidity}`;
        windSpeed.innerText = `${data.wind.speed}`;
        weatherDesc.innerText = data.weather[0].description;
        cityName.innerText = data.name;
    }
}