var imagePreview = function() {
	$('images li').each(function(){
		$(this).click(function(){
			alert('clicked');
		});
	});
}();
$(function(){
	var Mustache = require('mustache');
	
	$.getJSON('js/data.json', function(data) {
		var template = $('#dynamic-template').html();
		var html = Mustache.to_html(template, data);
		$('#dynamic-data').html(html);
	});
});
var fill;

(fill = function(item) {
  return $('.tagline').append("" + item);
})('This is dynamic content from coffee script');

fill;
