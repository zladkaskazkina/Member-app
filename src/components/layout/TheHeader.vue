<template>
  <header>
    <nav>
      <h1><router-link to="/"> Be Family </router-link></h1>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
header a {
  text-decoration: none;
  color: azure;
  padding: 1rem;
}
a:active,
a:hover,
a.router-link-active {
  border: 1px solid transparent;
}
h1 {
  margin: 0;
}
</style>