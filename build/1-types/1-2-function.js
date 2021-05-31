"use strict";
{
    // JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    // TypeScript ✨
    function add(num1, num2) {
        return num1 + num2;
    }
    // JavaScript 💩
    function jsFetchNum(id) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    // TypeScript ✨
    function fetchNum(id) {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    // JavaScript => TypeScript
    // Optional Parameter
    // - 전달 받지 않아도 되는 parameter에 물음표를 붙임.
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
