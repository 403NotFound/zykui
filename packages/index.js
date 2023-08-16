import components from './components/index'
import './css/index.css'
import directives from './directives'

export * from './utils/common'
export * from './components/index'
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.use(directives)
}

export default {
  install,
  directives,
  ...components,
}
