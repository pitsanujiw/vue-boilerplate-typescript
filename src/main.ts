import App from '@/App.vue';
import i18n from '@/i18n';
import '@/registerServiceWorker';
import router from '@/routes';
import store from '@/store';
import Vue from 'vue';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
});

vue.$mount('#app');
