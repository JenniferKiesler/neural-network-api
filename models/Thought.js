const { Schema, model} = require('mongoose')
const formatDate = require('../utils/format')

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
            default: Date.now(),
            get: date => formatDate(date)
            // get: date => new Intl.DateTimeFormat('en-US', { hour12: true, dayPeriod: 'short'}).format(date)
            //timeStyle: short?
        },
    }, {
        toJSON: {
            getters: true,
        }
    }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought