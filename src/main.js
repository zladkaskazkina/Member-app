import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton";
import BaseBadge from "./components/UI/BaseBadge";
import BaseAvatar from "./components/UI/BaseAvatar";

Vue.config.productionTip = false;

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-badge', BaseBadge);
Vue.component('base-avatar', BaseAvatar);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


