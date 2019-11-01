<template>
  <div class="frame"
    v-if="frame"
    >
    <iframe
      v-bind:id="`frame-${frame.id}`"
      v-bind:src="url"
      v-bind:width="frame.x"
      v-bind:height="frame.y"
      v-on:scroll="handleScroll"
    ></iframe>
    <label for="frame-1">
      {{ frame.x }} x {{ frame.y }}
    </label>
  </div>
  <div class="frame"
    v-else>
    (no frame data)
  </div>
</template>


<script>
// import { mapState, mapActions } from 'vuex'
import { store } from "@/store/store";

const { settings } = store;
const component = {
  name: "Frame",
  props: {
    frame: Object,
  },
  data: () => {
    return {
      url: settings.state.url,
    }
  },
  // computed: mapState({
  //   url: state => state.url
  // }),
  methods: {
    updateFrameX(evt) {
      console.log(evt);
    },
    handleScroll(event) {
      console.log(event);
    },
  },
}

export default component;
</script>

<style scoped lang="scss">
.frame {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
</style>
