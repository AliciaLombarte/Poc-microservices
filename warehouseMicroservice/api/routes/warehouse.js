module.exports = function (app) {
  var warehouse = require('../controllers/warehouse');

  app.route('/warehouse')
    .get(warehouse.getProductsType)
    .post(warehouse.createProduct)
  app.route('/warehouse/:productId')
    .get(warehouse.getProductQuantity);
};
