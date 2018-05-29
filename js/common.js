$(function() {
    var owl = $(".owl-carousel");
        owl.owlCarousel({
        loop:true,
        margin: 0,
        autoHeight: true,
        autoplay : true,
        dots:  false,
        autoplayTimeout : 4500,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });
    $('.next_button').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.prev_button').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});

$(function() {

    $('#menu-menu').mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: 'ГУК Ветковская районная библиотека'
        }
    });

    var $menu = $("#menu-menu").mmenu();

    var $icon = $(".hamburger"); //скоре всего не правильно задал класс для иконки

    var API = $menu.data( "mmenu" );


    $icon.on( "click", function() {

        API.open();

    });


    API.bind( "opened", function() {

        setTimeout(function() {

            $icon.addClass( "is-active" );

        }, 100);

        $icon.on( "click", function() {

            API.close();

        });

    });

    API.bind( "closed", function() {

        setTimeout(function() {

            $icon.removeClass( "is-active" );

        }, 100);

        $icon.on( "click", function() {

            API.open();

        });

    });
});

