"use strict";
/**
 * Let's make a calculator 🧮
 */
{
    function calculate(operator, x, y) {
        switch (operator) {
            case "add":
                return x + y;
            case "subtract":
                return x - y;
            case "multiply":
                return x * y;
            case "divide":
                return x / y;
            case "remainder":
                return x % y;
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    }
    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('subtract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1
}
//# sourceMappingURL=calculator.js.map