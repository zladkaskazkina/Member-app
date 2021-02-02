<template>
  <div>
    <li>
      <h3> {{ fullName }}</h3>
      <h4> {{ country }} </h4>
      <div> <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge> </div>
      <div class="actions">
        <base-button link mode="outline" :to="memberContactLink"> Contact </base-button>
        <base-button link :to="memberDetailLink"> View details </base-button>
      </div>
    </li>
  </div>
</template>

<script>


export default {
  props: {
    id: {
    },
    firstName: {},
    lastName: {},
    country: {},
    areas: {}
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    memberContactLink() {
      return '/members/'+ this.id +'/contact'
    },
    memberDetailLink() {
      return '/members/'+ this.id
    },
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid darkgray;
  border-radius: 12px;
  padding: 1rem;
}
h3 {
  font-size: 1.5rem;
}
div {
  margin: 0.5rem 0;
}
h3,
h4 {
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: center;
}
</style>