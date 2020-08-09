$(document).ready(function () {
        $('.works_btns button, .works_btns a').on('focus', function (e) {
            $(this).parents('.works__element').addClass('works__element--active');
        })
        $('.works_btns button, .works_btns a').on('blur', function (e) {
            $(this).parents('.works__element').removeClass('works__element--active');
        })


        function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
            const progressElement = $(node);
            progressElement.each(function (index, value) {
                $(value).find(nodeLine).animate({
                    width: value.dataset.progressPercent + '%',
                }, animationLength)
                $(value).find(tooltip).show(animationLength)
            })
        }

        let animated = true;// switch to false when animation finished

        $(window).scroll(function () {
            if ($('.skills').offset().top <= $(window).scrollTop()) {
                if (animated) {
                    moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip')
                }
                animated = false;
            }
        })

        //mobile header
        $('.nav__mobile--collapse').on('click', function (e) {
            e.preventDefault();
            $('.header__wrap').toggleClass('nav__mobile--active')
        })

        //init owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots: false,
        navText:[],//remove default arrows
        items:1,
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
    }
)