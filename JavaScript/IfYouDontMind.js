var HOUR = 8;
var MINUTE = 15;
var PERIOD = "PM";

var string_hour;
var string_period;
if (MINUTE >= 30)
 {
     string_hour = "almost ";
     HOUR = HOUR+1;
 }
 else
 {
     string_hour = "just after ";
 }

 if (PERIOD == "AM")
 {
     string_period = "morning ";
 }
 else if (PERIOD == "PM")
 {
     string_period = "evening ";
 }

 console.log("It's",string_hour,HOUR,"in the",string_period);
