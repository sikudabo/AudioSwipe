const db = require('../db/db');
const UserModel = require('../db/models/userModel');

async function testing() {
    const user1 = new UserModel({ name: 'Tab', age: 90, votes: 10 });
    const user2 = new UserModel({ name: 'Hu', age: 23, votes: 19 });

    console.log(user1.name);
    user1.name = 'Corey';
    console.log(user1.name);
}

testing();