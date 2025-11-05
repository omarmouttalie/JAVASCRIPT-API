 const weatherForm = document.querySelector('.weatherForm');
 const button = document.getElementById('submit-btn');
 const cityInput = document.querySelector('.cityInput');
 const card = document.querySelector('.card');
 const apiKey = "53137df62105f49aee6aa184931b562e";

button.addEventListener("click", async event => {

   event.preventDefault();

   const city = cityInput.value.trim();

    if (city) {

        try {
            const WeatherData = await getWeatherData (city);
            displayWeatherInfo(WeatherData);
        }

        catch(error) {
            console.error(error);
            displayError(error);
        }
     } else {
         displayError("Please Enter a City!");
         return;
   }
 } );

async function getWeatherData(city) {   

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);

    console.log(response);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");

    } 
    return await response.json();
 }

 function displayWeatherInfo(data) {
    
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = `${description}`;
    weatherEmoji.textContent = getWeatherEmoji(id);

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");


 }

 function getWeatherEmoji(weatherId) {

    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return "🌩️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }

 }

 function displayError(message) {
     const errorDisplay = document.createElement("p");
     errorDisplay.textContent = message;
     errorDisplay.classList.add("errorDisplay");

     card.textContent = "";
     card.style.display = "flex";
     card.append(errorDisplay);
}