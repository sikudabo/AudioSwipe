const mongoose = require('mongoose');
const { ArtistModel } = require('../db/models');
mongoose.connect('mongodb://localhost:27017/audioswipe');

async function interactionWithDb() {
    const artist = {
        username: 'sikudao',
        firstName: 'Simeon',
        age: 30,
    };

    let artists = [];

    try {
        artists = await ArtistModel.find({ username: 'sikudabo' }, {});
        console.log('The artists are:', artists);
    } catch(e) {
        console.log(e.message);
    }
}

interactionWithDb();