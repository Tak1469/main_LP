export function backgroundEffect() {
  // 円の表示時間
  const $bubbleLifeTime = 20;
  // 円の数
  const $noOfBubbles = 200;

  const $wrapper = $('.p-wrapper');

  init();
  // 増幅処理
  function init() {
    let $bubble;
    for (var i = 0; i < $noOfBubbles; i++) {
      $bubble = createBubble();
      $wrapper.append($bubble);
    }
  }
  // 円の生成
  function createBubble() {
    let $circle = createCircle();
    const $circleContainer = $('<div>')
      .addClass('circle_container')
      .css({ transform: 'rotate(' + Math.floor(Math.random() * 360) + 'deg)' })
      .append($circle);

    return $circleContainer;
  }
  // 円の処理
  function createCircle() {
    let $delay = (Math.random() * $bubbleLifeTime);
    let $circle = $('<div>').addClass('circle').css("animation-delay", $delay + "s");

    let $side = (5 + Math.floor(Math.random() * 50)) + 'px';
    $circle.width($side);
    $circle.height($side);

    return $circle;
  }

}