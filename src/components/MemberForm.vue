<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !firstName.isValid }">
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" v-model.trim="firstName.value">
        <p v-if="!firstName.isValid">Firstname is empty</p>
      </div>
      <div class="form-control" :class="{ invalid: !lastName.isValid }">
        <label for="lastname">Lastname</label>
        <input type="text" id="lastname" v-model.trim="lastName.value">
        <p v-if="!lastName.isValid">Lastname is empty</p>
      </div>
      <div class="form-control" :class="{ invalid: !location.isValid }">
        <label for="location">Location</label>
        <input type="text" id="location" v-model.trim="location.value">
        <p v-if="!location.isValid">Location is empty</p>
      </div>
      <div class="form-control" :class="{ invalid: !description.isValid }">
        <label for="description">Description</label>
        <textarea rows="5" id="description" v-model="description.value"></textarea>
        <p v-if="!description.isValid">Description is empty</p>
      </div>
      <div class="form-control" :class="{ invalid: !areas.isValid }">
        <h3>In which areas you could help other members?</h3>
        <div>
          <span>
            <label for="web">Web-development</label>
            <input type="checkbox" value="web" id="web" v-model="areas.value">
          </span>
          <span>
            <label for="marketing">Marketing</label>
            <input type="checkbox" value="marketing" id="marketing" v-model="areas.value">
          </span>
          <span>
            <label for="sales">Sales</label>
            <input type="checkbox" value="sales" id="sales" v-model="areas.value">
          </span>
        </div>
        <p v-if="!areas.isValid">Please choose at least one area of your experties</p>
      </div>
      <p v-if="!formIsValid">Please check your invalid inputs and submit form again</p>
      <div class="actions">
        <base-button>Register</base-button>
        <base-button link mode="outline" to="/members">See all members</base-button>
      </div>
      
    </form>
  </div>
</template>
<script>
export default {
  emits:['save-data'],
  data(){
    return {
      firstName: {
        value: '',
        isValid: true
      },
      lastName: {
        value: '',
        isValid: true
      },
      location: {
        value: '',
        isValid: true
      },
      description: {
        value: '',
        isValid: true
      },
      areas: {
        value: [],
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if(this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      };
      if(this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      };
      if(this.location.value === '') {
        this.location.isValid = false;
        this.formIsValid = false;
      };
      if(this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      };
      if(this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      };
    },
    submitForm () {
      this.validateForm();
      if(!this.formIsValid){
        return;
      }
      const formData = {
        first: this.firstName.value,
        last: this.lastName.value,
        desc: this.description.value,
        loc: this.location.value,
        areas: this.areas.value
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
span {
  display: flex;
  align-items: center;
  justify-content: start;
}
span label {
  font-weight: normal;
  margin-bottom: 3px;
  margin-right: 1rem;

}
input[type='checkbox']{
  display: inline-block;
  width: auto;
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
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
</style>