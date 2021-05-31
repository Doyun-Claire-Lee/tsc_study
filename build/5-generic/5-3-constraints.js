"use strict";
class FullTimeEmployee {
    pay() {
        console.log(`full time!!!`);
    }
    workFullTime() { }
}
class PartTimeEmployee {
    pay() {
        console.log(`work part time!!!`);
    }
    workPartTime() { }
}
// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee) {
    employee.pay();
    return employee;
}
function pay(employee) {
    employee.pay();
    return employee;
}
const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();
const ellieAfterPay = payBad(ellie);
const bobAfterPay = payBad(bob);
//ellieAfterPay.workFullTime();   // 이용 불가, FullTimeEmployee가 아닌 Employee로 리턴되었기 때문
const elliePay = pay(ellie);
elliePay.workFullTime();
/*-----------------------------------------------------------------------------------------------*/
const obj = {
    name: 'ellie',
    age: 20
};
const obj2 = {
    animal: '🐶'
};
function getValueMine(obj, key) {
    return obj[key];
}
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));
//# sourceMappingURL=5-3-constraints.js.map