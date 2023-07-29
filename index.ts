// Import stylesheets
import './style.css';

const clock:HTMLDivElement = document.querySelector('.clock');
const hours:HTMLDivElement = clock.querySelector('.hours');
const minutes:HTMLDivElement = clock.querySelector('.minutes');
const seconds:HTMLDivElement = clock.querySelector('.seconds');

const updateTime=()=>{

  const date = new Date();

  const hoursToDeg = date.getHours()/12*360;
  const minutesToDeg = date.getMinutes()/60*360;
  const secondsToDeg = date.getSeconds()/60*360;
  
  hours.style.rotate = hoursToDeg + "deg";
  minutes.style.rotate = minutesToDeg + "deg";
  seconds.style.rotate = secondsToDeg + "deg";

}

//call once update time on page load
updateTime();

setInterval(updateTime,1000)