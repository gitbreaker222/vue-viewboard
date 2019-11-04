import { RESTORE, SET_URL } from '@/store/store'

export const settings = {
  state: {
    url: '',
    frames: [
      {
        x: 300,
        y: 300,
      },
      {
        x: 375,
        y: 510,
      },
      {
        x: 300,
        y: 540,
      },
      {
        x: 540,
        y: 300,
      },
      {
        x: 1000,
        y: 760,
      },
      {
        x: 768,
        y: 1024 ,
      },
      {
        x: 1440,
        y: 900,
      },
    ],
  },
  mutations: {
    [SET_URL](state, url) {
      state.url = url;
      localStorage.setItem('url', url)
    },
  },
  actions: {
    [RESTORE](context) {
      const url = localStorage.getItem('url')
        || 'https://thebestmotherfucking.website/'
      context.commit('SET_URL', url)
    },
  },
};
