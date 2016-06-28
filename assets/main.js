!function($) {
  $(function() {
   $('#viewer').bind("init", function() { console.log('initialized'); });
   $('#viewer').bind('viewer.select', function(event, selected) {
      console.log(selected);
    });
  });
}(window.jQuery);
