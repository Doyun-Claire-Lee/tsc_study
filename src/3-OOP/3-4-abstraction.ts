{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0;                // instance(object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        // 접근제어자를 통한 추상화
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

        // 인터페이스를 통한 추상화
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
        constructor(private machine: CoffeeMaker) {
        }

        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {
        }

        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(50);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);

    amateur.makeCoffee();
    pro.makeCoffee();

}