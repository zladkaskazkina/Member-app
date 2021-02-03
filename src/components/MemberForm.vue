<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" v-model.trim="firstName">
      </div>
      <div class="form-control">
        <label for="lastname">Lastname</label>
        <input type="text" id="lastname" v-model.trim="lastName">
      </div>
      <div class="form-control">
        <label for="location">Location</label>
        <input type="text" id="location" v-model.trim="location">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea rows="5" id="description" v-model="description"></textarea>
      </div>
      <div class="form-control">
        <h3>In which areas you could help other members?</h3>
        <div>
          <span>
            <label for="web">Web-development</label>
            <input type="checkbox" value="web" id="web" v-model="areas">
          </span>
          <span>
            <label for="marketing">Marketing</label>
            <input type="checkbox" value="marketing" id="marketing" v-model="areas">
          </span>
          <span>
            <label for="sales">Sales</label>
            <input type="checkbox" value="sales" id="sales" v-model="areas">
          </span>
        </div>
      </div>
      <base-button>Register</base-button>
    </form>
  </div>
</template>
<script>
export default {
  emits:['save-data'],
  data(){
    return {
      firstName: '',
      lastName: '',
      location: '',
      description: '',
      areas: []
    }
  },
  methods: {
    submitForm () {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        loc: this.location,
        areas: this.areas
      };
      this.$emit('save-data', formData);
      console.log(formData);
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
}
h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>