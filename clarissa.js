window.onload = function() {
	console.log("page is fully loaded");

	// Changing text for slideshow
	const interval = setInterval(changeText, 1000);
};

function changeText() {
	var items = document.getElementsByClassName('carousel-item')	//get carousel items
	console.log("got carousel items");
	console.log(items.length);
	var slides = document.getElementsByClassName('slide-pic');		//get images
	console.log("got slide pics");
	console.log(slides.length);
	var caption = document.getElementById('slideshow-text');		//get textbox
	console.log("got caption box");

	for (i = 0; i < items.length; i++) {
		if (items[i].className == 'carousel-item active') {
			console.log("item is active");
			if (slides[i].id == 'hackathon') {
				console.log("pic is hackathon");
				var newText = 'I had a blast at UMass Boston\'s first Hackathon! It was a pleasure to work with everyone in my group on our college student expenses predictor. Machine learning is so cool!';
				createCaption(caption, newText);
			}
			else if (slides[i].id == 'alpaca') {
				console.log("pic is alpaca");
				var newText = 'Check out my latest project: Alpaca Crossing Averages Algorithm! This algorithm predicts when to buy or sell a stock depending on its long- and short-term average price.';
				createCaption(caption, newText);
			}
			else if (slides[i].id == 'csc') {
				console.log("pic is csc");
				var newText = 'I really enjoyed being part of the UMass Boston Computer Science Club this year. Everyone\'s final projects for the competition were amazing and I\'m leaving incredibly inspired!';
				createCaption(caption, newText);
			}
		}
	}
};

function createCaption(caption, newText) {
	var newCaption = '<p>' + newText + '</p>';
	caption.innerHTML = newCaption;
};