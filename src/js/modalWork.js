export function modalWork() {
  const $open = $('.js-modal-open');
  const $close = $('.js-modal-close');

  $open.on('click', function(){
    let id = $(this).data('id');
    let showModal = $('.js-modal-container[data-id="modal' + id + '"]');
    showModal.css({
      'visibility': 'visible',
      'opacity': '1',
      'transform': 'scale(1)',
    });
    $('html').css({
      'overflow-y': 'hidden',
    });
    // $('.main').css({
    //   'margin-right': '10px',
    // });
  });

  $close.on('click', function(){
    let id = $(this).data('id');
    let showModal = $('.js-modal-container[data-id="modal' + id + '"]');
    console.log(showModal);
    showModal.css({
      'visibility': 'hidden',
      'opacity': '0',
      'transform': 'scale(1.2)',
    });
    $('html').css({
      'overflow-y': 'auto',
    });
    // $('.main').css({
    //   'margin-right': '0px',
    // });
  });

}