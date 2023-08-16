import { defineComponent as o, ref as r, onMounted as s } from "vue";
import "./index.vue2.js";
import _ from "../../../_virtual/_plugin-vue2_normalizer.js";
const l = o({
  name: "ZInput"
}), a = /* @__PURE__ */ Object.assign(l, {
  setup(t) {
    const e = r(123);
    return s(() => {
      console.log("hello");
    }), { __sfc: !0, a: e };
  }
});
var c = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("div", { staticClass: "box" }, [n("el-input", { attrs: { placeholder: "请输入1" } })], 1);
}, p = [], u = /* @__PURE__ */ _(
  a,
  c,
  p,
  !1,
  null,
  "14545e8e",
  null,
  null
);
const d = u.exports;
export {
  d as default
};
