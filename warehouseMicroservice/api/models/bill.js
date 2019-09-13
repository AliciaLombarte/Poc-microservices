var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillSchema = new Schema({
    client: {
        type: String,
        required: true
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    orderId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Bill', BillSchema);