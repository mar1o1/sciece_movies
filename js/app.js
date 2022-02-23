$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    navigation: true,

    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('#next').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('#prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})