import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      members: [
      {
        id:'m01',
        firstName: 'Karel',
        lastName: 'Jelinek',
        areas: ['web-development', 'chat-bots'],
        description: 'Hi! I am Karel and I can help you with all this technical staff around your business',
        country: 'Poland'
      },
      {
        id:'m02',
        firstName: 'Marta',
        lastName: 'Kyllner',
        areas: ['marketing', 'ads', 'social media'],
        description: 'Hi! I am Marta and I can help you with all this marketing staff around your business',
        country: 'Czechia'
      }
    ]
    };
  },
  mutations,
  getters,
  actions
};