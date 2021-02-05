<template>
  <span class="badge" :class="type"> 
    {{ text }} 
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    text() {
      return this.title.toUpperCase()
    }

  }
}
</script>

<style scoped>
  .badge {
    background-color: whitesmoke;
    color: black;
    padding: 0.3rem 1rem;
    display: inline-block;
    margin-right: 0.5rem;
  }
  .marketing {
    background-color: rgb(78, 172, 172);
    color: whitesmoke;
  }
  .web {
    background-color: rgb(93, 141, 141);
    color: whitesmoke;
  }
  .sales {
    background-color: rgb(37, 46, 46);
    color: whitesmoke;
  }
</style>