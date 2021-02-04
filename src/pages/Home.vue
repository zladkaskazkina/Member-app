<template>
  <div class="home">
    <section> 
      <h3>Do you want to be part of our Family community?</h3>
      <base-button link to="/register">Become a member</base-button> 
    </section>
    <section>
      <h3>Are you already part of our Family? Explore other members.</h3>
      <base-button mode="outline" link to="/members">All members of our Family</base-button>
    </section>
  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style scoped>
h3 {
  margin-bottom: 2rem;
}
section {
  margin: 4rem auto;
  text-align: center;
  max-width: 40rem;
}
</style>