import { Layouts } from '@/constants/layouts';
import { userRoute } from '@/constants/routes/user.js';

export default [
  {
    path: "/",
    name: userRoute.RT_HOME,
    component: () => import("@/features/users/pages/Main.vue"),
    meta: {
      layout:Layouts.USER,
      title: userRoute.MT_HOME
    }
 },
 {
  path: "/about",
  name: 'about',
  component: () => import("@/features/users/pages/About.vue"),
  meta: {
    layout:Layouts.USER,
    title: 'About'
  }
},
  {
    path: '/book',
    name: userRoute.RT_ABOUT,
    component: () => import('@/features/users/pages/Books.vue'),
    meta: {
      layout:Layouts.USER,
      title: userRoute.MT_ABOUT
    }
  },
  {
    path: '/search',
    name: userRoute.RT_SEARCH,
    component: () => import('@/features/users/pages/Search.vue'),
    meta: {
      layout:Layouts.AUTH,
      requiresAuth: false,
      title: userRoute.MT_SEARCH
    }
  },
  {
    path: '/basket',
    name: userRoute.RT_ORDER,
    component: () => import('@/features/users/pages/Basket.vue'),
    meta: {
      layout:Layouts.ORDER,
      requiresAuth: false,
      title: userRoute.MT_ORDER
    }
  },
  {
    path: '/payment',
    name: userRoute.RT_PAYMENT,
    component: () => import('@/features/users/pages/Payment.vue'),
    meta: {
      layout:Layouts.ORDER,
      requiresAuth: false,
      title: userRoute.MT_PAYMENT
    }
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('@/features/users/pages/Successfully.vue'),
    meta: {
      layout:Layouts.ORDER,
      requiresAuth: false,
      title: userRoute.MT_PAYMENT
    }
  },
  
//   {
//     path:"/stationary",
//     name:userRoute.RT_CONTACT,
//     component: () => import("@/features/users/pages/contact.vue"),
//     meta:{
//       layout:Layouts.USER,
//       title:userRoute.MT_CONTACT
//     }
//   },
];
