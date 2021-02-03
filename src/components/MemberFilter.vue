<template>
  <base-card>
    <h2> Meet other members of our Family </h2>
    <span>
      <label for="web">Web-development</label>
      <input type="checkbox" name="web" id="web" checked @change="setFilter">
    </span>
    <span>
      <label for="marketing">Marketing</label>
      <input type="checkbox" name="marketing" id="marketing" checked>
    </span>
    <span>
      <label for="sales">Sales</label>
      <input type="checkbox" name="sales" id="sales" checked>
    </span>
  </base-card>
</template>
<script>
export default {
  emits: ['change-filter'],
  data () {
    return {
      filters: {
        web: true,
        marketing: true,
        sales: true
      }
    }
  },
  methods: {
    setFilter (event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId] : isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters)
    }
  }
}
</script>
<style scoped>

</style>