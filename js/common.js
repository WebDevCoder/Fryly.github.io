$(function() {
    var owl = $(".owl-carousel");
        owl.owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
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
    $(".next_button").click(function(){
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function(){
        owl.trigger("owl.prev");
    });
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

