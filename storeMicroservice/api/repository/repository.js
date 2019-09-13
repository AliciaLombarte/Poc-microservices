const _ = require('lodash');
var mongoose = require('mongoose'),
Product = mongoose.model('Product'),
    Order = mongoose.model('Order');

const models = new Map();

models.set('Products', Product);
models.set('Orders', Order);


async function create(modelName, document) {
    const Model = models.get(modelName);
    try {
        const doc = new Model(document);
        const savedDoc = await doc.save();
        return savedDoc;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


async function getAll(modelName) {
    const Model = models.get(modelName);
    try {
        const arrayDocs = await Model.find({});
        return arrayDocs;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


async function getOneByVar(modelName, varName, value) {
    const Model = models.get(modelName);
    const query = {};
    query[varName] = value;
    try {
        const result = await Model.findOne(query);
        if (_.isNull(result)) {
            return new Error(`${modelName} ${value} not found.`);
        }
        return result;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


async function updateOne(modelName, obj, varName, value) {
    const Model = models.get(modelName);
    const query = {};
    query[varName] = value;
    try {
        const result = await Model.findOneAndUpdate(query, obj);
        if (_.isNull(result)) {
            throw new Error(`${modelName} id ${value} not found`);
        }
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


module.exports = {
    create,
    getAll,
    getOneByVar,
    updateOne
};
