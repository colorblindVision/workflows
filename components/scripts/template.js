$(function(){
	var Mustache = require('mustache');
	
	$.getJSON('js/data.json', function(data) {
		var template = $('#dynamic-template').html();
		var html = Mustache.to_html(template, data);
		$('#dynamic-data').html(html);
	});
});