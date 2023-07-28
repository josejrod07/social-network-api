const seedUserData = require('./seedUsers');
const seedThoughtData = require('./seedThoughts');

const seedAllData = async () => {
  try {
    // Call the seeding functions for User and Thought data
    await seedUserData();
    await seedThoughtData();

    console.log('Data seeding complete');
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedAllData();
