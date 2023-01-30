export function loading() {
  $(window).on('load', function() {
    $(this).delay(1500).queue(function() {
      $('.js-loading').addClass('js-loaded');
    });
  });
}
