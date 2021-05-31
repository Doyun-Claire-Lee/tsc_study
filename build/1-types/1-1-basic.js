"use strict";
{
    /*
    * JavaScript
    * Primitive : number, string, boolean, bigint, symbol, null, undefined,
    * Object: function, array...
    */
    // number
    const num = 0;
    // String
    const str = 'hello';
    // boolean
    const bool = false;
    /*
    * 보통은 null 보단 undefined를 더 많이 이용함.
    * 문맥상 맞는 것으로 이용하
    */
    //undefined
    let name; //💩
    let age;
    age = undefined;
    age = 1;
    function find() {
        return undefined;
    }
    // null
    let person; //💩
    let person2;
    // unknown 💩
    // - 웬만하면 쓰지 않기
    let notSure;
    notSure = 0;
    notSure = "hi";
    notSure = true;
    // any 💩
    // - 웬만하면 쓰지 않기
    let anything;
    anything = 0;
    anything = "hi";
    // void
    function print() {
        console.log("hello");
    }
    let unusuable = undefined; // 💩
    // never
    // - 절대 아무것도 리턴하지 않는 경우
    function throwError(message) {
        throw new Error(message); // 에러를 발생시키거나
        while (true)
            ; // 끝나지 않고 리턴값이 없는 함수일 때
    }
    // object
    let obj; // 💩
    function acceptSomeObject(obj) { }
    acceptSomeObject({ name: 'ellie' });
}
//# sourceMappingURL=1-1-basic.js.map