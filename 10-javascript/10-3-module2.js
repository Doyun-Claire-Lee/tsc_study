/*
 * export시 default 키워드가 붙은 항목은 이름을 맘대로 바꾸어 가져올 수 있음.(as를 쓰지 않고도)
 * default가 붙지 않은 항목들은 중괄호{} 안에 이름을 정확히 지정하여 가져 올 수 있음. (as를 사용하여 이름 변경 가능)
 * all(*) 키워드를 통해 모든 export 항목들을 가져올 수 있음.
 */

// import sum, {print as printMessage} from './10-3-module1.js';
// console.log(sum(1, 2));
// printMessage();

import * as m from './10-3-module1.js';
console.log(m.default(1, 2));
console.log(m.number);
m.print();