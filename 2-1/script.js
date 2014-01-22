$._get = function(url, callback) {
	if (url){
		callback({
			results: ['Awesomeness', 'Amazing', 'Astounding', 'Congrats, you got it.']
		});
	}
}

$(document).ready(function() {
	var search_term = 'devmountain';
	var masterLocation = 'http://devmounta.in?q='+search_term;
	function setupApi() {		
		$(document).ajaxError(function(e, xhr, settings, thrown) {
			console.log("Ajax ERROR", xhr, settings, thrown);
		});
	}
	setupApi();
	$._get(masterLocation, function(data) {
		$.each(data.results, function(index, tweet) {
			$('#results').append('<p><span class="glyphicon glyphicon-thumbs-up"></span>'+tweet+'</p>');
		});
	});
});