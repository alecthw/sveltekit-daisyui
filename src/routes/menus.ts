export type TMenu = {
  path: string; // Absolute path of the route
  icon: string;
  [key: string]: any;
  children?: Array<TMenu>;
};

export const menus: Array<TMenu> = [
  {
    path: '/counter',
    icon: 'material-symbols:calculate-outline',
  },
  {
    path: '/more',
    icon: 'material-symbols:brightness-alert-outline',
    children: [
      {
        path: '/about',
        icon: 'material-symbols:brightness-alert-outline',
      }
    ]
  }
];

