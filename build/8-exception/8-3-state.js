"use strict";
{
    class TimeoutError extends Error {
    }
    class OfflineError extends Error {
    }
    class NetworkClient {
        tryConnect() {
            // result에 따라 분기하여 return
            return null;
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
