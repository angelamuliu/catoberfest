$(function() {
	// initialize Masonry
	var container = $('#cats-go-here').masonry({
		"itemSelector": ".item",
	    "columnWidth": ".grid-sizer" // references .grid-sizer for how wide image columsns should be
	});

	$.ajax({
		type: "GET",
		url: "https://www.reddit.com/r/cats.json?limit=20",
		success: function(result) {
			console.log(result.data);
			var urls = [];
			for (var i = 0; i < result.data.children.length; i++) {
				var url = result.data.children[i].data.url;
				var splitUrl = url.split('/');
				if (splitUrl[2] === 'imgur.com') {
					splitUrl[2] = 'i.imgur.com';
					url = splitUrl.join('/') + '.jpg';
					// urls.push(url);
					container.append('<div class="item"><img src="'+url+'" class="image"/></div>');
				} else if (splitUrl[2] === 'i.imgur.com') {
					// urls.push(url);
					container.append('<div class="item"><img src="'+url+'" class="image"/></div>');
				}
			}
			// console.log(urls);

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
                audio = new Audio('assets/randys song.mp3');
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
