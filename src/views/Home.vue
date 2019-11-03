<template>
  <div class="home flex-col">
    <h1>Hello Home</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { store } from "@/store/store";

const {settings} = store.state

export default {
  name: "Home",
  components: {

  },
  data() {
    return {

    }
  },
  computed: mapState({

  }),
  methods: {

  },
};
</script>

<style scoped lang="scss">
.home {
  flex: 1
}
</style>
