"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans, milk, sugar) {
            this.milk = milk;
            this.sugar = sugar;
            this.coffeeBeans = 0; // instance(object) level
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }
    CoffeeMachine.BEANS_GRAM_PER_SHOT = 7; // class level
    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        steamMilk() {
            console.log('Steaming milk....🥛');
        }
        makeMilk(cup) {
            this.steamMilk();
            return Object.assign(Object.assign({}, cup), { hasMilk: true });
        }
    }
    class FancyMilkSteamer {
        steamMilk() {
            console.log('Steaming fancy milk....🥛');
        }
        makeMilk(cup) {
            this.steamMilk();
            return Object.assign(Object.assign({}, cup), { hasMilk: true });
        }
    }
    class ColdMilkSteamer {
        steamMilk() {
            console.log('Steaming cold milk....🥛');
        }
        makeMilk(cup) {
            this.steamMilk();
            return Object.assign(Object.assign({}, cup), { hasMilk: true });
        }
    }
    class NoMilk {
        makeMilk(cup) {
            return cup;
        }
    }
    // 설탕 제조기
    class CandySugarMixer {
        getSugar() {
            console.log('Getting some sugar from candy🍬');
            return true;
        }
        addSugar(cup) {
            const sugar = this.getSugar();
            return Object.assign(Object.assign({}, cup), { hasSugar: sugar });
        }
    }
    class SugarMixer {
        getSugar() {
            console.log('Getting some sugar from jar!!!!!!');
            return true;
        }
        addSugar(cup) {
            const sugar = this.getSugar();
            return Object.assign(Object.assign({}, cup), { hasSugar: sugar });
        }
    }
    class NoSugar {
        addSugar(cup) {
            return cup;
        }
    }
    // milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    // sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
