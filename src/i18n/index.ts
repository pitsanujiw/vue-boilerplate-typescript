import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);
// import langauages (1)
import en from './languages/en-US.json';

export enum LANGUAGE_LIST {
    'en-US' = 'en',
}

// regis new language (3)
const messages: LocaleMessages = {
    en,
};

export default new VueI18n({
    locale: LANGUAGE_LIST['en-US'],
    fallbackLocale: LANGUAGE_LIST['en-US'],
    messages,
});
