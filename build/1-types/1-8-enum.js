"use strict";
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
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 3 });
    const dayOfToday = DAYS_ENUM.MONDAY;
    // TypeScript
    // - 사용이 권장되지 않음.
    // - 숫자 및 문자를 할당할 수 있음
    // - 생략하면 0부터 시작
    // - 첫 값을 할당하면 1씩 증가하는 값이 할당됨
    let DAYS;
    (function (DAYS) {
        DAYS[DAYS["Monday"] = 0] = "Monday";
        DAYS[DAYS["Tuesday"] = 1] = "Tuesday";
        DAYS[DAYS["Wednesday"] = 2] = "Wednesday";
        DAYS[DAYS["Thursday"] = 3] = "Thursday";
        DAYS[DAYS["Friday"] = 4] = "Friday";
        DAYS[DAYS["Saturday"] = 5] = "Saturday";
        DAYS[DAYS["Sunday"] = 6] = "Sunday";
    })(DAYS || (DAYS = {}));
    console.log(DAYS.Friday);
    let day = DAYS.Monday;
    day = 0; // Enum 타입임에도 불구하고 숫자를 새로 할당할 수 있음. 💩
    let dayOfWeek = 'Monday';
}
//# sourceMappingURL=1-8-enum.js.map