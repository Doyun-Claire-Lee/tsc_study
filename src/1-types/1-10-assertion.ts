{
    /*
     * Type Assertions 💩
     * - 100% 장담할때만!!!
     */

    // JavaScript
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc(); // result: any
    console.log((result as string).length); // casting
    console.log((<string>result).length); // casting

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(6));  // 😱 에러 발생!

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2);    // 😱 무조건 null이 아닐 경우 느낌표를 붙여 장담(?)

    const button = document.querySelector('class')!;
}