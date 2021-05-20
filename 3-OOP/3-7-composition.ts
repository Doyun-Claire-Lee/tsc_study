{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrotehr {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0;                // instance(object) level

        public constructor(
            coffeeBeans: number,
            private milk: MilkFrotehr,
            private sugar: SugarProvider
        ) {
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrotehr {
        private steamMilk(): void {
            console.log('Steaming milk....🥛');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            };
        }
    }

    class FancyMilkSteamer implements MilkFrotehr {
        private steamMilk(): void {
            console.log('Steaming fancy milk....🥛');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            };
        }
    }

    class ColdMilkSteamer implements MilkFrotehr {
        private steamMilk(): void {
            console.log('Steaming cold milk....🥛');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            };
        }
    }

    class NoMilk implements MilkFrotehr {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 설탕 제조기
    class CandySugarMixer implements SugarProvider {
        private getSugar() {
            console.log('Getting some sugar from candy🍬');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            };
        }
    }

    class SugarMixer implements SugarProvider {
        private getSugar() {
            console.log('Getting some sugar from jar!!!!!!');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            };
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // milk
    const cheapMilkMaker: MilkFrotehr = new CheapMilkSteamer();
    const fancyMilkMaker: MilkFrotehr = new FancyMilkSteamer();
    const coldMilkMaker: MilkFrotehr = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // sugar
    const candySugar: SugarProvider = new CandySugarMixer();
    const sugar: SugarProvider = new SugarMixer();
    const noSugar = new NoSugar();

    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}