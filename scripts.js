function time() {
	var today = new Date();	
	
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
	var curr_time = curr_hour + ":" + curr_minute + ":" + curr_second + " " + ampm; //outputs 24 hour time (Not in use presently)
	
	//console.log(curr_time); //logs each second to console - debugging tool
	
	document.getElementById("timeoutput").innerHTML = curr_time12;
	
}

function date() {
	var date = new Date();
	var curr_date = date.toDateString(); //converts to a readable format
	
	document.getElementById("dateoutput").innerHTML = curr_date;
	
	setInterval(time, 60000);
}

var slideIndex = 0; //inits current image to first image

function carousel() {
		
    var counter;
    var imageno = document.getElementsByClassName("mainslide");
    for (counter = 0; counter < imageno.length; counter++) //loops until all other images are setup correctly to not display
		{ 
		imageno[counter].style.display = "none"; //sets the other images not being presently displayed to 'none' as to hide them
		}
    slideIndex++;
    if (slideIndex > imageno.length) {slideIndex = 1} //if slide number exceeds the number of images index is set back to 1
    imageno[slideIndex-1].style.display = "block"; //displays the current image - only one image should display as block at once
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

/*
  function currentFigure(n) {
  slideIndex = n;
}
*/

function rollover(sidebanner) {
	sidebanner.src = "media/pizzaboardbanner2.jpg";
}

function rolloff(sidebanner) { 
	sidebanner.src = "media/pizzaboardbanner1.jpg";
}

function validation() {
	var errormsg = "Please Enter Your:"
	var first_name = document.forms["contactform"]["first_name"].value;
	if (first_name == "")
	{
		errormsg = errormsg + "\n First Name"
	}
	var last_name = document.forms["contactform"]["last_name"].value;
	if (last_name == "")
	{
		errormsg = errormsg + "\n Last Name"
	}
	var email = document.forms["contactform"]["email"].value;
	if (email == "")
	{
		errormsg = errormsg + "\n Email"
	}
	var message = document.getElementById("message").value;
	if (message.length < 1)
	{
		errormsg = errormsg + "\n Your Message"
	}
	if (errormsg != "Please Enter Your:")
	{
		alert(errormsg)
		return false
	}
	else
	{
		document.contactform.submit
	}
}
			
	

