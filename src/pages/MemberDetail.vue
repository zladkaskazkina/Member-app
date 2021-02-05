<template>
  <div>
    <section>
      <base-card>
      <h2> {{ fullname }} </h2>
      <h3> {{ location }} </h3>
      </base-card>
      
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
        <p> {{ description }} </p>
      </base-card>
    </section>
    <!-- <section class="action">
      <base-card>
        <base-button link :to="contactLink"> Contact </base-button>
        <router-view></router-view>
      </base-card>
    </section> -->
    <section class="action">
      <base-card>
        <base-button link to="/members"> See other members </base-button>
      </base-card>
    </section> 
    
  </div> 
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedMember:null
    }
  },
  computed: {
    fullname() {
      return this.selectedMember.firstName + ' ' + this.selectedMember.lastName
    },
    location(){
      return this.selectedMember.location
    },
    areas(){
      return this.selectedMember.areas
    },
    description(){
      return this.selectedMember.description
    },
    contactLink() {
      return '/members/' + this.id +'/contact'
    }
  },
  created() {
    this.selectedMember = this.$store.getters['members/members'].find(member=> member.id === this.id )
  },

}
</script>
<style scoped>

</style>