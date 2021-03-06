{
    /*
     * Union Types : OR
     */

    type Direction = "left" | "right" | "up" | "down";

    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // μ€μ  μμ 
    // - function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            response: {
                body: "logged in!"
            }
        };
    }

    // printLoginState(state)
    // success -> π body
    // fail -> π­ reason
    function printLoginState(state: LoginState) {
        // λ³΄νΈμ μΈ λ°©λ²
        if('response' in state) {
            console.log(`π ${state.response.body}`)
        } else {
            console.log(`π­ ${state.reason}`);
        }
    }
}