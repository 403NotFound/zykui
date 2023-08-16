import { defineComponent as _, ref as o } from "vue";
import "./index.vue2.js";
import s from "../../../_virtual/_plugin-vue2_normalizer.js";
const a = _({
  name: "ZButton"
}), u = /* @__PURE__ */ Object.assign(a, {
  setup(n) {
    return { __sfc: !0, a: o(12345) };
  }
});
var f = function() {
  var t = this, e = t._self._c, r = t._self._setupProxy;
  return e("div", [e("el-button", { attrs: { type: "primary" } }, [t._v("Button2-" + t._s(r.a))])], 1);
}, p = [], c = /* @__PURE__ */ s(
  u,
  f,
  p,
  !1,
  null,
  "0bee39f6",
  null,
  null
);
const d = c.exports;
export {
  d as default
};
