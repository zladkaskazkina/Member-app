<template>
  <div id="app">
    <the-header></the-header>
    <router-view />
  </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader';
export default {
  components: {
    TheHeader
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Lato', sans-serif;
}
body {
  margin: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
