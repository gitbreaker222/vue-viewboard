import { SET_URL } from '@/store/store'

export const settings = {
  state: {
    url: "https://neutrinojs.org/",
    frames: [
      {
        id: 1,
        x: 300,
        y: 300,
      },
      {
        id: 2,
        x: 300,
        y: 540,
      },
    ],
  },
  mutations: {
    SET_URL(state, url) {
      state.url = url;
    },
  },
};
