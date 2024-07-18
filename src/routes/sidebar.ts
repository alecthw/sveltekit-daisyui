export interface TRoute {
  name: string;
  icon: string;
}

export const routes: { [key: string]: TRoute } = {
  '/counter': {
    name: 'Counter',
    icon: 'icon-[mdi--calculator-variant-outline]',
  },
  '/about': {
    name: 'About',
    icon: 'icon-[mdi--alert-circle-outline]',
  },
};
