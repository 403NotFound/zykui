import e from "./components/index.js";
/* empty css               */import r from "./directives/index.js";
import { getAge as c } from "./utils/common.js";
import { default as l } from "./components/button/index.js";
import { default as x } from "./components/input/index.js";
const m = (t) => {
  e.forEach((o) => {
    t.component(o.name, o);
  }), t.use(r);
}, p = {
  install: m,
  directives: r,
  ...e
};
export {
  l as ZButton,
  x as ZInput,
  p as default,
  c as getAge
};
