const { Thought } = require('../models');

const thoughtData = [
  {
    thoughtText: 'Just finished a great book!',
    username: 'john_doe',
  },
  {
    thoughtText: 'Cannot wait to read the next one!',
    username: 'jane_doe',
  },
  {
    thoughtText: 'I am so excited to read this book!',
    username: 'jim_smith',
  },
  {
    thoughtText: 'I am so excited for UTOPIA!',
    username: 'jill_johnson',
  },
  {
    thoughtText: 'I am so excited for the Its All A Blur Tour!',
    username: 'jack_jackson',
  },
  {
    thoughtText: 'I am so excited for Rolling Loud 2023!',
    username: 'jenny_johnson',
  }
];

const seedThoughtData = async () => {
  try {
    // Insert new thought data
    await Thought.deleteMany({});

    // Insert new thought data
    await Thought.insertMany(thoughtData);

    console.log('Thought data seeded successfully');
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedThoughtData;