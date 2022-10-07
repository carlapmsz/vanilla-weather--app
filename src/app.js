let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.73&lon=-73.99&appid=2ff29bed3181c3526c35cc5408037f85&units=metric";

console.log(apiURL);
axios.get(apiURL).then(displayTemperature);

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
