// Count starts at 0
// press start() to begin the timer 
// you can stop() the stopwatch timer and start() to resume
// you can reset() the stopwatch back to 0 to reset the timer

let hour = 0;
let minute = 0;
let seconds = 0;
let c = 0;
let t = null;
let timer = 0;

function countUp() {
  ++c;
  t = setTimeout(countUp, 1000);

  hour = Math.floor(c / 3600);
  minute = Math.floor((c - hour * 3600) / 60);
  seconds = c - (hour * 3600 + minute * 60);

  document.getElementById('hour').innerHTML = hour + ':';
  document.getElementById('minute').innerHTML = minute + ':';
  document.getElementById('seconds').innerHTML = seconds;
}

// Start
function start() {
  // Set timer to false so when user do clearTimeout, start() is ready 
    // to get called again and without the capability of making repeat 
    // calls to the start() function. 
  if (!timer) {
    timer = 1;
    countUp();
  }
}

// Stop
function stop() {
  if (t) {
    clearTimeout(t);
    timer = 0;
  }
}

// Restart
function restart() {
  c = 0;
  document.getElementById('hour').innerHTML = '0';
  document.getElementById('minute').innerHTML = '0';
  document.getElementById('seconds').innerHTML = '0';

}
