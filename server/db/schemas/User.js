//server/db/schemas/User.js

const { Schema } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        zipCode: {
            type: String,
            required: true,
        },
        address1: {
            type: String,
            required: true,
        },
        address2: {
            type: String,
            required: true,
        }
    },
    name: {
        type: String,
        required: true,
    },
    _id: {
        type: Schema.Types.ObjectId,
        required: false,
    }
    //_id는 요청의 필수값이 아니니까 false?
})

module.exports = mongoose.model('User', UserSchema);