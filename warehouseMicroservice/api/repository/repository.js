const _ = require('lodash');
var mongoose = require('mongoose'),
    Inventory = mongoose.model('Inventory');


/**
* Add a document to collection/Inventory of the NoSQL Database
*
*/
async function create(document) {
    try {
        const doc = new Inventory(document);
        const savedDoc = await doc.save();
        return savedDoc;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

/**
* Returns all documents of a collection/Inventory of the NoSQL Database
*
*/
async function getAll() {
    try {
        const arrayDocs = await Inventory.find({});
        return arrayDocs;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


/**
* Get one document from the NoSQL database
*/
async function getOneByVar(varName, value) {
    const query = {};
    query[varName] = value;
    try {
        const result = await Inventory.findOne(query);
        if (_.isNull(result)) {
            return new Error(`${value} not found.`);
        }
        return result;
    } catch (err) {

        console.log(err)
        throw new Error(err);
    }
}


/**
* Updates one object with specific var returning promise
*
*/
async function updateOne(obj, varName, value) {
    const query = {};
    query[varName] = value;
    try {
        const result = await Inventory.findOneAndUpdate(query, obj);
        if (_.isNull(result)) {
            throw new Error(`id ${value} not found`);
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