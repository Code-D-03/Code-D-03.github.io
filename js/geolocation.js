const API_KEY = "5fe7283d4271bae86d85047c2f37bc39";

function onGeoOk(event) {
  const lat = event.coords.latitude;
  const lng = event.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:nth-child(2)");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${Math.round(data.main.temp)}ºC`;
    getIcon(data.weather[0].icon);
  });
}

function getIcon(event) {
  const icon = document.querySelector("#weather img");
  icon.src = `https://openweathermap.org/img/wn/${event}@2x.png`;
}

function onGeoError(){
  alert("Can't find you. No Weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);