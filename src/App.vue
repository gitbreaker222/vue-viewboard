<template>
  <div
    id="app"
    class="flex-col"
  >
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/hello-vue">
        Hello Vue
      </router-link> |
      <router-link to="/viewboard">
        Viewport board
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
* {
  /* box-shadow: 0 0 2px magenta inset; */
}
body {
  margin: 0;
  overflow: hidden;
}
body, .flex-col {
  flex: 1;
  display: flex;
  flex-flow: column;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: .5rem;
  overflow: hidden;
  background: #2c3c4c;
  color: #eee;
  flex: 0 0 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: inherit;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
