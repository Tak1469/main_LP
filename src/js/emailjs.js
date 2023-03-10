import { getEmailjsPublicKey, getEmailjsServiceKey, getEmailjsTemplateKey } from "./env";

export function emailJs() {
  // 環境変数取得
  const EmailjsPublicKey = getEmailjsPublicKey();
  const EmailjsServiceKey = getEmailjsServiceKey();
  const EmailjsTemplateKey = getEmailjsTemplateKey();
  // フォームのバリデーション submimt操作
  const form = $('.js-form');
  const modal = $(".js-contact-modal");
  const success = $(".js-success");
  const error = $(".js-error");

  // 送信失敗時のcloseボタン
  $('.js-closed').on('click', function () {
    modal.fadeOut();
    form.delay(500).fadeIn();
    success.hidden();
    error.hidden();
  });
  // 送信成功時のアイコン表示
  function successShow() {
    form.fadeOut();
    modal.delay(500).fadeIn();
    success.show();
  }
  // 送信失敗時のアイコン表示
  function errorShow() {
    form.fadeOut();
    modal.delay(500).fadeIn();
    error.show();
  }

  // メール入力処理
  window.onload = function () {
    const $contactSubmit = $('.js-cursor');
    $contactSubmit.css('cursor', 'not-allowed');
    $contactSubmit.disabled = true;
    // contactフォームの送信ボタン処理
    form.on('focusout', function () {
      const isRequired = this.checkValidity();
      if (isRequired) {
        $contactSubmit.disabled = false;
        $contactSubmit.css('cursor', 'pointer');
        return;
      } else {
        $contactSubmit.css('cursor', 'not-allowed');
        $contactSubmit.disabled = true;
      }
    });


    // emailjsの処理
    emailjs.init(EmailjsPublicKey);

    const FormEle = document.getElementById('contact-form');
    FormEle.addEventListener('submit', function (event) {
      event.preventDefault();
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm(EmailjsServiceKey, EmailjsTemplateKey, this)
        // 送信成功
        .then(function () {
          // input クリア
          form[0][1].value = '';
          form[0][2].value = '';
          form[0][3].value = '';
          successShow();
          //送信失敗
        }, function () {
          errorShow();
        });
    });
  };
}