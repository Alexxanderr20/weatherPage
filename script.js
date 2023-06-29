var cityBox = document.getElementById("city");
var search = document.getElementById("search");
var cityName = document.getElementById("city-name");
var temp = document.getElementById("temp");
var weather = document.getElementById("weather");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");


search.addEventListener("click", function() 
{
    fetch("https://api.github.com/users/" + document.getElementById("username").value)
});