/*-------------------------------------------
    Preloader
--------------------------------------------- */
// $(window).on("load", function () {
//     //Page Loader
//     setTimeout(function () {
//         $('body').addClass('loaded');
//     }, 0);
// });
$(document).ready(function () {
    "use strict"; // Start of use strict
    /*-------------------------------------------
        Navbar
        --------------------------------------------- */
    $(function () {
        $("nav ul li > a:not(:only-child)").click(function (e) {
            $(this).siblings(".nav-dropdown").slideToggle();
            $(".nav-dropdown").not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $("html").click(function () {
            $(".nav-dropdown").hide();
        });
        // Toggle open and close nav styles on click
        $("#nav-toggle").click(function () {
            $("nav ul").slideToggle();
        });
        $("#nav-toggle").on("click", function () {
            this.classList.toggle("active");
        });
    });
    /*-------------------------------------------
      Popup gallery
    --------------------------------------------- */
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    /*-------------------------------------------
      AOS animation
    --------------------------------------------- */
    AOS.init({
        once: true, 
    });



    /*-------------------------------------------
     Masonry Shuffle js
 --------------------------------------------- */


    $(function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector('.shuffle-container');
        var sizer = element.querySelector('.shuffle-sizer');

        var shuffleInstance = new Shuffle(element, {
            itemSelector: '.masonry-col',
            sizer: sizer // could also be a selector: '.my-sizer-element'
        });
    });
    /*-------------------------------------------
           Button hover effect
       --------------------------------------------- */
    $(function () {
        $('.button-hover__effect')
            .on('mouseenter', function (e) {
                this.classList += " animate";
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                // $("#mainTable").width(100).height(200);
                $(this).find('.round').css({ top: relY, left: relX }).width(1).height(1)
            })
            .on('mouseleave', function (e) {
                this.classList.remove("animate");
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('.round').css({ top: relY, left: relX }).width(1).height(1)
            });
        $('.button-hover__effect').click(function () { return false });
    });



});

