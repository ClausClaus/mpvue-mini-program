var Fly = require("flyio/dist/npm/wx");
var fly = new Fly();
let { baseUrl, header, commonParams } = require("./config.js");
fly.interceptors.request.use((config, promise) => {
  //给所有请求添加自定义header
  config.headers["content-type"] = "json";
  config.baseURL = baseUrl;
  return config;
});
export function HTTP(url, param) {
  const data = Object.assign({}, commonParams, { ...param });
  return fly
    .get(url, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}
export let flyInstance = fly;
export function moviceDetail(moviceid) {
  const requireUrl = `${baseUrl}/v2/movie/subject/${moviceid}`;
  return new Promise((resolve, reject) => {
    wx.request({
      url: requireUrl,
      header: header,
      method: "GET",
      success: function(res) {
        return resolve(res);
      },
      fail: function(err) {
        console.error("请求错误", err);
        return reject(err);
      },
      complete: function() {
        console.log("moviceDetail请求完毕");
      }
    });
  });
}
