const { Schema, model } = require('mongoose');

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
        },
    },
    name: {
        type: String,
        required: true,
    },
});

// Create new user document
UserSchema.statics.create = function (payload) {
    // this === Model
    const user = new this(payload);
    // return Promise
    return user.save();
};

// Find All
UserSchema.statics.findAll = function () {
    // return promise
    return this.find({});
};

// Find One by id
UserSchema.statics.findOneByid = function (id) {
    return this.findOne({ id });
};

// Find One by email and password
UserSchema.statics.findOneByEmailAndPassword = function (email, password) {
    return this.findOne({ email, password });
};

// Update by id
UserSchema.statics.updateByid = function (id, payload) {
    return this.findOneAndUpdate({ id }, payload, { new: true });
};

// Delete by id
UserSchema.statics.deleteByid = function (id) {
    return this.remove({ id });
};

// Create Model & Export

module.exports = model('User', UserSchema);
