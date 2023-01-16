const { Schema, model} = require('mongoose')
const { formatDate } = require('../utils/format')

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            Required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: [true, 'username is required']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: date => formatDate(date)
        },
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
        username: {
            type: String,
            required: [true, 'username is required']
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

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought