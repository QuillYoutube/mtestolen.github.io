var seconds = 5;
var foo;

function redirect() {
  document.location.href = 'https://dsc.gg/ezrbx';
}

function updateSecs() {
  document.getElementById("seconds").innerHTML = seconds;
  seconds--;
  if (seconds == -1) {
    clearInterval(foo);
    redirect();
  }
}

function countdownTimer() {
  foo = setInterval(function() {
    updateSecs()
  }, 1000);
}

countdownTimer();