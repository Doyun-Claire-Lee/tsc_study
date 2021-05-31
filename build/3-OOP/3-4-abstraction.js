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
        // 접근제어자를 통한 추상화
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
        // 인터페이스를 통한 추상화
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
    // const maker = CoffeeMachine.makeMachine(32);
    // maker.makeCoffee(4);
    //
    // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(10);
    // maker2.fillCoffeeBeans(20);
    // maker2.clean();
    //
    // const maker3: CoffeeMaker = CoffeeMachine.makeMachine(50);
    // maker3.makeCoffee(3);
    class AmateurUser {
        constructor(machine) {
            this.machine = machine;
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
        }
    }
    class ProBarista {
        constructor(machine) {
            this.machine = machine;
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker = CoffeeMachine.makeMachine(50);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();
}
