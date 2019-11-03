<template>
  <div class="home flex-col">
    <div class="">
      <input
        type="text"
        name="url"
        :value="url"
        @change="setUrl"
        @input="setUrl"
      >
    </div>
    <div class="frames flex-col">
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
.home {
  overflow: auto;
}

.frames {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  transform: scale(.5);
  transform-origin: top left;
  width: 200%;
}
@media (min-width: 50em) {
  .frames {
    justify-content: center;
  }
}

.frames .frame {
  margin: 1rem .5rem;
}
</style>
