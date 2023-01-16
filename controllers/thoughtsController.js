const { Thought } = require('../models')

module.exports = {
  create: async function(req, res) {
    try {
      const result = await Thought.create(req.body)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  findAll: async function(req, res) {
    try {
      const thoughts = await Thought.find()
      res.json(thoughts)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  findOne: async function(req, res) {
    try {
      const thought = await Thought.findById(req.params.id)
      res.json(thought)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  update: async function(req, res) {
    try {
      const result = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  delete: async function(req, res) {
    try {
      const result = await Thought.findByIdAndDelete(req.params.id)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
}