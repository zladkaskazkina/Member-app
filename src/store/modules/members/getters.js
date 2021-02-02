export default {
  members( state ) {
    return state.members;
  },
  hasMembers(state){
    return state.members && state.members.length > 0;
  }
};