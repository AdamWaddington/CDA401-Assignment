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

function contactvalidation() {
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
		errormsg = errormsg + "\n Email Address"
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

function contactlivevalidation() {
	var first_name = document.forms["contactform"]["first_name"].value;
	if (first_name == "")
	{
		document.getElementById("first_name").style.backgroundColor = "red";
		document.getElementById("tickcross_firstname").src = "media/cross.png"; 
	}
	else
	{
		document.getElementById("first_name").style.backgroundColor = "";
		document.getElementById("tickcross_firstname").src = "media/tick.png"; 
	}
	var last_name = document.forms["contactform"]["last_name"].value;
	if (last_name == "")
	{
		document.getElementById("last_name").style.backgroundColor = "red";
		document.getElementById("tickcross_lastname").src = "media/cross.png"; 
	}
	else
	{
		document.getElementById("last_name").style.backgroundColor = "";
		document.getElementById("tickcross_lastname").src = "media/tick.png"; 
	}
	var email = document.forms["contactform"]["email"].value;
	if (email == "")
	{
		document.getElementById("email").style.backgroundColor = "red";
		document.getElementById("tickcross_email").src = "media/cross.png"; 
	}
	else
	{
		document.getElementById("email").style.backgroundColor = "";
		document.getElementById("tickcross_email").src = "media/tick.png"; 
	}
	var message = document.getElementById("message").value;
	if (message.length < 1)
	{
		document.getElementById("message").style.backgroundColor = "red";
		document.getElementById("tickcross_message").src = "media/cross.png"; 
	}
	else
	{
		document.getElementById("message").style.backgroundColor = "";
		document.getElementById("tickcross_message").src = "media/tick.png"; 
	}
}

function ordervalidation() {
	var errormsg = "Please Select:"
	var baseno = document.getElementsByName("base");
	var isbasechecked = false
	for (var counter = 0; counter < baseno.length; counter++) {
		if(baseno[counter].checked) {
			isbasechecked = true;
			break
		}
	}
	if (!isbasechecked) 
	{
		errormsg = errormsg + "\n Your base"
	}
	var toppingno = document.getElementsByName("topping");
	var istoppingchecked = false
	for (var counter = 0; counter < toppingno.length; counter++) {
		if(toppingno[counter].checked) {
			istoppingchecked = true;
			break
		}
	}
	if (!istoppingchecked)
	{
		errormsg = errormsg + "\n At least one topping"
	}	
	if (!isbasechecked + !istoppingchecked)
	{
		alert(errormsg)
		return false
	}
	else
	{
		document.orderform.submit
	}
}

function updatetotal() {
	var smallbase = document.getElementById("smallbase");
	var mediumbase = document.getElementById("mediumbase");
	var largebase = document.getElementById("largebase");
	var xlargebase = document.getElementById("xlargebase");
	
	var baseprice = 0
	if (smallbase.checked)
	{
		baseprice = smallbase.value
	}
	if (mediumbase.checked)
	{
		baseprice = mediumbase.value
	}
	if (largebase.checked)
	{
		baseprice = largebase.value
	}
	if (xlargebase.checked)
	{
		baseprice = xlargebase.value
	}
	
	var cheese = document.getElementById("cheese");
	var chips = document.getElementById("chips");
	var mushrooms = document.getElementById("mushrooms");
	var ham = document.getElementById("ham");
	var anchovies = document.getElementById("anchovies");
	var garlicbread = document.getElementById("garlicbread");
	
	var extraprice = 0
	if (cheese.checked)
	{
		extraprice = +extraprice + +cheese.value
	}
	if (chips.checked)
	{
		extraprice = +extraprice + +chips.value
	}
	if (mushrooms.checked)
	{
		extraprice = +extraprice + +mushrooms.value
	}
	if (ham.checked)
	{
		extraprice = +extraprice + +ham.value
	}
	if (anchovies.checked)
	{
		extraprice = +extraprice + +anchovies.value
	}
	if (garlicbread.checked)
	{
		extraprice = +extraprice + +garlicbread.value
	}
	
	var totalprice
	totalprice = +baseprice + +extraprice
	
	totalprice = parseFloat(totalprice).toFixed(2);
	
	document.getElementById('totalprice').innerHTML = totalprice;
}
			
	

