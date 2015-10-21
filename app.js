$(function() {
	$.ajax({
		type: "GET",
		url: "https://www.reddit.com/r/cats.json?limit=40",
		success: function(result) {
			console.log(result);
		},
		error: function(jqXHR) {
			console.log(jqXHR.status);
		}
	})
})

var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'assets/meow.wav');

        $('.play').click(function() {
            audioElement.play();
        });