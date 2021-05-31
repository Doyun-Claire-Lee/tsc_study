"use strict";
{
    const BEANS_GRAM_PER_SHOT = 7;
    let coffeeBeans = 0;
    function makeCoffee(shots) {
        if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
            throw new Error('not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
        return {
            shots: shots,
            hasMilk: false
        };
    }
    coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}
//# sourceMappingURL=3-1-without-oop.js.map