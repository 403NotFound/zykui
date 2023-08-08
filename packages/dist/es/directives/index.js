import i from "./color.js";
const e = {
  color: i
}, r = {
  install(c) {
    Object.keys(e).forEach((t) => {
      c.directive(t, e[t]);
    });
  }
};
export {
  r as default
};
