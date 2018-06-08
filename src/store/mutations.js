import * as types from "./mutation-type";

const mutations = {
  [types.INCREMENT](state) {
    state.count += 1;
  },
  [types.DECREMENT](state) {
    if (state.count === 1) {
      state.count = 1;
      return;
    }
    state.count -= 1;
  },
  [types.GET_ARTICLE_DETAIL](state, article) {
    state.article = article;
  }
};
export default mutations;
