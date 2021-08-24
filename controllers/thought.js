const { User, Thought } = require('../models');

const thoughtController = {

    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400)
            })
    },

    getThoughtbyId({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400)
            })
    },

    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thought: _id } },
                    { new: true }
                );
            })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err))
    },
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id}, body, { new: true, runValidators: true  })
            .then(dbThoughtData => {
               if (!dbThoughtData) {
                   res.status(404).json({ message: "No thought found with this id"})
                   return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.status(400).json(err))
    },
   deleteThought
};
