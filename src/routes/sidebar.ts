export interface TRoute {
  name: string;
  icon: string;
}

export const routes: { [key: string]: TRoute } = {
  '/counter': {
    name: 'Counter',
    icon: 'icon-[material-symbols--calculate-outline]',
  },
  '/about': {
    name: 'About',
    icon: 'icon-[material-symbols--brightness-alert-outline]',
  },
};
