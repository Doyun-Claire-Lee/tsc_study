"use strict";
{
    function move(direction) {
        console.log(direction);
    }
    move('down');
    const tile = 16;
    function login() {
        return {
            response: {
                body: "logged in!"
            }
        };
    }
    // printLoginState(state)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state) {
        // 보편적인 방법
        if ('response' in state) {
            console.log(`🎉 ${state.response.body}`);
        }
        else {
            console.log(`😭 ${state.reason}`);
        }
    }
}
//# sourceMappingURL=1-5-union.js.map