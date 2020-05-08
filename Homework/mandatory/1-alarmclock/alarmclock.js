function setAlarm() {
  let alarmInput = document.querySelector("#alarmSet");
  let timeRemaining = document.querySelector("#timeRemaining");
  let countDown = alarmInput.value;
  timeRemaining.innerText = "Time Remaining: 00:" + countDown;
  let setTimeRemaining = function () {
    timeRemaining.innerText = "Time Remaining: 00:" + --countDown;
    if (countDown === 0) {
      clearInterval(setTimeRemainingId);
      playAlarm();
      document.body.style.backgroundColor = "red";
    }
  };
  var setTimeRemainingId = setInterval(setTimeRemaining, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
