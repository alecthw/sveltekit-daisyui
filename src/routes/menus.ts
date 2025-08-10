import { m } from '$lib/paraglide/messages.js';

export type TMenu = {
  path: string; // Absolute path of the route
  icon: string;
  [key: string]: any;
  children?: Array<TMenu>;
};

export const menus: Array<TMenu> = [
  {
    path: '/counter',
    name: m['routes.counter'](),
    icon: 'material-symbols:calculate-outline',
  },
  {
    path: '/more',
    name: m['routes.more'](),
    icon: 'material-symbols:brightness-alert-outline',
    children: [
      {
        path: '/about',
        name: m['routes.about'](),
        icon: 'material-symbols:brightness-alert-outline',
      },
      {
        path: '/watermark',
        name: m['routes.watermark'](),
        icon: 'material-symbols:branding-watermark-outline',
      },
    ],
  },
];
