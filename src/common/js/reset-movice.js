import { convertToStarsArray } from "./star";
/**
 * 格式化每部电影数据
 *
 * @export
 * @param {*} moviceData 电影信息数组
 * @returns
 */
export function normalLizeMovice(moviceData) {
  let ret = [];
  for (var index in moviceData.subjects) {
    let subject = moviceData.subjects[index];
    let temp = {
      stars: convertToStarsArray(subject.rating.stars),
      title: subject.title,
      average: subject.rating.average,
      coverageUrl: subject.images.large,
      moviceId: subject.id
    };
    ret.push(temp);
  }
  return ret;
}
