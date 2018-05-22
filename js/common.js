$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay : true,
        dots:  false,
        autoplayTimeout : 4500,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

});
$(function() {

    $('#menu-menu').mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<h1>ГУК Ветковская районная библиотека</h1>'
        }
    });

    var $menu = $("#menu-menu").mmenu();

    var $icon = $("#mmenu-icon");

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

