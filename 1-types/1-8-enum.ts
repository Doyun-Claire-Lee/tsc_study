{
    /*
     * Enum
     * - JavaScript에는 존재하지 않음
     * - TypeScript에서 자체적으로 제공
     */

    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;

    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY":1, "WEDNESDAY": 3});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    // - 사용이 권장되지 않음.
    // - 숫자 및 문자를 할당할 수 있음
    // - 생략하면 0부터 시작
    // - 첫 값을 할당하면 1씩 증가하는 값이 할당됨
    enum DAYS {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(DAYS.Friday);
    let day: DAYS = DAYS.Monday;
    day = 0;    // Enum 타입임에도 불구하고 숫자를 새로 할당할 수 있음. 💩

    // type 으로 대체하여 사용할 수 있음.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfWeek: DaysOfWeek = 'Monday';
}