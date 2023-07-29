const { Thought, User } = require('../models');

// Thought controller: Contains all of the methods for performing CRUD operations on the thought model.
const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughtDb = await Thought.find()
        .sort({ createdAt: -1 });

      res.json(thoughtDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async getOneThought(req, res) {
    try {
      const thoughtDb = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thoughtDb) {
        return res.status(404).json({ message: 'No thought associated with this id' });
      }

      res.json(thoughtDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async createThought(req, res) {
    try {
      const thoughtDb = await Thought.create(req.body);

      const userDb = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thoughtDb._id } }, // $push is used to add thought id to user's `thoughts` field
        { new: true }
      );

      if (!userDb) {
        return res.status(404).json({ message: 'Thought created but no user with this id' });
      }

      res.json(thoughtDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    // A try-catch is used because findOneAndUpdate() will not trigger the model's schema validation by default. 
    try {
      const thoughtDb = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId }, 
        { $set: req.body }, 
        { runValidators: true, new: true }
      ); // $set is used to update the thought

      if (!thoughtDb) {
        return res.status(404).json({ message: 'No thought associated with this id' });
      }

      res.json(thoughtDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async deleteThought(req, res) {
    try {
      const thoughtDb = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thoughtDb) {
        return res.status(404).json({ message: 'No thought associated with this id' });
      }

    
      const userDb = User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } }, // $pull is used to remove a specific value from an array
        { new: true }
      );

      if (!userDb) {
        return res.status(404).json({ message: 'Thought created but no user with this id' });
      }

      res.json({ message: 'Thought deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addReaction(req, res) {
    try {
      const thoughtDb = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } }, // $addToSet is used to add a new value to an array if the value doesn't exist yet
        { runValidators: true, new: true }
      );

      if (!thoughtDb) {
        return res.status(404).json({ message: 'No thought associated with this id' });
      }

      res.json(thoughtDb);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async removeReaction(req, res) {
    try {
      const thoughtDb = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } }, // $pull is used to remove a specific value from an array
        { runValidators: true, new: true }
      );

      if (!thoughtDb) {
        return res.status(404).json({ message: 'No thought associated with this id' });
      }

      res.json({ message: 'Reaction deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtController;