"use strict";
{
    function printLoginState(state) {
        if (state.state === 'loading') {
            console.log('👀 loading...');
        }
        else if (state.state === 'success') {
            console.log(`😃 ${state.response.body}`);
        }
        else if (state.state === 'fail') {
            console.log(`😱 ${state.reason}`);
        }
    }
    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
//# sourceMappingURL=loading.js.map