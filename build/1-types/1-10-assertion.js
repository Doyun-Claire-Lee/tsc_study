"use strict";
{
    /*
     * Type Assertions ๐ฉ
     * - 100% ์ฅ๋ดํ ๋๋ง!!!
     */
    // JavaScript
    function jsStrFunc() {
        return 'hello';
    }
    const result = jsStrFunc(); // result: any
    console.log(result.length); // casting
    console.log(result.length); // casting
    const wrong = 5;
    console.log(wrong.push(6)); // ๐ฑ ์๋ฌ ๋ฐ์!
    function findNumbers() {
        return undefined;
    }
    const numbers = findNumbers();
    numbers.push(2); // ๐ฑ ๋ฌด์กฐ๊ฑด null์ด ์๋ ๊ฒฝ์ฐ ๋๋ํ๋ฅผ ๋ถ์ฌ ์ฅ๋ด(?)
    const button = document.querySelector('class');
}
//# sourceMappingURL=1-10-assertion.js.map