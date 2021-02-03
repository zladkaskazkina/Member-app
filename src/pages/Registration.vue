<template>
  <div>
    <section>
      <base-card>
        <h2>Register to our Family</h2>
        <member-form @save-data="saveData"></member-form>
      </base-card>
    </section>
    Register
  </div> 
</template>

<script>

import MemberForm from '../components/MemberForm.vue';
export default {
  components: {
    MemberForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('members/registerMember', data);
      this.$router.replace('/members');
    }
  }
}
</script>
<style scoped>

</style>