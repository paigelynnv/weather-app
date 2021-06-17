function formatDate(timestamp) {
  let Date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemp(response) {
  let tempElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  celciusTemp = response.data.main.temp;

  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  tempElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formateDate(response.date.dt * 1000);
}

function search {
  let apiKey = "2fdf8a69bf0d67738ab9917d87bd1637";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
  &units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElemenet = document.querySelector("#city-input");
  search(cityInputElemenet.value);
}

function showfahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = (celciusTemp * 9)/ 5 + 32;
  alert(fahrenheitTemp);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = Math.round(fahrenheitTemp);
  celicusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

}

function showcelciusTemp(event){
  event.preventDefault();
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = Math.rounf(celciusTemp);
   celicusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");

}

let celciusTemp = null;


search("New York");

let form = document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showfahrenheitTemp);

let celicusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showcelciusTemp);