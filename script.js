function formatDate(date){
let hours = currentTime.getHours();
is (hours < 10) {
  hours = `0${hours}`;
}

let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let weekDay = currentTime.getDay();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


  return `${weekDays[weekDay]} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
let searchForm = document.querySelector("#search-form");



searchForm.addEventListener("submit", search);

dateElement.innerHTML = formatDate(currentTime);




function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let message = `It is ${temp}° in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

function search(event) {
  event.preventDefault();
  let apiKey = "2fdf8a69bf0d67738ab9917d87bd1637";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
}

function getPosition(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let units = imperial
let apiEndpoint = "api.openweathermap.org/data/2.5/weather?"
let apiKey = "2fdf8a69bf0d67738ab9917d87bd1637"
let apiUrl = `${apiEndpoint}lat=${latitude}&long=${longitude}&appid=${apiKey}&units=${units}`;
}


axios.get(apiUrl).then(showTemp);

