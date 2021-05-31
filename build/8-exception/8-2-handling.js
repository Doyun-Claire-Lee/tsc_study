"use strict";
{
    class NetworkClient {
        tryConnect() {
            throw new Error('no network!!');
        }
    }
    class UserService {
        constructor(client) {
            this.client = client;
        }
        login() {
            this.client.tryConnect();
            // login...
        }
    }
    // 에러처리는 가능한 유의미한 곳에서 하는것이 좋다!
    class App {
        constructor(userService) {
            this.userService = userService;
        }
        run() {
            try {
                this.userService.login();
            }
            catch (e) {
                // show dialog to user
            }
        }
    }
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}
//# sourceMappingURL=8-2-handling.js.map