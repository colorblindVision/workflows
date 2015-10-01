var fill;

(fill = function(item) {
  return $('.tagline').append("" + item);
})('This is dynamic content from coffee script');

fill;
