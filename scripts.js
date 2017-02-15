function time() {
	var today = new Date()
	
	var curr_hour = today.getHours();
	var curr_minute = today.getMinutes();
	var curr_second = today.getSeconds();
	curr_hour = curr_hour == 24 ? '0' : curr_hour; //converts midnight to 00 not 24
	curr_hour = curr_hour < 10 ? '0' + curr_hour : curr_hour; //converts :1 hours to :01 etc
	curr_minute = curr_minute < 10 ? '0' + curr_minute : curr_minute; //converts :1 minutes to :01 etc
	curr_second = curr_second < 10 ? '0' + curr_second : curr_second; //converts :1 seconds to :01 etc

	var ampm = (curr_hour >= 12) ? "PM" : "AM"; //determines AM or PM
	
	var curr_hour12 = curr_hour % 12; //converts 24 hour time format to 12 hour time format
	curr_hour12 = curr_hour12 ? curr_hour12 : 12; //0 not 12
	
	var curr_time12 = curr_hour12 + ":" + curr_minute + " " + ampm; //outputs 12 hour time
	var curr_time = curr_hour + ":" + curr_minute + ":" + curr_second + " " + ampm; //outputs 24 hour time
	
	//console.log(curr_time); //logs each second to console
	
	document.getElementById("timeoutput").innerHTML = curr_time12;
	
	setInterval(time, 500);
}