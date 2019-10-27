<template>
  <div class="home">

    <div class="">
      <input
        type="text"
        name="url"
        v-bind:value="url"
        @change="setUrl"
        @input="setUrl"
      />
    </div>
    <div class="">url: {{ url }}</div>
    <Frame
      v-for="frame in frames"
      v-bind:key="frame.id"
      v-bind:frame="frame"
    />
  </div>
</template>

<script>
import { store } from "@/store/store";
import Frame from '@/components/Frame'

const { settings } = store;

export default {
  name: "home",
  components: {
    Frame,
  },
  computed: {
    url() {
      return settings.state.url;
    },
    frames() {
      return settings.state.frames;
    },
  },
  methods: {
    setUrl(event) {
      const { value } = event.currentTarget;
      settings.commit("SET_URL", value);
    },
  },
};
</script>
