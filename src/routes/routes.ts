export type TRoute = {
  icon: string;
  [key: string]: any;
  submenu?: { [key: string]: TRoute };
};

export const routes: { [key: string]: TRoute } = {
  '/counter': {
    icon: 'material-symbols:calculate-outline',
  },
  '/more': {
    icon: 'material-symbols:brightness-alert-outline',
    submenu: {
      '/about': {
        icon: 'material-symbols:brightness-alert-outline',
      },
    },
  },
};
