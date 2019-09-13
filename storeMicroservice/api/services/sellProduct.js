const database = require('../repository/repository.js');
const producer = require('../../kafka-node/producer');


async function createOrder(productData) {
    try {
        const result = await database.create('Orders',productData);
        
        producer.doPost('orderEvent', JSON.stringify(productData));
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
};

module.exports = {
    createOrder
};
