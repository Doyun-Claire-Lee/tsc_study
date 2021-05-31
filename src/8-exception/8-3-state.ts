{
    class TimeoutError extends Error {}
    class OfflineError extends Error {}

    type SuccessState = {
        result: 'success';
    };

    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout'
    };

    type ResultState = SuccessState | NetworkErrorState;

    class NetworkClient {
        tryConnect(): ResultState {
            // result에 따라 분기하여 return
            return null;
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {
        }

        login() {
            this.client.tryConnect();
            // login...
        }
    }

    class App {
        constructor(private userService: UserService) {
        }

        run() {
            try {
                this.userService.login();
            } catch (e) {
                // show dialog to user
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);

    app.run();
}