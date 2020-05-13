/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude),
and a button with the text GET.
When you click in the button, you should use fetch function to get information
from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/
const h3 = document.querySelector("#result");
function getWeather() {
  fetch("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160")
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      console.log(result.main.temp);
      let temp = result.main.temp;
      console.log("This is the result of the promise", temp);
      h3.innerText = temp;
    });
}

const button = document.querySelector("#getposition");
button.addEventListener("click", getWeather);
