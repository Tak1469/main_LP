export function linkScroll() {
    // #から始まらない場合、処理しない
    $("a[href*='#']").on("click", function () {
      const duration = 1000;
      const type = "swing";
       // href属性の取得
      let href = $(this).attr("href");
      // 移動先の取得（hrefが#indexならトップ$(html)に、）
      let target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先のポジション取得
      let pos = target.offset().top;
      // スクロール処理
      $("html, body").animate({ scrollTop: pos }, duration, type);

      // リンク先へ移動する機能を無効化
      return false;
    });

    $(window).on("scroll", function(){
      let scroll = window.pageYOffset;
      const works = 1000;
      const skill = 2000;
      const about = 3000;
      const contact = 3500;
      
      if (scroll > contact) {
        $('.js-add__xline4').addClass('js-scroll-xline');
        $('.js-add__xline3, .js-add__xline2, .js-add__xline1, .js-add__xline0').removeClass('js-scroll-xline');
        $('.js-add__yline4').addClass('js-scroll-yline');
        $('.js-add__yline3, .js-add__yline2, .js-add__yline1, .js-add__yline0').removeClass('js-scroll-yline');
      } else if (scroll > about) {
        $('.js-add__xline3').addClass('js-scroll-xline');
        $('.js-add__xline4, .js-add__xline2, .js-add__xline1, .js-add__xline0').removeClass('js-scroll-xline');
        $('.js-add__yline3').addClass('js-scroll-yline');
        $('.js-add__yline4, .js-add__yline2, .js-add__yline1, .js-add__yline0').removeClass('js-scroll-yline');
      } else if (scroll > skill) {
        $('.js-add__xline2').addClass('js-scroll-xline');
        $('.js-add__xline4, .js-add__xline3, .js-add__xline1, .js-add__xline0').removeClass('js-scroll-xline');
        $('.js-add__yline2').addClass('js-scroll-yline');
        $('.js-add__yline4, .js-add__yline3, .js-add__yline1, .js-add__yline0').removeClass('js-scroll-yline');
      } else if (scroll > works) {
        $('.js-add__xline1').addClass('js-scroll-xline');
        $('.js-add__xline4, .js-add__xline3, .js-add__xline2, .js-add__xline0').removeClass('js-scroll-xline');
        $('.js-add__yline1').addClass('js-scroll-yline');
        $('.js-add__yline4, .js-add__yline3, .js-add__yline2, .js-add__yline0').removeClass('js-scroll-yline');
      } else {
        $('.js-add__xline0').addClass('js-scroll-xline');
        $('.js-add__xline4, .js-add__xline3, .js-add__xline2, .js-add__xline1').removeClass('js-scroll-xline');
        $('.js-add__yline0').addClass('js-scroll-yline');
        $('.js-add__xline4, .js-add__yline3, .js-add__yline2, .js-add__yline1').removeClass('js-scroll-yline');
      }

    });

}


