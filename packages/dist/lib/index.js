"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("./components/index.js");/* empty css                */const n=require("./directives/index.js"),r=require("./utils/common.js"),i=require("./components/button/index.js"),d=require("./components/input/index.js"),o=e=>{u.default.forEach(t=>{e.component(t.name,t)}),e.use(n.default)},l={install:o,directives:n.default,...u.default};exports.getAge=r.getAge;exports.ZButton=i.default;exports.ZInput=d.default;exports.default=l;