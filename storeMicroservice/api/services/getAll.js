const database = require('../repository/repository.js');

async function getAll(modelName) {
    try {
        const result = await database.getAll(modelName);
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
};

module.exports = {
    getAll
};
