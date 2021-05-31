"use strict";
{
    /*
     * Type Assertions 💩
     * - 100% 장담할때만!!!
     */
    // JavaScript
    function jsStrFunc() {
        return 'hello';
    }
    const result = jsStrFunc(); // result: any
    console.log(result.length); // casting
    console.log(result.length); // casting
    const wrong = 5;
    console.log(wrong.push(6)); // 😱 에러 발생!
    function findNumbers() {
        return undefined;
    }
    const numbers = findNumbers();
    numbers.push(2); // 😱 무조건 null이 아닐 경우 느낌표를 붙여 장담(?)
    const button = document.querySelector('class');
}
