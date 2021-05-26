<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/betatables">Cars</router-link>|
      <router-link to="/Plot">Price</router-link>|
      <router-link to="/Plot2">Weight</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #1E71B8;
}

#nav a.router-link-exact-active {
  color: #34404b;
}
</style>
