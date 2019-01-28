const LENGTH = 5; // 总分
const CLASS_ON = "on"; // 全星
const CLASS_HALF = "half"; // 半星
const CLASS_OFF = "off"; // 没有星星
/**
 *  将豆瓣电影评分转化为星星阵列
 *  获取豆瓣电影分数并格式化为长度为5的数组，每部电影的评分以数组展示
 * @export
 * @param {*} stars 豆瓣分数
 * @returns
 */
export function convertToStarsArray(stars) {
  var num = stars.slice(0, 1);
  var hasDecimal = stars.slice(1) > 0; // 是否有半星
  // console.log(hasDecimal);
  var array = [];
  for (var i = 0; i < num; i++) {
    array.push(CLASS_ON);
  }
  if (hasDecimal) {
    array.push(CLASS_HALF);
  }
  while (array.length < LENGTH) {
    array.push(CLASS_OFF);
  }
  return array;
}
