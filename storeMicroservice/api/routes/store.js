module.exports = function (app) {
  var store = require('../controllers/store');

  app.route('/product')
    .get(store.getAll)
    .post(store.createStore)
  app.route('/product/sell')
    .post(store.sellProduct)
  app.route('/orders')
    .get(store.getOrders);
};
