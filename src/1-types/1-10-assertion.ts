{
    /*
     * Type Assertions ๐ฉ
     * - 100% ์ฅ๋ดํ ๋๋ง!!!
     */

    // JavaScript
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc(); // result: any
    console.log((result as string).length); // casting
    console.log((<string>result).length); // casting

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(6));  // ๐ฑ ์๋ฌ ๋ฐ์!

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2);    // ๐ฑ ๋ฌด์กฐ๊ฑด null์ด ์๋ ๊ฒฝ์ฐ ๋๋ํ๋ฅผ ๋ถ์ฌ ์ฅ๋ด(?)

    const button = document.querySelector('class')!;
}