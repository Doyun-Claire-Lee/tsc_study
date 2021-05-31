{

    /*
     * Type Inference, 타입 추론
     */

    let text = "hello";
    //text = 1; 이미 선언과 초기화를 하면서 타입이 문자열로 정해졌기 때문에 숫자를 넣을 경우 에러 발생

    // 기본값이 string 이기 때문에 매개변수의 타입도 자동적으로 string 으로 정해짐.
    function print(message = 'hello') {
        console.log(message);
    }
    print('hello');
    //print(1);

    // 반환되는 값이 number를 조작한 값이기 때문에 자동적으로 number 타입으로 정해짐.
    function add(x: number, y:number) {
        return x + y;
    }
    const result = add(1, 2);   // result: number




}