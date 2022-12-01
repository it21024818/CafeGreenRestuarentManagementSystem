export { default as AddCardForm } from '../..\\components\\addCardForm.vue'
export { default as AddEmpForm } from '../..\\components\\addEmpForm.vue'
export { default as AddReqForm } from '../..\\components\\addReqForm.vue'
export { default as CardTable } from '../..\\components\\cardTable.vue'
export { default as ConfirmPayment } from '../..\\components\\ConfirmPayment.vue'
export { default as CusInfoTable } from '../..\\components\\CusInfoTable.vue'
export { default as CustomerFbForm } from '../..\\components\\customerFbForm.vue'
export { default as CustomerFbTable } from '../..\\components\\customerFbTable.vue'
export { default as Dashboard } from '../..\\components\\dashboard.vue'
export { default as EmpInfo } from '../..\\components\\EmpInfo.vue'
export { default as EventTable } from '../..\\components\\EventTable.vue'
export { default as ExpensesTable } from '../..\\components\\expensesTable.vue'
export { default as FeedbacksArea } from '../..\\components\\feedbacksArea.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Form } from '../..\\components\\Form.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HomeCarousel } from '../..\\components\\HomeCarousel.vue'
export { default as IncomeTable } from '../..\\components\\incomeTable.vue'
export { default as Invoice } from '../..\\components\\Invoice.vue'
export { default as LeavesChart } from '../..\\components\\LeavesChart.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MenuItems } from '../..\\components\\menuItems.vue'
export { default as MenuTable } from '../..\\components\\menuTable.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as NewExpenditure } from '../..\\components\\newExpenditure.vue'
export { default as NewIncome } from '../..\\components\\newIncome.vue'
export { default as Newstockformtest } from '../..\\components\\Newstockformtest.vue'
export { default as OrdersChart } from '../..\\components\\OrdersChart.vue'
export { default as OrdersTable } from '../..\\components\\OrdersTable.vue'
export { default as PlanForm } from '../..\\components\\PlanForm.vue'
export { default as ReqInfo } from '../..\\components\\ReqInfo.vue'
export { default as SignupForm } from '../..\\components\\signupForm.vue'
export { default as SocialMediaBtn } from '../..\\components\\socialMediaBtn.vue'
export { default as Table } from '../..\\components\\Table.vue'
export { default as TestUpdel } from '../..\\components\\TestUpdel.vue'
export { default as TopBar } from '../..\\components\\TopBar.vue'
export { default as TransactionForm } from '../..\\components\\TransactionForm.vue'
export { default as TransactionTable } from '../..\\components\\TransactionTable.vue'
export { default as VendorsForm } from '../..\\components\\VendorsForm.vue'
export { default as VendorsTable } from '../..\\components\\VendorsTable.vue'
export { default as DesktopNav } from '../..\\components\\Desktop\\Nav.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
