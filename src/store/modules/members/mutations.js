export default {
  registration(state, payload){
    state.members.push(payload);
  },
  setMembers(state, payload) {
    state.members = payload;
  }
};