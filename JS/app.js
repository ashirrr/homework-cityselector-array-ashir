//Wait for the DOM elements to load before executing
	$(document).ready(function(){

//Prevent submit button from refreshing the page
	});

//Provide options to select from 
	var choices =["Austin", "ATX", "Los Angeles", "LA", "LAX", "New York", "NYC", "New York", "San Francisco", "SFO", "San Fran", "Sydney", "SYD"]
	$.each(choices, function(key, value){
	$('#cityType').append('<option></option>');
});

// Get user's input and store it in the variable called city*/
	$(document).ready(function(){
    	$("#cityType").select(function(){
    		event.preventDefault();
        	city = $('#cityType').val('choices');

        });
    });

//what to do based on the user's selection

$("#submit").click(function(){
$("cityType").select(function(){
	$('body').change(picture);
	function picture(){
		if(city == "NYC" || city == "New York City" || city == "New York"){

		$('body').attr("class", "nyc");
	}

//Condition and intstruction for what to do if user value equals the Los Angeles values

	else if(city == "LA" || city == "Los Angeles" || city == "LAX"){

		$('body').attr("class", "la");
	}

//Condition and intstruction for what to do if user value equals the Sydney values

	else if(city == "Syd" || city == "SYD" || city == "Sydney"){

		$('body').attr("class", "sydney");
	}

//Condition and intstruction for what to do if user value equals the Austin values

	else if(city == "Austin" || city == "ATX" || city == "AUS"){

		$('body').attr("class", "austin");
	}

//Condition and intstruction for what to do if user value equals the San Francisco

	else if (city == "SF" || city == "San Francisco" || city == "Bay Area"){

		$('body').attr("class", "sf");
	}
	}
});
});
    		

	


    		
 
 

    		








	

