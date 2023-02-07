const { Schema } = require('mongoose');

const OrderSchema = new Schema ({
    productId: {
        type: [Number], //??
        required: true,
    },
    totalPrice: {
        type: Number,
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
        receiverName: {
            type: String,
            required: true,
        },
        receiverPhoneNumber: {
            type: String,
            required: true,
        }
    },
    shortDescription: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: false,
        default: '배송준비중',
    },
},
{
    timestamps: true,
})

module.exports = OrderSchema;