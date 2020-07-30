class Users {
    constructor() {
        this.token = '';
    }

    // To saved a users
    async savedUser(data) {
        try {
            let postedInfo = await fetch('http://192.10.10.7:3000/users/newUser', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let postedInfoJson = await postedInfo.json();
            return postedInfoJson;
        } catch (e) {
            console.log(e);
        }
    }

    // SignIn User
    async singIn(userName, userPassword) {
        console.log('yay', userName, userPassword);
        try {
            let data = {
                userName,
                userPassword
            }
            let signInUser = await fetch('http://192.10.10.7:3000/users//signIn', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let signInUserJson = await signInUser.json();
            return signInUserJson;
        } catch (e) {
            console.log(e);
        }
    }

    // To get All Users
    getAllUsers() {}

    // To get a single users
    getOneUsers() {}

    // To save token's users
    savedToken(token) {
        this.token = token;
    }

    // To get token
    getToken() {
        return this.token;
    }
}

const usersClass = new Users()

export {
    usersClass
}