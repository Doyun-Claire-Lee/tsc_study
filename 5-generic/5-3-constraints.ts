interface Employee {
    pay() : void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!!`);
    }

    workFullTime() {}
}

class PartTimeEmployee implements Employee {
    pay(): void {
        console.log(`work part time!!!`);
    }

    workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T): T {
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
}
const obj2 = {
    animal: '🐶'
}

function getValueMine<T>(obj: object, key: string): T {
    return obj[key];
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));


