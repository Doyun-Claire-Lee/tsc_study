{
    // Array
    // - 배열을 정의하는 방식은 두가지가 있음.
    const fruits: string[] = ['🍎', '🍋', '🍌', '🍒'];
    const scores: Array<number> = [1, 2, 3, 4];

    // readonly + 자료형[]: 배열을 절대 변경할 수 없음.
    function printArray(fruits: readonly string[]) {}


    // Tuple
    // - 서로 다른 타입의 데이터를 담을 수 있음.
    // - 사용 권장x -> interface, type alias, class로 대체하여 사용
    let student: [string, number];
    student = ['name', 123];
    student[0]  // name
    student[1]  // 123

    const[name, age] = student;



}