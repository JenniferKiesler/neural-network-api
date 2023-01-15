const { Schema, model} = require('mongoose')
const reactionSchema = require('./Reaction')
const {formatDate} = require('../utils/format')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max: 280,
            min: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formatDate(date)
        },
        reactions: [reactionSchema]
    }, {
        toObject: {
            getters: true,
            virtuals: true
        },
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought