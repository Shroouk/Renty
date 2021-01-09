$(window).scroll(function(){
  if ($(this).scrollTop() >5) {
    $('.on-stick-nav').addClass("fixed-top");
    $('.navbar .navbar-brand img').attr('src','imgs/logo.png');
      $('.nav-dropdown-btn img').attr('src','imgs/user-icon2.png');
  }else {
      $('.on-stick-nav').removeClass("fixed-top");
      $('.navbar .navbar-brand img').attr('src','imgs/logo2.png');
      $('.nav-dropdown-btn img').attr('src','imgs/user-icon.png');
  }
});
