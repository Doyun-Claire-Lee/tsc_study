{
    /*
    * JavaScript
    * Primitive : number, string, boolean, bigint, symbol, null, undefined,
    * Object: function, array...
    */

    // number
    const num:number = 0;

    // String
    const str:string = 'hello';

    // boolean
    const bool: boolean = false;


    /*
    * 보통은 null 보단 undefined를 더 많이 이용함.
    * 문맥상 맞는 것으로 이용하
    */


    //undefined
    let name: undefined; //💩
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; //💩
    let person2: string | null;

    // unknown 💩
    // - 웬만하면 쓰지 않기
    let notSure: unknown;
    notSure = 0;
    notSure = "hi";
    notSure = true;

    // any 💩
    // - 웬만하면 쓰지 않기
    let anything: any;
    anything = 0;
    anything = "hi";

    // void
    function print(): void {
        console.log("hello");
    }
    let unusuable: void = undefined; // 💩

    // never
    // - 절대 아무것도 리턴하지 않는 경우
    function throwError(message: string): never {
        throw new Error(message);   // 에러를 발생시키거나
        while (true);               // 끝나지 않고 리턴값이 없는 함수일 때
    }

    // object
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'ellie'});
    


}