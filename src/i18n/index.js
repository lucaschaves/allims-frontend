import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import { pt, en } from './locales';

const options = {
  interpolation: {
    escapeValue: false,
  },
  debug: true,
  resources: {
    pt: {
      common: pt['pt-BR'],
    },
    en: {
      common: en.en,
    },
  },
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18next
  .use(LanguageDetector)
  .init(options)  

export default i18next;