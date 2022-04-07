$(document).ready(function() {
  
    $('[data-fancybox="itinerary"]').fancybox({
        afterShow: function(instance, current) {
            console.log(current.src);
        }
    });
	
});
