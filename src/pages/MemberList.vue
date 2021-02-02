<template>
<div>
  <section>FILTER</section>
  <section>
    <base-card>
    <ul v-if="hasMembers">
      <member-item 
        v-for="member in filteredMembers" 
        :key="member.id" 
        :id="member.id"
        :first-name="member.firstName"
        :last-name="member.lastName"
        :areas="member.areas"
        :country="member.country">
        </member-item>
    </ul>
    <div v-else>
      <h3>No memebers yet. Be the first one!</h3>
      <base-button link to="/register">Register now!</base-button>
    </div>
    </base-card>
  </section>
</div>
</template>
<script>
  import MemberItem from '../components/MemberItem'

  export default {
    components: { 
      MemberItem 
    },
    computed: {
      filteredMembers() {
        return this.$store.getters['members/members']
      },
      hasMembers() {
        return this.$store.getters['members/hasMembers']
      }
    }

  }
</script>
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

</style>