"use strict";
{
    class CoffeeMaker {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0; // instance(object) level
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        }
        makeCoffee(shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        }
    }
    CoffeeMaker.BEANS_GRAM_PER_SHOT = 7; // class level
    const maker = new CoffeeMaker(32);
    const maker2 = CoffeeMaker.makeMachine(10);
}
//# sourceMappingURL=3-2-class.js.map