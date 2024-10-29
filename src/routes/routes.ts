export type TRoute = {
  icon: string;
  [key: string]: any;
  submenu?: { [key: string]: TRoute };
};

export const routes: { [key: string]: TRoute } = {
  '/counter': {
    icon: 'icon-[material-symbols--calculate-outline]',
  },
  '/more': {
    icon: 'icon-[material-symbols--brightness-alert-outline]',
    submenu: {
      '/about': {
        icon: 'icon-[material-symbols--brightness-alert-outline]',
      },
    },
  },
};
