$(document).ready(function() {

    // advertisers-active
    $('.advertisers-active').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // video_popup
    $('.video_popup').magnificPopup({
        type: 'image'
    });
    
});