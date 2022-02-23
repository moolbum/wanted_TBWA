$(function () {
  $(window).scroll(function () {
    var navbar = $(this).scrollTop();
    var header = $('header');
    if (navbar > 89.5) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });
});
