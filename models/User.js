const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type:
                unique:
            required:
                trim:
        },
        email: {
            type:
                unique:
            required:

        },
        thoughts: {
            type:
                ref:
        },
        friends: [
            {
                type:
                    ref:
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