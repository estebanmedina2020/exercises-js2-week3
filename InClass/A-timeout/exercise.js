/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different.
Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

let background = document.querySelector("body");
let colors = ["red", "blue", "green" ]
let counter = 0;
setInterval(function) {
    
}


function setbackground() {
  window.setTimeout("setbackground()", 5000);
  var index = Math.round(Math.random() * 9);
  var ColorValue = "#E6A9EC";
  if (index == 1) ColorValue = "FFCCCC";
  if (index == 2) ColorValue = "CCAFFF";
  if (index == 3) ColorValue = "A6BEFF";
  if (index == 4) ColorValue = "99FFFF";
  if (index == 5) ColorValue = "D5CCBB";
  if (index == 6) ColorValue = "99FF99";
  if (index == 7) ColorValue = "FFFF99";
  if (index == 8) ColorValue = "FFCC99";
  if (index == 9) ColorValue = "CCCCCC";
  document.bgColor = ColorValue;
}
