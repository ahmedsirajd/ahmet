$(document).ready(function() {

    'use strict';

    /* ========================================================================= */
    /*  Navbar
    /* ========================================================================= */

    $('.float-button').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('scale3D');
        $('.float-button-wrapper .float-button-list').toggle(300);
    });

    $('.wrapper-menu').on('click', function() {
        $(this).toggleClass('open');
    });

    // Navbar Smoothscroll
    $('.float-button-list a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });

    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $('.page-spy').each(function(i) {
            if ($(this).position().top - 10 <= scrollDistance) {
                $('.float-button-list a.active').removeClass('active');
                $('.float-button-list a').eq(i).addClass('active');
            }
        });
    }).scroll();

    /* ========================================================================= */
    /*  Statistic Counter
    /* ========================================================================= */

    $('.tilter__title').each(function() {
        $(this).appear(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }, {
            accX: 0,
            accY: 0
        });
    });

    /* ========================================================================= */
    /*  Skills
    /* ========================================================================= */

    $('.skills-item').each(function() {
        var perc = $(this).find('.percent').data('percent');

        $(this).data('height', perc);
    })

    $('.touch .skills-item').each(function() {
        $(this).css({
            'height': $(this).data('height') + '%'
        });
    })

    $('.touch .skills-bars').css({
        'opacity': 1
    });

    $('#skills').appear(function() {

        $('.skills-item').each(function() {
            $(this).css({
                'height': $(this).data('height') + '%'
            });
        })

        $('.skills-bars').css({
            'opacity': 1
        });

    }, {
        offset: '40%'
    });

    // Skills Control [Switch]
    var technicalSkills = $('.skills-inner').find('.personal');
    var personalSkills = $('.skills-inner').find('.technical');

    $('.switch-toggles').find('.personal').addClass('active');
    $('.skills-inner').find('.personal').addClass('active');

    $('.switch-toggles').find('.personal').on('click', function() {
        $(this).addClass('active');
        $(this).closest('.switch-toggles').removeClass('active');
        $(this).siblings().removeClass('active');
        technicalSkills.addClass('active');
        personalSkills.removeClass('active');
    });

    $('.switch-toggles').find('.technical').on('click', function() {
        $(this).addClass('active');
        $(this).closest('.switch-toggles').addClass('active');
        $(this).siblings().removeClass('active');
        personalSkills.addClass('active');
        technicalSkills.removeClass('active');
    });

    /* ========================================================================= */
    /*  Morphext
    /* ========================================================================= */

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeInDown",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 4000,
        complete: function() {
            // Called after the entrance animation is executed.
        }
    });

    /* ========================================================================= */
    /*  Parallax
    /* ========================================================================= */

    $('.parallax').parallax("0%", 0.4);

    /* ========================================================================= */
    /*  Portfolio Filtering
    /* ========================================================================= */

    $('.grid').imagesLoaded(function() {
        // filter items on button click
        $('.list-control').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });
    });

    /* ========================================================================= */
    /*  Portfolio Menu
    /* ========================================================================= */

    $('.list-control ul li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /* ========================================================================= */
    /*  Portfolio Full Screen Picture
    /* ========================================================================= */

    // Initialize popup as usual
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
				return item.el.attr('title') + ' <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">Demo Link</a>';
			}
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    /* ========================================================================= */
    /*  Education Slider
    /* ========================================================================= */

    $('.education-slider').owlCarousel({
        loop: false,
        autoplay: false,
        navText: ["<i class='lni-chevron-left'></i>", "<i class='lni-chevron-right'></i>"],
        nav: true,
        dots: false,
        margin: 70,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            767: {
                items: 1
            },
            900: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    /* ========================================================================= */
    /*  Client Slider
    /* ========================================================================= */

    $('.client-slider').owlCarousel({
        loop: true,
        autoplay: true,
        navText: ["<i class='lni-chevron-left'></i>", "<i class='lni-chevron-right'></i>"],
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    /* ========================================================================= */
    /*  Change Icon & Text On Start Slide
    /* ========================================================================= */

    $('.feat03-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        nav: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                touchDrag: true,
                pullDrag: true,
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* Change Button */

    var featSlider = $(".feat03-slider"),
        pillsLI = $(".mobile-nav-pills li");
    featSlider.on('changed.owl.carousel', function(event) {
        var itemN = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var itemO = event.item.count;
        if (itemN > itemO || itemN == 0) {
            itemN = itemO - (itemN % itemO);
        }

        (itemN > itemO || 0 == itemN) && (itemN = itemO - itemN % itemO), itemN--;
        var itemT = $(".mobile-nav-pills li:nth(" + itemN + ")");
        itemA(itemT)

    }), pillsLI.on("click", function() {
        var itemE = $(this).data("owl-item");
        featSlider.trigger("to.owl.carousel", itemE), itemA($(this));
    });

    function itemA(itemE) {
        pillsLI.removeClass("active-icon");
        itemE.addClass("active-icon");
    }

    /* Change Text */
    var featSlider = $(".feat03-slider"),
        itemII = $(".mobile-tab-pane");
    featSlider.on('changed.owl.carousel', function(event) {
        var itemH = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var itemV = event.item.count;
        if (itemH > itemV || itemH == 0) {
            itemH = itemV - (itemH % itemV);
        }

        (itemH > itemV || 0 == itemH) && (itemH = itemV - itemH % itemV), itemH--;
        var itemW = $(".mobile-tab-pane:nth(" + itemH + ")");
        itemC(itemW)

    });

    function itemC(itemY) {
        itemII.removeClass("active");
        itemY.addClass("active");
    }

    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        // autoHeight: true,
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });

    /* ========================================================================= */
    /*  Back To Top
    /* ========================================================================= */

    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 800) {
            $("#scroll-top").addClass("show");
        } else {
            $("#scroll-top").removeClass("show");
        }
    });
    $("#scroll-top").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */

    $('#contact-submit').on("click", function(e) {

        //stop the form from being submitted
        e.preventDefault();

        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        var error = false;
        var fullName = $('#fullName').val();
        var emailAddr = $('#emailAddr').val();
        var companyName = $('#companyName').val();
        var position = $('#position').val();
        var briefDesc = $('#briefDesc').val();

        /* in the next section we do the checking by using VARIABLE.length
        where VARIABLE is the variable we are checking (like name, email),
        length is a JavaScript function to get the number of characters.
        And as you can see if the num of characters is 0 we set the error
        variable to true and show the name_error div with the fadeIn effect. 
        if it's not 0 then we fadeOut the div( that's if the div is shown and
        the error is fixed it fadesOut. 

        The only difference from these checks is the email checking, we have
        email.indexOf('@') which checks if there is @ in the email input field.
        This JavaScript function will return -1 if no occurrence have been found.*/
        if (fullName.length == 0) {
            var error = true;
            $('#fullName').css("border-color", "#D8000C");
        } else {
            $('#fullName').css("border-color", "#ced4da");
        }
        if (emailAddr.length == 0 || emailAddr.indexOf('@') == '-1') {
            var error = true;
            $('#emailAddr').css("border-color", "#D8000C");
        } else {
            $('#emailAddr').css("border-color", "#ced4da");
        }
        if (companyName.length == 0) {
            var error = true;
            $('#companyName').css("border-color", "#D8000C");
        } else {
            $('#companyName').css("border-color", "#ced4da");
        }
        if (position.length == 0) {
            var error = true;
            $('#position').css("border-color", "#D8000C");
        } else {
            $('#position').css("border-color", "#ced4da");
        }
        if (briefDesc.length == 0) {
            var error = true;
            $('#briefDesc').css("border-color", "#D8000C");
        } else {
            $('#briefDesc').css("border-color", "#ced4da");
        }
    });

    /* ========================================================================= */
    /*  Map Button Toggle
    /* ========================================================================= */

    $(".mapButt").on("click", function() {
        $(".map-side").slideToggle("slow");
        if ($(this).find('i').hasClass('lni-map-marker')) {
            $(this).find('i').toggleClass('lni-close');
        } else {
            $(this).find('i').toggleClass('lni-map-marker');
        }
    });

    /* ========================================================================= */
    /*  WOW Plugin
    /* ========================================================================= */

    /*
    var wow = new WOW({
        offset: 40, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    });
    wow.init();
    */
   
    /* ========================================================================= */
    /*  Preloader
    /* ========================================================================= */

    $('body').css('overflow-y', 'visible');
    $(".spinner").fadeOut(function() {
        $("#loading-mask").fadeOut("slow");
    });
    
    // End
});

/* ========================================================================= */
/*  Divs About Me Effect
/* ========================================================================= */

(function() {
    var tiltSettings = [{}, {
        movement: {
            overlay: {
                translation: {
                    x: 10,
                    y: -10,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                reverseAnimation: {
                    duration: 2000,
                    easing: 'easeOutExpo'
                }
            }
        }
    }, {
        movement: {
            overlay: {
                translation: {
                    x: 10,
                    y: 10,
                    z: [0, 20]
                },
                reverseAnimation: {
                    duration: 1000,
                    easing: 'easeOutExpo'
                }
            }
        }
    }, {
        movement: {
            overlay: {
                translation: {
                    x: 5,
                    y: -5,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 6
                },
                reverseAnimation: {
                    duration: 1000,
                    easing: 'easeOutQuad'
                }
            }
        }
    }, {
        movement: {
            overlay: {
                translation: {
                    x: 0,
                    y: 8,
                    z: 0
                },
                reverseAnimation: {
                    duration: 600,
                    easing: 'easeOutExpo'
                }
            }
        }
    }, {
        movement: {
            overlay: {
                translation: {
                    x: 15,
                    y: -15,
                    z: 0
                },
                reverseAnimation: {
                    duration: 500,
                    easing: 'easeOutExpo'
                }
            }
        }
    }, {
        movement: {
            overlay: {
                translation: {
                    x: -30,
                    y: -30,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 3
                },
                reverseAnimation: {
                    duration: 750,
                    easing: 'easeOutExpo'
                }
            }
        }
    }];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {
            idx = pos % 5 === 0 ? idx + 1 : idx;
            new TiltFx(el, tiltSettings[idx - 1]);
        });
    }

    imagesLoaded(document.querySelector('div'), function() {
        document.body.classList.remove('loading');
        init();
    });

    [].slice.call(document.querySelectorAll('a[href="#"]')).forEach(function(el) {
        el.addEventListener('click', function(ev) {
            ev.preventDefault();
        });
    });
})();

/* ========================================================================= */
/*  Google Map
/* ========================================================================= */

function initialize() {
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        center: new google.maps.LatLng(53.480759, -2.242631)
    };
    var map = new google.maps.Map(document.getElementById('googleMap'),
        mapOptions);
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        animation: google.maps.Animation.BOUNCE,
        icon: 'img/map-marker.png',
        map: map,
    });

}
google.maps.event.addDomListener(window, 'load', initialize);