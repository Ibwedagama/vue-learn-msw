import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

if (process.env.VUE_APP_ENV === 'local') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
