import { Layouts } from '@/constants/layouts';
import { productRoute } from '@/constants/routes/product';

export default [
  {
    path: "/product/:id",
    name: productRoute.RT_SINGLE_PRODUCT,
    component: () => import("@/features/products/pages/SingleProduct.vue"),
    meta: {
      layout:Layouts.USER,
      title: productRoute.MT_SINGLE_PRODUCT
    }
 },
];
