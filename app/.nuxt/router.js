import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e6116948 = () => interopDefault(import('..\\pages\\adminEmpDashboard.vue' /* webpackChunkName: "pages/adminEmpDashboard" */))
const _c091beae = () => interopDefault(import('..\\pages\\Calender.vue' /* webpackChunkName: "pages/Calender" */))
const _7b2dec13 = () => interopDefault(import('..\\pages\\cardDetails.vue' /* webpackChunkName: "pages/cardDetails" */))
const _2877ed33 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _3d618e77 = () => interopDefault(import('..\\pages\\CustomerDashboard.vue' /* webpackChunkName: "pages/CustomerDashboard" */))
const _300c65e5 = () => interopDefault(import('..\\pages\\CustomerDetails.vue' /* webpackChunkName: "pages/CustomerDetails" */))
const _1843e2f2 = () => interopDefault(import('..\\pages\\CustomerFeedback.vue' /* webpackChunkName: "pages/CustomerFeedback" */))
const _60287262 = () => interopDefault(import('..\\pages\\EmployeeAdmin.vue' /* webpackChunkName: "pages/EmployeeAdmin" */))
const _88b334c2 = () => interopDefault(import('..\\pages\\EventForm.vue' /* webpackChunkName: "pages/EventForm" */))
const _85579c40 = () => interopDefault(import('..\\pages\\Expenditure.vue' /* webpackChunkName: "pages/Expenditure" */))
const _f845be50 = () => interopDefault(import('..\\pages\\Income.vue' /* webpackChunkName: "pages/Income" */))
const _3c93fd8a = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _2d11b964 = () => interopDefault(import('..\\pages\\Menu.vue' /* webpackChunkName: "pages/Menu" */))
const _d4e8bd7e = () => interopDefault(import('..\\pages\\MenuCust.vue' /* webpackChunkName: "pages/MenuCust" */))
const _4d7e8191 = () => interopDefault(import('..\\pages\\Newrequirements.vue' /* webpackChunkName: "pages/Newrequirements" */))
const _e891ca22 = () => interopDefault(import('..\\pages\\Order.vue' /* webpackChunkName: "pages/Order" */))
const _225037d8 = () => interopDefault(import('..\\pages\\Orders.vue' /* webpackChunkName: "pages/Orders" */))
const _07606932 = () => interopDefault(import('..\\pages\\Payment.vue' /* webpackChunkName: "pages/Payment" */))
const _46eb552c = () => interopDefault(import('..\\pages\\paymentSuccess.vue' /* webpackChunkName: "pages/paymentSuccess" */))
const _381002cc = () => interopDefault(import('..\\pages\\Planning.vue' /* webpackChunkName: "pages/Planning" */))
const _298de7ef = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _7f66f7f3 = () => interopDefault(import('..\\pages\\Profit.vue' /* webpackChunkName: "pages/Profit" */))
const _bb74be72 = () => interopDefault(import('..\\pages\\Signup.vue' /* webpackChunkName: "pages/Signup" */))
const _2d15dd68 = () => interopDefault(import('..\\pages\\Stocks.vue' /* webpackChunkName: "pages/Stocks" */))
const _cf31bb1a = () => interopDefault(import('..\\pages\\supplyCharts.vue' /* webpackChunkName: "pages/supplyCharts" */))
const _7d9587a0 = () => interopDefault(import('..\\pages\\supplyTransaction.vue' /* webpackChunkName: "pages/supplyTransaction" */))
const _142433bf = () => interopDefault(import('..\\pages\\Transaction.vue' /* webpackChunkName: "pages/Transaction" */))
const _0105eb25 = () => interopDefault(import('..\\pages\\vendorInfo.vue' /* webpackChunkName: "pages/vendorInfo" */))
const _24cd143e = () => interopDefault(import('..\\pages\\cart\\confirm.vue' /* webpackChunkName: "pages/cart/confirm" */))
const _6e031a17 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _090b8ada = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adminEmpDashboard",
    component: _e6116948,
    name: "adminEmpDashboard"
  }, {
    path: "/Calender",
    component: _c091beae,
    name: "Calender"
  }, {
    path: "/cardDetails",
    component: _7b2dec13,
    name: "cardDetails"
  }, {
    path: "/cart",
    component: _2877ed33,
    name: "cart"
  }, {
    path: "/CustomerDashboard",
    component: _3d618e77,
    name: "CustomerDashboard"
  }, {
    path: "/CustomerDetails",
    component: _300c65e5,
    name: "CustomerDetails"
  }, {
    path: "/CustomerFeedback",
    component: _1843e2f2,
    name: "CustomerFeedback"
  }, {
    path: "/EmployeeAdmin",
    component: _60287262,
    name: "EmployeeAdmin"
  }, {
    path: "/EventForm",
    component: _88b334c2,
    name: "EventForm"
  }, {
    path: "/Expenditure",
    component: _85579c40,
    name: "Expenditure"
  }, {
    path: "/Income",
    component: _f845be50,
    name: "Income"
  }, {
    path: "/Login",
    component: _3c93fd8a,
    name: "Login"
  }, {
    path: "/Menu",
    component: _2d11b964,
    name: "Menu"
  }, {
    path: "/MenuCust",
    component: _d4e8bd7e,
    name: "MenuCust"
  }, {
    path: "/Newrequirements",
    component: _4d7e8191,
    name: "Newrequirements"
  }, {
    path: "/Order",
    component: _e891ca22,
    name: "Order"
  }, {
    path: "/Orders",
    component: _225037d8,
    name: "Orders"
  }, {
    path: "/Payment",
    component: _07606932,
    name: "Payment"
  }, {
    path: "/paymentSuccess",
    component: _46eb552c,
    name: "paymentSuccess"
  }, {
    path: "/Planning",
    component: _381002cc,
    name: "Planning"
  }, {
    path: "/products",
    component: _298de7ef,
    name: "products"
  }, {
    path: "/Profit",
    component: _7f66f7f3,
    name: "Profit"
  }, {
    path: "/Signup",
    component: _bb74be72,
    name: "Signup"
  }, {
    path: "/Stocks",
    component: _2d15dd68,
    name: "Stocks"
  }, {
    path: "/supplyCharts",
    component: _cf31bb1a,
    name: "supplyCharts"
  }, {
    path: "/supplyTransaction",
    component: _7d9587a0,
    name: "supplyTransaction"
  }, {
    path: "/Transaction",
    component: _142433bf,
    name: "Transaction"
  }, {
    path: "/vendorInfo",
    component: _0105eb25,
    name: "vendorInfo"
  }, {
    path: "/cart/confirm",
    component: _24cd143e,
    name: "cart-confirm"
  }, {
    path: "/products/:id",
    component: _6e031a17,
    name: "products-id"
  }, {
    path: "/",
    component: _090b8ada,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
