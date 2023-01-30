
// import 文を使ってstyle.cssファイルを読み込む。
import "../scss/style.scss";


// import 文を使って app.js ファイルを読み込む。
import { loading } from "./loading.js";
import { headerScroll } from "./headerScroll.js";
import { linkScroll } from "./linkScroll.js";
import { backgroundEffect } from "./backgroundEffect.js";
import { modalWork } from "./modalWork.js";
import { emailJs } from "./emailjs.js";

loading();
headerScroll();
linkScroll();
backgroundEffect();
modalWork();
emailJs();



