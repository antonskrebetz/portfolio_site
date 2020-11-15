$(function () {

    //    Mobile nav

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

//    Menu bar

    let header = $("#header"),
        intro = $("#intro"),
        introH = intro.innerHeight(),
        scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function() {
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        };
    });


    const worksSlider = $('[data-slider="slick"]');

//    Menu scroll

    $('[data-scroll]').on("click", function(event) {
        event.preventDefault();

        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 90
        }, 700);

        nav.removeClass("show");
    });

    $('[data-modal]').on("click", function(event) {
        event.preventDefault();

        nav.removeClass("show");
    });


//    Filter
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass('hide')
        } else {
            $("[data-cat]").each(function() {
            let workCat = $(this).data('cat');

            if(workCat != cat) {
                $(this).addClass('hide')
            } else {
                $(this).removeClass('hide');
            };

        });
        };
    });

//    Modal

    let modalCall = $('[data-modal]');
    let modalClose = $('[data-close]');


    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        worksSlider.slick('setPosition');

    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal").on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

//    Slider: https://kenwheeler.github.io/slick/

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.slickPrev').on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find(worksSlider);
        currentSlider.slick("slickPrev");
    });

        $('.slickNext').on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find(worksSlider);
        currentSlider.slick("slickNext");
    });


});
