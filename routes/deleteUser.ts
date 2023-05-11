const db = require('../db/db');
const CustomerModel = require('../db/models/customerModel');

const deleteUser = async () => {
    await db();

    try {
        await CustomerModel.deleteOne({ $and: [{ firstName: 'Tabitha' }, { age: { $gte: 4 }}]});
    } catch(e: any) {
        console.log('Error:', e.message);
        return;
    }

    console.log('The user was sucessfully deleted!');
}

deleteUser();