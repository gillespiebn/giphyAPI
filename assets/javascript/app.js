// API key:  mFEGtsOymtfuyHCdDrEqclznuqq8vgg5

console.log("Javascript file connected");

$(document).ready(function(){

	var topics =  ["dog", "cat", ];
	

	// This fucntion renders the buttons in the "buttonView" div
	function displayButtons() {

		$("#buttonsView").empty();
		// This for loop creates buttons for each item in the topics array
		for(var i = 0; i < topics.length ; i++){

			// creates a button tag
			var newButton = $('<button>');

				// adds dataName attribute and userButton class
				newButton.attr("gifDataName", topics[i]);

				newButton.attr("class", "userButton");

				// adds searched word to corresponding button
				newButton.text(topics[i]);

				console.log(topics);
				console.log(newButton);

			$('#buttonsView').append(newButton);

		}
	}

	$("#addGif").on("click", function(event) {
		submit();
	});



	function submit() {

			var gifInputValue = $('#gifInput').val().trim();

			topics.push(gifInputValue);

			displayButtons();

			console.log(topics);
				
	
	}

	function displayGifs () {

		var gifName = $(this).data("gifDataName");

		var apiKey = "mFEGtsOymtfuyHCdDrEqclznuqq8vgg5";
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=" + apiKey;


		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(data){

			for(var i = 0; i < 10; i++) {


				var dataStill = response.data.images.fixed_width_still.url;

				var dataAnimate = response.data.images.fixed_width.url;

				// var dataState = "";

				var gifDiv = $("<div class='gifDrop'>");

				var paraOne = $("<img>").attr({
					"src": dataStill,
					"dataAnimate": dataAnimate,
					"dataState": "still",
					"class": "generatedGif"
				});

				gifDiv.prepend(paraOne);

				var rating = data.rating;

				var paraTwo = $("<p id='rating'>").text("Rating: " + rating);

				gifDiv.append(paraTwo);

				$("#gifsView").prepend(gifDiv);

				console.log("Topics: " + topics[i]);
			}
		});

	};

	displayButtons();
	displayGifs();
});


// below are pulled codes from the classwork

// pausing gifs

 // $(".gif").on("click", function() {
 
 //      var state = $(this).attr("data-state");
  
 //      if (state === "still") {
 //        $(this).attr("src", $(this).attr("data-animate"));
 //        $(this).attr("data-state", "animate");
 //      } else {
 //        $(this).attr("src", $(this).attr("data-still"));
 //        $(this).attr("data-state", "still");
 //      }
 //    });






// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });