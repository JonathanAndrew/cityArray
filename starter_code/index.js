
$(document).ready(function(){
	console.log("hi there")

//listen for an event when user clicks the submit button

	$('form').on('change',submitCity);


//function to change background image

	var city = ['nyc','sf','la','atx','syd'];

	for (i = 0; i < city.length; i++) { 
		$('#city-type').append('<option value="' + city[i] + '">' + city[i] + '</option>')
	}


	function submitCity(){

		//prevent the page from reloading

		event.preventDefault();

		//select the input


		var currentCity = $('#city-type').val();


		if(currentCity== "la") {
			$('body').css('background-image' , "url(images/la.jpg)");
			
			}

		else if(currentCity== "nyc" ) {
			$('body').css('background-image' , "url(images/nyc.jpg)");
			}

		else if(currentCity== "sf") {
			$('body').css('background-image' , "url(images/sf.jpg)");	
			}

		else if(currentCity== "atx" ) {
			$('body').css('background-image' , "url(images/austin.jpg)");
			}

 		else if(currentCity== "syd" ) {
			$('body').css('background-image' , "url(images/sydney.jpg)");
			}
	}

//choose the background image of city

//show picture in background

	

		


});