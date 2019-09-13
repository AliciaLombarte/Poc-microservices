const productQuantity = require('./productQuantity');
const producer = require('../../kafka-node/producer');
const responseHelper = require('../helpers/responseHelper');
const database = require('../repository/repository.js');

async function checkOrderViability(order) {
    try {
        const product = JSON.parse(order);
        const quantity = await productQuantity.getProductQuantity(product.productName);
        if (responseHelper.disponibility(quantity, product)) {
            const message = responseHelper.orderAvailability('aceptado', product.client);
            producer.doPost('availabilityEvent', JSON.stringify(message));
        } else {
            const message = responseHelper.orderAvailability('denegado', product.client);
             producer.doPost('availabilityEvent', JSON.stringify(message));
        }
 
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    checkOrderViability
};
