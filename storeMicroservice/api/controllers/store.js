var mongoose = require('mongoose'),
Product = mongoose.model('Product'),
  Order = mongoose.model('Order');
var create = require('../services/create');
var sell = require('../services/sellProduct');
var get = require('../services/getAll');

function getAll(req, res) {
  get.getAll('Products').then((err, result) => {
    if (err)
      res.send(err);
    res.json(result);
  });
};

function createStore(req, res) {
  const productData = req.body;
  create.createProduct(productData).then((err, result) => {
    if (err)
      res.send(err);
    res.json(result);
  });
}

function sellProduct(req, res) {
  const productData = req.body;
  sell.createOrder(productData).then((err, result) => {
    if (err)
      res.send(err);
    res.json(result);
  });
};

function getOrders(req, res) {
  get.getAll('Orders').then((err, result) => {
    if (err)
      res.send(err);
    res.json(result);
  });
};


module.exports = {
  getAll,
  createStore,
  sellProduct,
  getOrders
};
