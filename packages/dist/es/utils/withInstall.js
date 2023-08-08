const e = (a) => (a.install = (l) => {
  console.log(a.name);
  const s = a.name || a._name;
  l.component(s, a);
}, a);
export {
  e as default
};
