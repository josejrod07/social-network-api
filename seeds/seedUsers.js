
const { User } = require('../models');
const { Thought } = require('../models');

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
    // Delete all users
    await User.deleteMany({});

    // Correctly assign thoughts to users
    const thoughts = await Thought.find({});

    userData.forEach(async (user) => {
        const newThoughts = thoughts.filter((thought) => {
            return thought.username === user.username;
        });

        user.thoughts = newThoughts;
    });

    // Insert new user data
    await User.insertMany(userData);

    console.log('User data seeded successfully');
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedUserData;