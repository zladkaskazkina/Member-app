<template>
  <div>
    <button v-if="!link">
      <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
      <slot></slot>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    },
    mode: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>
  button,
  a {
    text-decoration: none;
    font:inherit;
    padding: 0.5rem 1rem;
    border: 1px solid darkcyan;
    background-color: darkslategrey;
    color: whitesmoke;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
  }
  a:hover,
  a:active,
  button:hover,
  button:active {
    background-color: rgb(21, 43, 43);
    border-color: darkslategrey;
  }
  .flat {
    background-color: transparent;
    color: darkslategrey;
    border: none;
  }
  .outline {
    color: darkslategrey;
    background-color: transparent;
    border-color: darkcyan;
  }
</style>