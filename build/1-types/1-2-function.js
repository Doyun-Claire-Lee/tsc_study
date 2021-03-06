"use strict";
{
    // JavaScript ๐ฉ
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    // TypeScript โจ
    function add(num1, num2) {
        return num1 + num2;
    }
    // JavaScript ๐ฉ
    function jsFetchNum(id) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    // TypeScript โจ
    function fetchNum(id) {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    // JavaScript => TypeScript
    // Optional Parameter
    // - ์ ๋ฌ ๋ฐ์ง ์์๋ ๋๋ parameter์ ๋ฌผ์ํ๋ฅผ ๋ถ์.
    function printName(firstName, lastName) {
        console.log(firstName);
        console.log(lastName);
    }
    printName("Steve", "Jobs");
    printName("Eille");
    // Default Parameter
    function printMessage(message = 'default message') {
        console.log(message);
    }
    printMessage();
    // Rest Parameter
    function addNumbers(...numbers) {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
//# sourceMappingURL=1-2-function.js.map