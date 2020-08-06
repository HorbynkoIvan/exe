$(document).ready(function () {
        $('.works_btns button, .works_btns a').on('focus', function (e) {
            $(this).parents('.works__element').addClass('works__element--active');
        })
        $('.works_btns button, .works_btns a').on('blur', function (e) {
            $(this).parents('.works__element').removeClass('works__element--active');
        })
    }
)