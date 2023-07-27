const { User, Thought } = require('../models');

// User controller: Contains all of the methods for performing CRUD operations on the user model.
const userController = {
  async getAllUsers(req, res) {
    try {
      const userDb = await User.find()
        .select('-__v') // exclude the __v field

      res.json(userDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async getOneUser(req, res) {
    try {
      const userDb = await User.findOne({ _id: req.params.userId })
        .select('-__v') // exclude the __v field
        .populate('friends') // populate the `friends` field for the user
        .populate('thoughts'); // populate the `thoughts` field for the user

      if (!userDb) {
        return res.status(404).json({ message: 'No user with this id' });
      }

      res.json(userDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async createUser(req, res) {
    try {
      const userDb = await User.create(req.body);
      res.json(userDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async updateUser(req, res) {
    try {
      const userDb = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          runValidators: true, // checks the new updated user data to ensure it's valid
          new: true,
        }
      );

      if (!userDb) {
        return res.status(404).json({ message: 'No user associated with this id' });
      }

      res.json(userDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async deleteUser(req, res) {
    try {
      const userDb = await User.findOneAndDelete({ _id: req.params.userId })

      if (!userDb) {
        return res.status(404).json({ message: 'No user associated with this id' });
      }

      // bonus points: deletes user's associated thoughts when user is deleted
      await Thought.deleteMany({ _id: { $in: userDb.thoughts } }); // $in is used to match values in an array
      res.json({ message: 'User and associated thoughts deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const userDb = await User.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $addToSet: { friends: req.params.friendId } }, // $addToSet is used to add a value to an array unless the value is already present
        { new: true }
      );

      if (!userDb) {
        return res.status(404).json({ message: 'No user with this id' });
      }

      res.json(userDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const userDb = await User.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $pull: { friends: req.params.friendId } }, // $pull is used to remove a friendId from the friends array
        { new: true }
      );

      if (!userDb) {
        return res.status(404).json({ message: 'No user with this id' });
      }

      res.json(userDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = userController;