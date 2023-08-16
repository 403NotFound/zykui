import { onMounted as s, ref as e } from "vue";
import "./index.vue2.js";
import _ from "../../../_virtual/_plugin-vue2_normalizer.js";
const a = { name: "ZButton" }, c = /* @__PURE__ */ Object.assign(a, {
  setup(o) {
    s(() => {
      console.log(111);
    });
    const t = e(), n = e(12345);
    return { __sfc: !0, msg: t, a: n };
  }
});
var u = function() {
  var t = this, n = t._self._c, r = t._self._setupProxy;
  return n("div", [n("el-button", { attrs: { type: "primary" } }, [t._v("Button2-" + t._s(r.a))])], 1);
}, l = [], f = /* @__PURE__ */ _(
  c,
  u,
  l,
  !1,
  null,
  "cd7f5284",
  null,
  null
);
const d = f.exports;
export {
  d as default
};
