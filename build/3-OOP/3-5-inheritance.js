"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0; // instance(object) level
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
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
        extract(shots) {
            console.log(`pullung ${shots} shots....☕️`);
            return {
                shots: shots,
                hasMilk: false
            };
        }
        makeCoffee(shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
        fillCoffeeBeans(beans) {
            this.coffeeBeans += beans;
        }
        clean() {
            console.log('cleaning the machine....🧼');
        }
    }
    CoffeeMachine.BEANS_GRAM_PER_SHOT = 7; // class level
    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans, serialNumber) {
            super(beans);
            this.serialNumber = serialNumber;
        }
        makeCoffee(shots) {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return Object.assign(Object.assign({}, coffee), { hasMilk: true });
        }
        steamMilk() {
            console.log('steaming some milk....🥛');
        }
    }
    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'serialNum');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);
}
//# sourceMappingURL=3-5-inheritance.js.map