"use strict";
{
    function internWork(person) {
        console.log(person.name, person.employeeId, person.work());
    }
    internWork({
        name: 'ellie',
        score: 1,
        employeeId: 123,
        work: () => { }
    });
}
//# sourceMappingURL=1-7-intersection.js.map