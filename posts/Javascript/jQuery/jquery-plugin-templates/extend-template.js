// simple extend to add plugin funtions
(function($){
  $.fn.extend({
    check: function() {
      return this.each(function() {
        this.checked = true;
      });
    },
    uncheck: function() {
      return this.each(function() {
        this.checked = false;
      });
    }
  });
})(jQuery);