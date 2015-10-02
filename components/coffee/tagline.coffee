$ = require 'jquery'

do fill = (item = 'Dynamic content from Coffee.') ->
	$('.tagline').append "#{item}"
fill