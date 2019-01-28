import * as types from "./mutation-type";

const mutations = {
  [types.GET_ARTICLE_DETAIL](state, article) {
    state.article = article;
  },
  [types.IS_PLAYING_MUSIC](state, status) {
    state.isPlayingMusic = status;
  },
  [types.CURRENT_MUSIC_ID](state, currentMusicId) {
    state.currentMusicId = currentMusicId;
  },
  [types.MOVICE_LIST](state, list) {
    state.moviceList = list;
  },
  [types.URL](state, url) {
    state.url = url;
  },
  [types.TOTAL](state, total) {
    state.total = total;
  }
};
export default mutations;
