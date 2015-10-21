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