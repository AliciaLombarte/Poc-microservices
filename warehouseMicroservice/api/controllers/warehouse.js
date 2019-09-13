var service = require('../services/order.js');
var productQuantity = require('../services/productQuantity');

function getProductsType(req, res) {
  service.getProductsType().then((err, result) => {
    if (err)
      res.send(err);
    res.json(result);
  });
}

function createProduct(req, res) {
  const productData = req.body;
  service.createProduct(productData).then((err, result) => {
    if (err)
      res.send(err);
    res.json(result);
  });
}

function getProductQuantity(req, res) {
  const id = req.params.productId;
  productQuantity.getProductQuantity(id).then((err, quantity) => {
    if (err)
      res.send(err);
    res.json(quantity);
  });
};


module.exports = {
  getProductsType,
  createProduct,
  getProductQuantity
};
