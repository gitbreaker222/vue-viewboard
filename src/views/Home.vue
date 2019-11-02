<template>
  <div class="home">
    <div class="">
      <input
        type="text"
        name="url"
        :value="url"
        @change="setUrl"
        @input="setUrl"
      >
    </div>
    <div class="">
      url: {{ url }}
    </div>
    <div class="frames">
      <Frame
        v-for="frame in frames"
        :key="frame.id"
        :frame="frame"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { store, SET_URL } from "@/store/store";
import Frame from '@/components/Frame'

window.qs = (x) => {
  return document.querySelector(x)
}

const {settings} = store.state

export default {
  name: "Home",
  components: {
    Frame,
  },
  computed: mapState({
    url: (state) => {
      return state.settings.url;
    },
    frames: (state ) => {
      return state.settings.frames;
    },
  }),
  methods: {
    setUrl(event) {
      const { value } = event.currentTarget;
      store.commit(SET_URL, value);
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
