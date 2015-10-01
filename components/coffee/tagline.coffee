$ = require 'jquery'

do fill = (item = 'This is dynamic content from coffee script') ->
	$('.tagline').append "#{item}"
fill