type TRoute<Locale extends string> = {
  name: Record<Locale, string>;
  icon: string;
};

export const routes: { [key: string]: TRoute<'en' | 'zh'> } = {
  '/counter': {
    name: {
      en: 'Counter',
      zh: '计数器',
    },
    icon: 'icon-[material-symbols--calculate-outline]',
  },
  '/about': {
    name: {
      en: 'About',
      zh: '关于',
    },
    icon: 'icon-[material-symbols--brightness-alert-outline]',
  },
};
