var SECOND = 1000;
var MINUTE = SECOND * 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var YEAR = DAY * 365;

var START_SECOND = 47;
var START_MINUTE = 7;
var START_HOUR = 22;
var START_DAY = 266;

var seconds_field, minutes_field, hours_field, days_field, msg_field;

function countdownTimer(){
  var seconds = SECOND * START_SECOND;
  var minutes = MINUTE * START_MINUTE;
  var hours = HOUR * START_HOUR;
  var days = DAY * START_DAY;
  var totalTimeMiliseconds = days + hours + minutes + seconds;

  seconds_field = document.getElementById("seconds");
  minutes_field = document.getElementById("minutes");
  hours_field = document.getElementById("hours");
  days_field = document.getElementById("days");
  msg_field = document.getElementById("finalMsg");

  seconds_field.innerHTML = seconds / SECOND;
  minutes_field.innerHTML = minutes / MINUTE;
  hours_field.innerHTML = hours / HOUR;
  days_field.innerHTML = days / DAY;

  timer(totalTimeMiliseconds);
}

function timer(timeMiliseconds){
  var temp, temp_days, temp_hours, temp_minutes, temp_seconds;
  if(timeMiliseconds > 0){
    setTimeout(function() {
      timeMiliseconds = timeMiliseconds - SECOND;
      temp = timeMiliseconds;
      temp_days = Math.trunc(temp / DAY);
      days_field.innerHTML = temp_days;
      temp = temp - (temp_days * DAY);

      temp_hours = Math.trunc(temp / HOUR);
      hours_field.innerHTML = temp_hours;
      temp = temp - (temp_hours * HOUR);

      temp_minutes = Math.trunc(temp / MINUTE);
      minutes_field.innerHTML = temp_minutes;
      temp = temp - (temp_minutes * MINUTE);

      temp_seconds = Math.trunc(temp / SECOND);
      seconds_field.innerHTML = temp_seconds;

      console.log(timeMiliseconds);
      timer(timeMiliseconds);
    }, SECOND);
  }else{
    msg_field.innerHTML = "Time over!!!";
  }

}

countdownTimer();
