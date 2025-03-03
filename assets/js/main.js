(function () {
    "use strict";


    /**
   * Animation on scroll function and init
   */
    function aosInit() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: false
        });
    }
    window.addEventListener('load', aosInit);

    /**
   * Gallery Slider
   */
    new Swiper('.mySwiper', {
        speed: 400,
        loop: true,
        spaceBetween: 2,
        centeredSlides: true,
       
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: false
        // },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 5
            }
        }
    });

  
    /*------------------
         Preloader
     --------------------*/
    $(window).on('load', function () {
        // $(".loader").fadeOut();
        $("#preloader-active").delay(200).fadeOut("slow");
    });
    // Page loading
    //  $(window).on("load", function () {
    //     $("#preloader-active").delay(450).fadeOut("slow");

    // });

})()