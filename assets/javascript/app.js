// API key:  mFEGtsOymtfuyHCdDrEqclznuqq8vgg5

console.log("Javascript file connected");

$(document).ready(function(){

	var topics =  ["dog", "cat", "fish", "horse", "bird", "gecko"];
	

	// This fucntion renders the buttons in the "buttonView" div
	function displayButtons() {

		$("#buttonsView").empty();
		// This for loop creates buttons for each item in the topics array
		for(var i = 0; i < topics.length; i++) {

			// creates a button tag
			var newButton = $('<button>');

				// adds dataName attribute and userButton class
				newButton.attr("data-name", topics[i]);

				newButton.attr("class", "userGifInput");

				// adds searched word to corresponding button
				newButton.text(topics[i]);

				console.log(topics);
				

			$('#buttonsView').append(newButton);

		}
	}

	$("#addGif").on("click", function(event) {
		submit();
	});



	function submit() {

			event.preventDefault();

			var gifInputValue = $('#gifInput').val().trim();

			topics.push(gifInputValue);

			displayButtons();
	
	
	}

		
	
	var displayGifs = function() {

			
		var gifName = $(this).attr("data-name");
		
		
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=mFEGtsOymtfuyHCdDrEqclznuqq8vgg5&limit=10";

			console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response){

			console.log(queryURL);
			console.log(response);

			var results = response.data;



			for(var i = 0; i < results.length; i++) {

				var dataStill = results[i].images.fixed_width_still.url;

				var dataAnimate = results[i].images.fixed_width.url;				

				if(results[i].rating !== "r" && results[i].rating !== "pg-13") {

					var gifDiv = $("<div class='gifDrop'>");
					
					var rating = results[i].rating;

					var paraTwo = $("<p id='rating'>").text("Rating: " + rating);
				

				var paraOne = $("<img>");

					paraOne.attr("src", dataStill);
					paraOne.attr("dataAnimate", dataAnimate);
					paraOne.attr("dataState", "still");
					paraOne.attr("class", "generatedGif");
					
				gifDiv.append(paraOne);

				gifDiv.append(paraTwo);

				$("#gifView").prepend(gifDiv);

				}

				$(".gifDrop").on('click', function() {

					var state = $(this).attr("dataState");

					if(state === "still") {
						$(this).attr("src", $(this).attr("dataAnimate"));
						$(this).attr("dataState", "animate");
					} else {
						$(this).attr("src", $(this).attr("dataStill"));
						$(this).attr("dataState", "still");
					}
				});

				
			}
		});

	};

	 $(document).on('click', '.userGifInput', displayGifs);
	

	displayButtons();
	
	
	
});



