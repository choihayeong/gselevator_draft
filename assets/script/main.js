$(function() {
    // INTRO
    setTimeout(function() {
        $('.loading').addClass('on');
    }, 1200)
    setTimeout(function() {
        $('.header').removeClass('nav-up');
        $('.header').addClass('nav-down');
        $('.main-visual').addClass('start');
    }, 2400)
    // kvSwiper
    const kvSwiper = new Swiper('.main-visual__bg', {
        effect:'fade',
        loop:true,
        pagination: {
            el: '.main-visual__indicator'
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        on : {
            slideChange: function () {
                $('.pager__current').text(this.realIndex + 1);
                $('.preview > li').eq(this.realIndex).addClass('active').siblings().removeClass('active');
            },
            slideChangeTransitionStart: function () {
                $('.pager__percent').removeClass('active');
            },
            slideChangeTransitionEnd: function () {
                $('.pager__percent').addClass('active');
            },
            init: function() {
                setTimeout(function() {
                    $('.pager__percent').addClass('active');
                }, 1400)
            }
        }
    })
    kvSwiper.autoplay.stop();
    setTimeout(function() {
        kvSwiper.autoplay.start();
    }, 2400)
    $('.preview > li').click(function(){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        kvSwiper.slideTo(index);
    })

    // type of elevator
    const teSwiper = new Swiper('.elevator-type__list', {
        // loop: true,
        // loopedSlides: 4,
        rewind:true,
        slidesPerView: 'auto',
        spaceBetween:35,
        watchOverflow: false,
    })
    // tech slider
    const techSwiper = new Swiper('.main-tech__slider', {
        effect:'fade',
        loop:true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        on : {
            slideChange: function () {
                $('.main-tech__indicator > li').eq(this.realIndex).addClass('active').siblings().removeClass('active');
            },
            init: function () {
                if ($('.main-tech').hasClass('active')) {
                    console.log('once');
                }
            }
        }
    })
    // techSwiper.autoplay.stop();
    $('.main-tech__indicator > li').click(function(){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        techSwiper.slideTo(index);
    })
})