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
    // success -> π body
    // fail -> π­ reason
    function printLoginState(state) {
        // λ³΄νΈμ μΈ λ°©λ²
        if ('response' in state) {
            console.log(`π ${state.response.body}`);
        }
        else {
            console.log(`π­ ${state.reason}`);
        }
    }
}
//# sourceMappingURL=1-5-union.js.map