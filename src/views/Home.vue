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
    <div class="frames">
      <Frame
      v-for="frame in frames"
      v-bind:key="frame.id"
      v-bind:frame="frame"
      />
    </div>
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

<style scoped lang="scss">
.frames {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}

.frames .frame {
  margin: 1rem .5rem;
}
</style>
