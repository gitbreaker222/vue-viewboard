<template>
  <div class="viewboard flex-col">
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
  name: "Viewboard",
  components: {
    Frame,
  },
  data() {
    return {
      timoutCount: 0,
    }
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
      this.timoutCount += 1;
      setTimeout(
        this._setUrl,
        444
      )
    },
    _setUrl() {
      this.timoutCount -= 1;
      if (!timoutCount) store.commit(SET_URL, value);
    },
  },
};
</script>

<style scoped lang="scss">
$scale: .75;

.viewboard {
  overflow: auto;
}

.frames {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  transform: scale($scale);
  transform-origin: top left;
  width: 100% * (1/$scale);
}
@media (min-width: 700px) {
  .frames {
    justify-content: center;
  }
}

.frames .frame {
  margin: 1rem .5rem;
}
</style>
