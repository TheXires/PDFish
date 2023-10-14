// import en from '../i18n/de.json';
import Resources from './localization.d.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'default';
    resources: Resources;
  }
}
