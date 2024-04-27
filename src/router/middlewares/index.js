import { Layouts } from "../../constants/layouts";

export async function layoutMiddleware(route) {
  const { layout } = route.meta;

  const layoutName = layout || Layouts.USER;

  const component = await import(`../../layouts/${layoutName}.vue`);

  route.meta.layoutComponent = component.default;

}
