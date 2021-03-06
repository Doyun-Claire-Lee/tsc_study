{
    // JavaScript ๐ฉ
    function jsAdd(num1: any, num2: any) {
        return num1 + num2;
    }

    // TypeScript โจ
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript ๐ฉ
    function jsFetchNum(id: any) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript โจ
    function fetchNum(id: string): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript => TypeScript

    // Optional Parameter
    // - ์ ๋ฌ ๋ฐ์ง ์์๋ ๋๋ parameter์ ๋ฌผ์ํ๋ฅผ ๋ถ์.
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName("Steve", "Jobs");
    printName("Eille");

    // Default Parameter
    function printMessage(message: string ='default message') {
        console.log(message);
    }
    printMessage();

    // Rest Parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}