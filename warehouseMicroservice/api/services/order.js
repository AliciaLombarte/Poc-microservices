const database = require('../repository/repository.js');

async function getProductsType() {
    try {
        const result = await database.getAll();
        console.log(result);
        const productsTypeArray = arrayTypesOfProducts(result);
        return productsTypeArray;
    } catch (err) {
        log.Err(err);
        return err;
    }
}

async function createProduct(productData) {
    try {
        const result = await database.create(productData);
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
}

function arrayTypesOfProducts(products) {
    var array = [];
    products.forEach(product => array.push(product.productType));
    return array;
}

module.exports = {
    getProductsType,
    createProduct
};
