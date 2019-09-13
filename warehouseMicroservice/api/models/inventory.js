var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventorySchema = new Schema({
  productName: {
    type: String,
    required: 'Kindly enter the name of the product',
    unique: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: Number,
    required: true
  },
  productType: {
    type: String
  }
});

module.exports = mongoose.model('Inventory', InventorySchema);