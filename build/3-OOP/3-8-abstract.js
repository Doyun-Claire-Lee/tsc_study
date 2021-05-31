"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0; // instance(object) level
            this.coffeeBeans = coffeeBeans;
        }
        makeCoffee(shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
        grindBeans(shots) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        preheat() {
            console.log('heating up....🔥');
        }
    }
    CoffeeMachine.BEANS_GRAM_PER_SHOT = 7; // class level
    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans, serialNumber) {
            super(beans);
            this.serialNumber = serialNumber;
        }
        extract(shots) {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            };
        }
        steamMilk() {
            console.log('steaming some milk....🥛');
        }
    }
    class SweetCoffeeMaker extends CoffeeMachine {
        extract(shots) {
            return {
                shots,
                hasMilk: false,
                hasSugar: true
            };
        }
    }
    const machines = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ];
    machines.forEach(machine => {
        console.log('--------------------------------------');
        machine.makeCoffee(1);
    });
}
//# sourceMappingURL=3-8-abstract.js.map