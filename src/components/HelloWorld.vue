<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >
      vue-cli documentation</a
      >.
    </p>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li v-for="link in cliLinks" v-bind:key="link.url">
        <a href="link.url" target="_blank" rel="noopener">
          {{ link.label }}
        </a>
      </li>
    </ul>

    <h3>Essential Links</h3>
    <ul>
      <li v-for="link in essentialLinks" v-bind:key="link.url">
        <a href="link.url" target="_blank" rel="noopener">
          {{ link.label }}
        </a>
      </li>
    </ul>

    <h3>Ecosystem</h3>
    <ul>
      <li v-for="link in ecosysLinks" v-bind:key="link.url">
        <a href="link.url" target="_blank" rel="noopener">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      cliLinks: [
        {
          label: "babel",
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
        },
        {
          label: "pwa",
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",
        },
        {
          label: "router",
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
        },
        {
          label: "eslint",
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
        },
        {
          label: "unit-jest",
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",
        },
      ],
      essentialLinks: [
        {
          label: "Core Docs",
          url: "https://vuejs.org",
        },
        {
          label: "Forum",
          url: "https://forum.vuejs.org",
        },
        {
          label: "Community Chat",
          url: "https://chat.vuejs.org",
        },
        {
          label: "Twitter",
          url: "https://twitter.com/vuejs",
        },
        {
          label: "News",
          url: "https://news.vuejs.org",
        },
      ],
      ecosysLinks: [
        {
          label: "vue-router",
          url: "https://router.vuejs.org",
        },
        {
          label: "vuex",
          url: "https://vuex.vuejs.org",
        },
        {
          label: "vue-devtools",
          url: "https://github.com/vuejs/vue-devtools#vue-devtools",
        },
        {
          label: "vue-loader",
          url: "https://vue-loader.vuejs.org",
        },
        {
          label: "awesome-vue",
          url: "https://github.com/vuejs/awesome-vue",
        },
      ],
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
