import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\store\\card.js'), 'card.js')
  resolveStoreModules(require('..\\store\\customer.js'), 'customer.js')
  resolveStoreModules(require('..\\store\\employee.js'), 'employee.js')
  resolveStoreModules(require('..\\store\\event.js'), 'event.js')
  resolveStoreModules(require('..\\store\\expense.js'), 'expense.js')
  resolveStoreModules(require('..\\store\\feedback.js'), 'feedback.js')
  resolveStoreModules(require('..\\store\\income.js'), 'income.js')
  resolveStoreModules(require('..\\store\\menu.js'), 'menu.js')
  resolveStoreModules(require('..\\store\\order.js'), 'order.js')
  resolveStoreModules(require('..\\store\\request.js'), 'request.js')
  resolveStoreModules(require('..\\store\\stock.js'), 'stock.js')
  resolveStoreModules(require('..\\store\\transaction.js'), 'transaction.js')
  resolveStoreModules(require('..\\store\\transactions.js'), 'transactions.js')
  resolveStoreModules(require('..\\store\\users.js'), 'users.js')
  resolveStoreModules(require('..\\store\\vendor.js'), 'vendor.js')
  resolveStoreModules(require('..\\store\\cart\\mutations.js'), 'cart/mutations.js')
  resolveStoreModules(require('..\\store\\cart\\state.js'), 'cart/state.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '..\\store\\card.js',
      '..\\store\\customer.js',
      '..\\store\\employee.js',
      '..\\store\\event.js',
      '..\\store\\expense.js',
      '..\\store\\feedback.js',
      '..\\store\\income.js',
      '..\\store\\menu.js',
      '..\\store\\order.js',
      '..\\store\\request.js',
      '..\\store\\stock.js',
      '..\\store\\transaction.js',
      '..\\store\\transactions.js',
      '..\\store\\users.js',
      '..\\store\\vendor.js',
      '..\\store\\cart\\mutations.js',
      '..\\store\\cart\\state.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
