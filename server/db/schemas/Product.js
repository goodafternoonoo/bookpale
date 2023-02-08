 //import mongoose from 'mongoose';
import mongoose,{ Schema } from 'mongoose';

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
    invetory: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
    },
  {
    collection: "Product",
  }
);

const model = mongoose.model("Product",ProductSchema);
export default model;
//export default ProductSchema;