// a complex plugin with options
(function ($) {

  var pluginName = "plugin_name";
  var default_options = {
      option: "value"
  };

  function Plugin( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {
    },
    yourOtherFunction: function(el, options) {
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})(jQuery);
