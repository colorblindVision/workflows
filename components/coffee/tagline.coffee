$ = require 'jquery'

do fill = (item = 'Dynamic content from Coffee script.') ->
	$('.tagline').append "#{item}"
fill