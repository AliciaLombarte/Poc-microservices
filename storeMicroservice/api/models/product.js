var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productName: {
    type: String,
    required: 'Kindly enter the name of the iceCream',
    unique: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  productType: {
    type: [{
      type: String,
      enum: ['helado', 'granizado', 'limonada']
    }],
    default: ['helado']
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);
