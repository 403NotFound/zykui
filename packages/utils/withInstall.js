export default component => {
  component.install = app => {
    console.log(component.name)
    const name = component.name || component._name
    app.component(name, component)
  }

  return component
}
