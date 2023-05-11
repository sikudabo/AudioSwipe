const db = require('../db/db');
const CustomerModel = require('../db/models/customerModel');

const updateUser = async () => {
    await db();
    try {
        await CustomerModel.updateOne({ firstName: 'Kyle'}, { $unset: { createdOn: 0 }});
    } catch(e: any) {
        console.log('Error:', e.message);
    }

    console.log('Successfully updated!');
}

updateUser();