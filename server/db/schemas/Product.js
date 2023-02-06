//product 신규 작성

const { Schema } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
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
    inventory: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    timestamps: true,
})

module.exports = mongoose.model('Product', ProductSchema);