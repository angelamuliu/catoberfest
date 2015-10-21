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


$(document).ready(function() {

    $("#catPiano button").click(function() {
        var note = $(this).attr('id');
        var audio;
        switch(note) {
            case "do":
                audio = new Audio('assets/do.wav');
                break;
            case "re":
                audio = new Audio('assets/re.wav');
                break;
            case "me":
                audio = new Audio('assets/me.wav');
                break;
            case "fa":
                audio = new Audio('assets/fa.wav');
                break;
            case "so":
                audio = new Audio('assets/so.wav');
                break;
            case "la":
                audio = new Audio('assets/la.wav');
                break;
            case "ti":
                audio = new Audio('assets/ti.wav');
                break;

        }
        audio.play();
        return false;
    })


})

var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'assets/meow.wav');

        $('.play').click(function() {
            audioElement.play();
        });
