const { Schema } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    detailDescription: {
        type: String,
        required: true,
    },
    imageKey: {
        type: String,
        required: true,
    },
    invetory: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

module.exports = ProductSchema;