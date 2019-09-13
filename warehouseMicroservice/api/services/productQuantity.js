const database = require('../repository/repository.js');

async function getProductQuantity(productName) {
    try {
        const result = await database.getOneByVar('productName', productName);
        const quantity = result.quantity;
        return {
            productName: productName,
            quantity: quantity
        }
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    getProductQuantity
};