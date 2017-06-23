$(function() {
  const carousel = document.querySelector('my-carousel');
  var play = setInterval(_ => carousel.next(), 4000);

  $('#stop').on('click', () => {
    clearInterval(play);
  });
});
