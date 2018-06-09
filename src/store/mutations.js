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
  },
  [types.IS_PLAYING_MUSIC](state, status) {
    state.isPlayingMusic = status;
  },
  [types.CURRENT_MUSIC_ID](state, currentMusicId) {
    state.currentMusicId = currentMusicId;
  }
};
export default mutations;
