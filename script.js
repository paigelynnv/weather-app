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
  let tempElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#Wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celciusTemp = response.data.main.temp;

  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  tempElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formateDate(response.date.dt * 1000);
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElemenet = document.querySelector("#city-input");
  search(cityInputElemenet.value);
  console.log(cityInputElemenet.value);
}

function search(city) {
  let apiKey = "2fdf8a69bf0d67738ab9917d87bd1637";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function showfahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = (celciusTemp * 9) / 5 + 32;
  alert(fahrenheitTemp);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = Math.round(fahrenheitTemp);
  celicusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function showcelciusTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = Math.round(celciusTemp);
  celicusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
}

let celciusTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showfahrenheitTemp);

let celicusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showcelciusTemp);
