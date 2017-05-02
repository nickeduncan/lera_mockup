$(document).on('turbolinks:load', function() {
  $('.menu_toggle').on('click', function() {
    $('.menu').slideToggle('400');
  });

  $('.menu-about').on('click', function() {
    $(document).find('.active').removeClass('active');
    $('.about').addClass('active');
  });

  $('.menu-gallery').on('click', function() {
    $(document).find('.active').removeClass('active');
    $('.gallery').addClass('active');
  });

  $('.menu-contact').on('click', function() {
    $(document).find('.active').removeClass('active');
    $('.contact').addClass('active');
  });
});
