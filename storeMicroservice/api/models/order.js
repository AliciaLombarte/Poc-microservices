var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    client: {
        type: String,
        required: true,
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);