<template>
  <div>
    <img :src="src" class="avatar"/>
  </div>
</template>

<script>
export default {
  props:[ 'firstname', 'lastname'],
  data() {
    return {
      src:''
    }
  },
  created(){
    fetch(`https://eu.ui-avatars.com/api/?name=${this.firstname}+${this.lastname}`).then(
      (data) => {
        console.log(data)
       this.src = data.url
      }
    )
  }
}
</script>
<style scoped>
.avatar{
  margin-right: 3rem;
}
</style>