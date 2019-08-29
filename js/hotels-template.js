$(document).ready(function(){
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
    $('.owl-gallery').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
//        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            770:{
                items:4
            },
            1440:{
                items:5
            }
        }
    });
    $('.carousel-testimoni').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1
    })
    $(".carousel-room-image").owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        items:1
    })

    //ini wow js
    new WOW({
        offset:150
    }).init();
});;
