var cityBox = document.getElementById("city");
var search = document.getElementById("search");
var cityName = document.getElementById("city-name");
var temp = document.getElementById("temp");
var weather = document.getElementById("weather");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");


search.addEventListener("click", function() 
{
    fetch("http://api.weatherapi.com/v1/current.json?key=81c43d6896cc44ddaa052218232906&q=75054&aqi=yes")
    .then(response => response.json())

    .then(data => {
        var cityValue = cityBox.value;
        var nameValue = data.name;
        var tempValue = data.main.temp;
        var weatherValue = data.weather[0].description;
        var humidityValue = data.main.humidity;
        var windValue = data.wind.speed;
        var iconValue = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconValue + ".png";
        var icon = document.getElementById("icon");
        var iconImg = document.createElement("img");
})

.catch(err => alert("Wrong city name!"))
});