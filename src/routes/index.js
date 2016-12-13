import * as c from '../components'
window.$ = window.jQuery = require('jquery')
window.$ = window.$.extend(require('jquery-ui'))

const routes = [
  { path: '/', component: c.Home, name: 'home' },
  { path: '/global', component: c.GlobalService, name: 'global' },
  { path: '/named', component: c.NamedServices, name: 'named' },
  { path: '/effects', component: c.DragEffects, name: 'effects' }
]

console.log('routes', routes)

export default routes

