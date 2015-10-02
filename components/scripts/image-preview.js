var imagePreview = function() {
	$('.images li').each(function(){
		$(this).click(function(){
			$('.full-image').html($(this).html());
		});
	});
}();
