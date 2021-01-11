$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('.nav-logo').attr('src','imgs/logo.png');
            $('#myBtn').css("display", "block");
        } else {
            $('.navbar').removeClass('active');
            $('.nav-logo').attr('src','imgs/logo2.png');
              $('#myBtn').css("display", "none");
        }

        if ( $(window).scrollTop() > 200 ) {
            $('#scroll-btn').css("display", "block");
        } else {
              $('#scroll-btn').css("display", "none");
        }
    });
});
AOS.init({
  duration: 1200,
})



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
