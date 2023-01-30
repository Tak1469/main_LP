const EMAILJS_PUBLIC_KEY = process.env.PUBLIC_KEY;
const EMAILJS_SERVICE_KEY = process.env.SERVICE_KEY;
const EMAILJS_TEMPLATE_KEY = process.env.TEMPLATE_KEY;

if (EMAILJS_PUBLIC_KEY === undefined || EMAILJS_SERVICE_KEY === undefined || EMAILJS_TEMPLATE_KEY === undefined) {
  throw new Error("環境変数不足エラー");
}

export const getEmailjsPublicKey = () => {
  return EMAILJS_PUBLIC_KEY;
};
export const getEmailjsServiceKey = () => {
  return EMAILJS_SERVICE_KEY;
};
export const getEmailjsTemplateKey = () => {
  return EMAILJS_TEMPLATE_KEY;
};
