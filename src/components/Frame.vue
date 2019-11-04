<template>
  <div
    v-if="frame"
    class="frame"
  >
    <label for="frame-1">
      {{ frame.x }} x {{ frame.y }}
    </label>
    <iframe
      :id="`frame-${'' + frame.x + frame.y}`"
      :src="url"
      :width="frame.x"
      :height="frame.y"
      @load="handleEvent"
    />
  </div>
  <div
    v-else
    class="frame"
  >
    (no frame data)
  </div>
</template>


<script>
import { mapState } from 'vuex'
//import { store } from "@/store/store";

const component = {
  name: "Frame",
  props: {
    frame: Object,
  },
  computed: mapState({
    url: state => state.settings.url,
  }),
  methods: {
    updateFrameX(evt) {
      console.log(evt);
    },
    handleEvent(event) {
      console.log('##', event);
    },
  },
}

export default component;
</script>

<style scoped lang="scss">
.frame {
  display: flex;
  flex-flow: column nowrap;
}

.frame iframe {
}
</style>
