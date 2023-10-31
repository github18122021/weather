// let grabData = fetch('http://api.weatherapi.com/v1/current.json?key=863ba49fd3574cd78f332016233110');

let grabData = async function(city) {
    console.log(city);
    try {
        let fetchApi = await fetch(`http://api.weatherapi.com/v1/current.json?key=863ba49fd3574cd78f332016233110&q=${city}&aqi=yes`);
        let data = await fetchApi.json();
        // console.log(data);
        useData(data);
    } catch(error) {
        console.log(error.message);
    }
}

let cityDesc = document.querySelector(".cityDesc");
let temp = document.querySelector(".temp");
let feelTemp = document.querySelector(".feelTemp");
let humid = document.querySelector(".humid");
let speed = document.querySelector(".speed");

let useData = function(apiData) {
    console.log(apiData.location);
    console.log(apiData.current);
    let location = apiData.location;
    let current = apiData.current;

    cityDesc.textContent = `Weather in ${location.name}`;
    temp.textContent = `Temp: ${current.temp_c}`;
    feelTemp.textContent = `Feel Temp: ${current.feelslike_c}`;
    humid.textContent = `Humidity: ${current.humidity}`;
    speed.textContent = `Wind speed: ${current.wind_kph} km/h`;
}

let city = document.querySelector(".cityName");

city.addEventListener("change", (e) => {
    // console.log(e.target.value);
    let city = e.target.value;
    grabData(city);
})

window.addEventListener("load", (e) => {
    grabData("Toronto");
})


