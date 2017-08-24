// a minimum plugin structure
(function($){
  // attach plugin to jQuery.fn
  $.fn.plugin_function = function(options){
  	// return jQuery object for call chaining
  	return this.each(funtion(){
  	  // process each element
  	  // implement plugin functions or attach plugin instancesj
  	  $(this).addClass('plugin-processed');
  	});
  }
})(jQuery);