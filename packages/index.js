import card from './card/index'

const components = [
    card
]

components.install = (vue) => {
    components.forEach(component => {
        vue.component(component.name, component)
    });
}

export default components