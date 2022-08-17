$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        touchThreshold:10,
        touchmove:true,
        waitForAnimate:false,
        infinite:true,
    });
    $('.head__burger').click(function(event) {
        $('.head__burger,.head__row,.head__language').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.head__ru').click(function(event) {
        $('.head__eng').removeClass('active');
        $('.head__ru').addClass('active');
    });
    $('.head__eng').click(function(event) {
        $('.head__ru').removeClass('active');
        $('.head__eng').addClass('active');
    });
   
    $('.main__ru').click(function(event) {
        $('.main__eng').removeClass('active');
        $('.main__ru').addClass('active');
    });
    $('.main__eng').click(function(event) {
        $('.main__ru').removeClass('active');
        $('.main__eng').addClass('active');
    });
});