export function headerScroll() {
  // $(window).bind("scroll",function() {
  //   console.log("scrollY: " + scrollY + "\n" );
  // })

  $(window).on('scroll', function () {
    if($('.l-header').height() < $(this).scrollTop()){
      $('.l-header').addClass('js-add-backgroundcolor');
      $('.l-menu__link').addClass('js-add-fontcolor');
    }else {
      $('.l-header').removeClass('js-add-backgroundcolor');
      $('.l-menu__link').removeClass('js-add-fontcolor');
    }
  });

}