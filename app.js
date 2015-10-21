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
        switch(note) {
            case "do":
                break;
            case "re":
                break;
            case "me":
                break;
            case "fa":
                break;
            case "so":
                break;
            case "la":
                break;
            case "ti":
                break;

        }
        return false;
    })


})
