var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Dynamic content from Coffee script.');

fill;
