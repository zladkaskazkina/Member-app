import Vue from "vue";
import Vuex from "vuex";

import membersModule from './modules/members/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    members: membersModule
  },
});
