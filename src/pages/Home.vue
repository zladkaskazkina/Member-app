<template>
  <div class="home">
    <section> 
      <h3>Do you want to be part of our Family community?</h3>
      <router-link to="/register">Become a member</router-link> 
    </section>
    <section>
      <h3>Are you already part of our Family? Explore other members.</h3>
      <router-link to="/members">All members of our Family</router-link>
    </section>
  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>
