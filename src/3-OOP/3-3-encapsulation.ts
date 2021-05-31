{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0;                // instance(object) level

        // 외부에서 생성자로 인스턴스를 생성하는것을 방지
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0!');
            }
            this.coffeeBeans = beans;
        }

        makeCoffee(shots: number): CoffeeCup {
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

    //const maker = new CoffeeMaker(32);
    const maker2 = CoffeeMaker.makeMachine(10);


    class User {
        // constructor에 접근지정자와 함께 매개변수로 지정해주면 자동으로 멤버변수가 됨.
        constructor(private firstName:string, private lastName:string) {
        }

        // getter
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge: number;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error('age should be greater than 0');
            }
            this.internalAge = num;
        }
    }

    const user = new User('Steve', 'Jobs');
    console.log(user.fullName); // getter 호출
    user.age = 10;              // setter 호출
}