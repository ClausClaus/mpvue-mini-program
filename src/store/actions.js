import * as types from "./mutation-type";
import { HTTP } from "@/api/base-request";
import { normalLizeMovice } from "@/common/js/reset-movice";
export const moviceRequest = function({ commit, state }, { params }) {
  let url = state.url;
  return HTTP(url, params)
    .then(res => {
      if (state.total !== res.data.total) {
        commit(types.TOTAL, res.data.total);
      }
      return normalLizeMovice(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
