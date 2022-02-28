$(document).ready(() => {
    // navbar
    $('.navbar-show-btn').click(() => {
        $('.navbar-collapse').addClass('showNavbar');
    });

    $('.navbar-hide-btn').click(() => {
        $('.navbar-collapse').removeClass('showNavbar');
    });

    // slick slider
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    // stopping transition
    let resizeTimer;
    $(window).on('resize', () => {
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });
});

$('#login').click(function(){
    $('.login-form').addClass('popup');
});

$('.login-form form .fa-times').click(function(){
    $('.login-form').removeClass('popup');
});

// $(document).ready(function () {
//     $(".customer-logos").slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1500,
//       arrows: false,
//       dots: false,
//       pauseOnHover: false,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 4
//           }
//         },
//         {
//           breakpoint: 520,
//           settings: {
//             slidesToShow: 3
//           }
//         }
//       ]
//     });
//   });

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}