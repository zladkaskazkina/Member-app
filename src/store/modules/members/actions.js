export default {
  registerMember(context, data){
    const memberData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      location: data.loc,
      areas: data.areas
    };
    context.commit('registration', memberData);
  }
};