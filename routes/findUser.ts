const db = require('../db/db');
const CustomerModel = require('../db/models/customerModel');

const fetchUser = async () => {
    await db();
    const oldUsers = await CustomerModel.find({ firstName: { $exists: 1 }, age: { $gte: 20 }});
    console.log('The old users are:', oldUsers);
}

fetchUser();
