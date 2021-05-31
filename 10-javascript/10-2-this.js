console.log(this);  // Window

function simpleFunc() {
    console.log(this);
}
simpleFunc() === window.simpleFunc()    // this: Window

class Counter {
    count = 0;
    // increase = function () {console.log(this);}  // 문맥에 따라 this가 달라짐

    // Arrow function: 선언될 당시의 this context를 유지함
    increase = () => {console.log(this);}    // this: 항상 Counter!! (arrow function을 사용하면 어떤 문맥에서 호출되든지 Counter가 됨)

}
const counter = new Counter();
counter.increase(); // this: Counter
const caller = counter.increase;    // this: undefined
// const caller = counter.increase.bind(counter);  // this: Counter
caller();

/*
* 기본적으로 함수는 선언과 동시에 글로벌 객체인 window에 등록(?)이 되어 window에서 접근이 가능함.
* const나 let으로 선언된 변수는 window객체에서 접근이 불가능하여 const변수에 함수를 할당할 시 this의 정보를 잃어버리게 됨.
* var로 선언한 변수는 window에 등록되지만 사용하지 말기!
*/

class Bob {

}
const bob = new Bob();
bob.run = counter.increase();
bob.run();  // this: Bob
