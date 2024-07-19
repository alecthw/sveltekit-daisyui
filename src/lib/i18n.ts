import { init } from '@jill64/svelte-i18n/app';

export const { locale, translate, attach, setting } = init({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
});
