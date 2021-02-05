export default {
  registerMember(context, data){
    const memberData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      location: data.loc,
      areas: data.areas
    };
    fetch(`https://mentor-app-563e1-default-rtdb.firebaseio.com/members.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memberData)
    }).then((response) => {
      response.json();
    }).then((data)=>{
      console.log(data);
    });
    context.commit('registration', {
      ...memberData
    });
  },

  loadMembers(context){
    fetch('https://mentor-app-563e1-default-rtdb.firebaseio.com/members.json').then((response) => {
      if(response.ok) {
       return response.json();
      }
    }).then((data) => { 
      const members = [];
      for (const key in data){
        const member = {
          id:key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          description: data[key].description,
          location: data[key].location,
          areas: data[key].areas
        };
        members.push(member);
      }
      context.commit('setMembers', members);
    });

  }
};