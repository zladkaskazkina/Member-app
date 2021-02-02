import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton";
import BaseBadge from "./components/UI/BaseBadge";

Vue.config.productionTip = false;

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-badge', BaseBadge);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


