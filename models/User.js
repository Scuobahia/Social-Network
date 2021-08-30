const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username required!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true

        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
});
const User = model('User', UserSchema);

module.exports = User;