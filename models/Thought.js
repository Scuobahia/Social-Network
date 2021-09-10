const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlenght:200
    },
    username: {
        type: String,
        required: true
       
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlenght: 1,
            maxlenght: 200
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: 
            {
                type:String,
                required: true
            },
            reactions: [ReactionSchema]
        },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// create the Tought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;