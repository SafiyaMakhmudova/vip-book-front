import { createRouter, createWebHistory } from 'vue-router';
import { layoutMiddleware } from './middlewares/index';
import i18n from '@/plugins/i18n';

// import all constants
import { Layouts } from '@/constants/layouts';

// import all features routes
import userRoutes from '@/features/users/router';
// import decodeJwt from '@/functions/tokenParser';

const routes = [
    ...userRoutes,
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: authRoute.RT_NOT_FOUND,
    //     component: () => import('@/views/NotFound.vue'),
    //     meta: {
    //       layouts:Layouts.AUTH,
    //       requiresAuth: false,
    //       title: authRoute.MT_NOT_FOUND
    //     }
    //   },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeResolve(async (to) => {
  await layoutMiddleware(to);
  updateMeta(to?.meta?.title);
});

function updateMeta(title) {
  document.title = title;
}


export { updateMeta };
export default router;
