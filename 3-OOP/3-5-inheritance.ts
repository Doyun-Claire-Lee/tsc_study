{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0;                // instance(object) level

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up....🔥')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`pullung ${shots} shots....☕️`);
            return {
                shots: shots,
                hasMilk: false
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        fillCoffeeBeans(beans: number): void {
            this.coffeeBeans += beans;
        }

        clean(): void {
            console.log('cleaning the machine....🧼');
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public serialNumber: string) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }

        private steamMilk(): void {
            console.log('steaming some milk....🥛');
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'serialNum');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);
}