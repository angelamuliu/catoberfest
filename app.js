$(function() {
	$.ajax({
		type: "GET",
		url: "https://www.reddit.com/r/cats.json?limit=40",
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
					$('#cats-go-here').append('<img src="'+url+'" />');
				} else if (splitUrl[2] === 'i.imgur.com') {
					// urls.push(url);
					$('#cats-go-here').append('<img src="'+url+'" />');
				}
			}
			// console.log(urls);

		},
		error: function(jqXHR) {
			console.log(jqXHR.status);
		}
	})
})