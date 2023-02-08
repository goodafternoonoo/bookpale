import express from 'express';
import mongoose, { Schema, model } from 'mongoose';

// 유저의 스키마를 선언?
const userSchema = new Schema({
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
        },
    },
    name: {
        type: String,
        required: true,
    },
});

// module export할때 보내줘야했던것을 변수로 선언
// const User = mongoose.model('User', userSchema);
const User = express.Router();

// Create new user document
userSchema.statics.create = function (payload) {
    // this === Model
    const user = new this(payload);
    // return Promise
    return user.save();
};

// Find All
userSchema.statics.findAll = function () {
    // return promise
    return this.find({});
};

// Find One by id
userSchema.statics.findOneByid = function (id) {
    return this.findOne({ id });
};

// Update by id
userSchema.statics.updateByid = function (id, payload) {
    return this.findOneAndUpdate({ id }, payload, { new: true });
};

// Delete by id
userSchema.statics.deleteByid = function (id) {
    return this.remove({ id });
};

// Create Model & Export
export default User ;


