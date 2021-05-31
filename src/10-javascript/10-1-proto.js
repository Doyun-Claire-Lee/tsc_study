const x = {};
const y = {};

console.log(x); //__proto__: object --> proto라는 Object가 들어있음. --> javascript에서 모든 Object는 Object라는 프로토를 상속함.
console.log(y); //__proto__: object
console.log(x.toString())   // toString을 정의하지 않았음에도 사용 가능 --> proto에 정의되어있는 함수이기 때문
console.log(x.__proto__ === y.__proto__);   // true
console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // instance level: 이 함수를 이용해서 만들어지는 instance 마다 개별적으로 정의하게 됨.
    // this.makeCoffee = shots => {
    //     console.log('making coffee...☕️');
    // }
}
// ProtoType Member level: proto 안에 정의됨.
CoffeeMachine.prototype.makeCoffee = shots => console.log('making coffee...☕️');

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}
// CoffeeMachine 상속
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latte = new LatteMachine(123);
console.log(latte);
latte.makeCoffee(1);    // CoffeeMachine의 proto안에 구현된 makeCoffee 메소드를 사용할 수 있게 되었음.