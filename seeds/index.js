const db = require('../config/connection');
const seedUserData = require('./seedUsers');
const seedThoughtData = require('./seedThoughts');

db.once('open', async () => {
        await seedThoughtData();
        await seedUserData();
    
        console.log('Data seeded');
    
        process.exit(0);
});