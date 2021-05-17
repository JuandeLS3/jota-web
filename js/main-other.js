(function ($) {
    "use strict"; 
    /*----------------------------
	Toggle Menu  Active
	------------------------------ */
	     $('.toggle i').on('click', function() {
        $('.sidemenu').toggleClass('active');
    });
    /*-----------------
    Scroll-Up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fas fa-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 1000,
        animation: 'fade'
    });
    /*-----------------
    Preload
    -----------------*/
      $(document).on('ready',function(){
        var count = 0;
        var counter = setInterval(function(){
            if(count < 101){
                $('.count').text(count + '%');
                $('.loader').css('width' , count + '%');
                count++
            }
            else{
                clearInterval(counter);
            }
        });
    });
        /*----------------------------
    Count Down
    ------------------------------ */
     $('.countdown').downCount({
     date: '12/05/2019 12:00:00'
    });

})(jQuery); 