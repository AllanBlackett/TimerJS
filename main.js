//* The Idea
// Stopwatch
// Starts at 0
// press play to start the timer 
// you can pause the stopwatch timer and resume
// you can reset the stopwatch back to 0 




// Timer 
// placeholder input number 
// play to start the countdown
// you can pause and resume 
// you can clear/restart

  
// document.getElementById("dl").addEventListener("click", handler()); 

function handler() {

  //taking user input
  var time1 = document.getElementById('hms').value;
  //splitting it to seperate variables
  var pieces = time1.split(":");

  var hours = pieces[0];
  var minutes = pieces[1];
  var seconds = pieces[2];
  var time = {
      hours: hours * 1,
      minutes: minutes * 1,
      seconds: seconds * 1
  };


  // Save the interval's handle to `timer`
  var timer = setInterval(countdown, 1000);

  function countdown() {
      var container = document.getElementById('count');

      if (time.seconds > 0) {
          time.seconds--;
      }
      else {
          if (time.minutes > 0) {
              time.minutes--;
              time.seconds = 60;
          }
          else {
              time.minutes = 60;
              time.seconds = 60;
              time.hours--;
          }
      }

      if (time.hours >= 0) {
          container.innerHTML = time.hours + ':' + time.minutes + ':' + time.seconds;
      }
      else {
          container.innerHTML = 'Time over';
          clearInterval(timer);
      }
  }
  
}

