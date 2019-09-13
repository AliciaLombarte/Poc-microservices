const database = require('../repository/repository.js');

async function createProduct(productData) {
    try {
        const result = await database.create('Products', productData);
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    createProduct
};
