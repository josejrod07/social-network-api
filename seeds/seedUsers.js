
const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jim_smith',
    email: 'jim_smith@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jill_johnson',
    email: 'jill_johnson@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jack_jackson',
    email: 'jack_jackson@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jenny_johnson',
    email: 'jenny_johnson@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jim_johnson',
    email: 'jim_johnson@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'jamie_johnson',
    email: 'jamie_johnson@example.com',
    thoughts: [],
    friends: []
  }
];

const seedUserData = async () => {
  try {
    // Insert new user data
    await User.insertMany(userData);

    console.log('User data seeded successfully.');
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedUserData;