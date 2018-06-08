/**
 *
 *      COLLECT_KEY：这个本地缓存是直接以文章ID作为键名存储的对象 --> {0: false, 1: false, 3: true, 5: false}
 *
 */
const COLLECT_KEY = '__collect__';

/**
 *
 * @param  postId 文章ID
 * 1.0  获取本地缓存
 * 2.0  获取以文章ID为键名的属性值
 * 3.0  对属性值进行取反，如果是(第一次点击)未收藏过的文档，获取的属性值是undefined，取反后为true.
 * 4.0  更新缓存对象，返回点击的文章属性的属性值
 */
export function saveCollect(postId) {
  let collects = wx.getStorageSync(COLLECT_KEY) || {};
  let currentId = collects[postId];
  console.log('collects', collects);
  console.log('collects[postId]', collects[postId]);
  currentId = !currentId;
  collects[postId] = currentId;
  wx.setStorageSync(COLLECT_KEY, collects);
  return currentId;
}
/**
 *
 * @param  postId 文章ID
 * 1.0  获取缓存对象
 * 2.0  根据文章ID判断当前文章是否被收藏过，如果是还没有被收藏过（点击过）的话就还没有这个属性，返回false
 */
export function loadCollect(postId) {
  let collects = wx.getStorageSync(COLLECT_KEY) || {};
  if (collects[postId]) {
    return true;
  }
  return false;
}
