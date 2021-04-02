export interface User {
    mail: string;
    password: string;
    nickName: string;
}

class UserService {
    users: Array<User> = [
        { mail: "test@test.fr", password: "test", nickName: "test" },
        { mail: "admin@test.fr", password: "admin", nickName: "admin" },
    ];

    authenticate(mail: string, password: string): User | null {
        return (
            // Search for the first user matching login and password
            this.users.find((u) => u.mail === mail && u.password === password) || null
        );
    }
}

export default new UserService();
