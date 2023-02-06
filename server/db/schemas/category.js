const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  //_id:Schema.Types.ObjectId,
  categoryname:String,

});

module.exports = mongoose.model('Category', categorySchema);