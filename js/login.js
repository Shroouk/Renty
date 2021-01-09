// switch between login and signup
$("#signup").click(function() {
  $(".message").css("transform", "translateX(100%)");
  if ($(".message").hasClass("login")) {
    $(".message").removeClass("login");
  }
  $(".message").addClass("signup");
});

$("#login").click(function() {
  $(".message").css("transform", "translateX(0)");
  if ($(".message").hasClass("login")) {
    $(".message").removeClass("signup");
  }
  $(".message").addClass("login");
});


// Hide place holder on focus
$('[placeholder]').focus(function(){
  $(this).attr('data-text', $(this).attr('placeholder'));
  $(this).attr('placeholder', '');
}).blur(function() {
  $(this).attr('placeholder', $(this).attr('data-text'));
});

// Show Password
 var password = $('.password');
 $('.show-pass').hover(function () {
   password.attr('type','text');
 }, function() {
   password.attr('type','password');
 });
