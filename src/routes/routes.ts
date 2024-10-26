type TRoute = {
  icon: string;
  [key: string]: any;
};

export const routes: { [key: string]: TRoute } = {
  '/counter': {
    icon: 'icon-[material-symbols--calculate-outline]',
  },
  '/about': {
    icon: 'icon-[material-symbols--brightness-alert-outline]',
  },
};
