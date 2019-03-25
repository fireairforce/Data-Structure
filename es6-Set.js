/**
 * API: 
 * add(value):添加某个值，返回Set结构本身
 * delete(value):删除某个值，返回一个布尔值，表示删除是否成功
 * has(value):返回一个bool值，判断是否为Set值
 * clear(),清楚set
 */
let a = [1, 2, 3, 4, 5, 1, 2, 3];
const s = new Set(a);
console.log(...s);