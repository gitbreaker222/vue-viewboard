export const SET_URL = "SET_URL";

export const settings = {
  state: {
    url: ""
  },
  mutations: {
    SET_URL(state, url) {
      state.url = url;
    }
  }
};
