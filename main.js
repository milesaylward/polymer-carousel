$(function() {
  const carousel = document.querySelector('my-carousel');
  var play = setInterval(_ => carousel.next(), 6000);

  $('#stop').on('click', () => {
    clearInterval(play);
    $('#start').attr('disabled', 'disabled');
    $('.warning').addClass('visible');
  });
});
