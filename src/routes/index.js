import * as c from '../components'

const routes = [
  { path: '/', component: c.Home, name: 'home' },
  { path: '/global', component: c.GlobalService, name: 'global' },
  { path: '/named', component: c.NamedServices, name: 'named' },
  { path: '/effects', component: c.DragEffects, name: 'effects' },
  { path: '/model', component: c.CustomModelManager, name: 'model' }
]

// console.log('routes', routes)

export default routes

