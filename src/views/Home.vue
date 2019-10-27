<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div class="">
      <input type="text" name="" value="" @change="setUrl" @input="setUrl" />
    </div>
    <div class="">url: {{ url }}</div>
  </div>
</template>

<script>
import { store } from "@/store/store";

const { settings } = store;

export default {
  name: "home",
  components: {},
  computed: {
    url() {
      return settings.state.url;
    }
  },
  methods: {
    setUrl(event) {
      const { value } = event.currentTarget;
      settings.commit("SET_URL", value);
    }
  }
};
</script>
