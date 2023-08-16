 var time = document.getElementById('time');
 var dateTime = document.getElementById('date-time');

function Clock() 
{
   var now = new Date();
   var hours = now.getHours();
   var minutes = now.getMinutes();
   var seconds = now.getSeconds();
   var day = now.getDay();
   var date = now.getDate();
   var month = now.getMonth();
   var year = now.getFullYear();
   
   var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
   var monthNames = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']

var  hours = hours % 12 || 12;
   var minutes = minutes < 10 ? "0" + minutes : minutes;
   var seconds = seconds < 10 ? "0" + seconds : seconds;
   var date = date < 10 ? "0" + date : date;

   var period = hours < 12 ? "AM" : "PM";
   document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
   document.getElementById('date-time').innerHTML = dayNames[day] +',' + " " + monthNames[month] + " " + date +',' + " " + year;
}
Clock();
setInterval(Clock, 1000);