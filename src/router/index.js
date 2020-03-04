import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/reportMatter'
    },
    {
      path: '/reportMatter',
      name: 'reportMatter',
      component: ()=>import('@/views/reportMatter/reportMatter.vue')
    },
    {
      path: '/consult',
      name: 'consult',
      component: ()=>import('@/views/consult/consult.vue')
    },
    {
      path: '/consultDetail',
      name: 'consultDetail',
      component: ()=>import('@/views/consult/consultDetail.vue')
    },
    {
      path: '/giveConsult',
      name: 'giveConsult',
      component: ()=>import('@/views/consult/giveConsult.vue')
    },
    {
      path: '/complaint',
      name: 'complaint',
      component: ()=>import('@/views/complaint/complaint.vue')
    },
    {
      path: '/freeRepair',
      name: 'freeRepair',
      component: ()=>import('@/views/freeRepair/freeRepair.vue')
    },
    {
      path: '/chooseArea',
      name: 'chooseArea',
      component: ()=>import('@/views/freeRepair/chooseArea.vue')
    },
    {
      path: '/payRepair',
      name: 'payRepair',
      component: ()=>import('@/views/payRepair/payRepair.vue')
    },
    {
      path: '/chooseAddress',
      name: 'chooseAddress',
      component: ()=>import('@/views/payRepair/chooseAddress.vue')
    },
    {
      path: '/priceIntroduction',
      name: 'priceIntroduction',
      component: ()=>import('@/views/payRepair/priceIntroduction.vue')
    },
    {
      path: '/complaintRecord',
      name: 'complaintRecord',
      component: ()=>import('@/views/complaintRecord/complaintRecord.vue')
    },
    {
      path: '/complaintDetail',
      name: 'complaintDetail',
      component: ()=>import('@/views/complaintRecord/complaintDetail.vue')
    },
    {
      path: '/fixRecord',
      name: 'fixRecord',
      component: ()=>import('@/views/fixRecord/fixRecord.vue')
    },
    {
      path: '/finishFixDetail',
      name: 'finishFixDetail',
      component: ()=>import('@/views/fixRecord/finishFixDetail.vue')
    },
    {
      path: '/havePaidFixDetail',
      name: 'havePaidFixDetail',
      component: ()=>import('@/views/fixRecord/havePaidFixDetail.vue')
    },
    {
      path: '/orderFixDetail',
      name: 'orderFixDetail',
      component: ()=>import('@/views/fixRecord/orderFixDetail.vue')
    },
    {
      path: '/payFixDetail',
      name: 'payFixDetail',
      component: ()=>import('@/views/fixRecord/payFixDetail.vue')
    },
    {
      path: '/payPage',
      name: 'payPage',
      component: ()=>import('@/views/payPage/payPage.vue')
    },
    {
      path: '/payConsult',
      name: 'payConsult',
      component: ()=>import('@/views/payPage/payConsult.vue')
    },
    {
      path: '/payConsult',
      name: 'payConsult',
      component: ()=>import('@/views/payPage/payConsult.vue')
    },
  ]
})
