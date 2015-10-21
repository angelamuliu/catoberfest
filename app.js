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