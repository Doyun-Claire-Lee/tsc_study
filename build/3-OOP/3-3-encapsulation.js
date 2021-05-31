"use strict";
{
    class CoffeeMaker {
        // 외부에서 생성자로 인스턴스를 생성하는것을 방지
        constructor(coffeeBeans) {
            this.coffeeBeans = 0; // instance(object) level
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        }
        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0!');
            }
            this.coffeeBeans = beans;
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
    //const maker = new CoffeeMaker(32);
    const maker2 = CoffeeMaker.makeMachine(10);
    class User {
        // constructor에 접근지정자와 함께 매개변수로 지정해주면 자동으로 멤버변수가 됨.
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        // getter
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        get age() {
            return this.internalAge;
        }
        set age(num) {
            if (num < 0) {
                throw new Error('age should be greater than 0');
            }
            this.internalAge = num;
        }
    }
    const user = new User('Steve', 'Jobs');
    console.log(user.fullName); // getter 호출
    user.age = 10; // setter 호출
}
