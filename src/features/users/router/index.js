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
    path: '/about',
    name: userRoute.RT_ABOUT,
    component: () => import('@/features/users/pages/About.vue'),
    meta: {
      layout:Layouts.USER,
      title: userRoute.MT_ABOUT
    }
  }
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
