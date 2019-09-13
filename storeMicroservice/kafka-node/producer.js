const kafka = require('kafka-node');
var argv = require('optimist').argv;

function doPost(_topic, _message) {
    try {
        var Producer = kafka.Producer;
        var KeyedMessage = kafka.KeyedMessage;
        var Client = kafka.KafkaClient;
        var client = new Client();
        var topic = _topic;
        var p = argv.p || 0;
        var a = argv.a || 0;
        var producer = new Producer(client, { requireAcks: 1 });

        producer.on('ready', function () {
            var message = _message;
            producer.send([{ topic: topic, partitions: p, messages: [message], attributes: a }], function (
                err,
                result
            ) {
                console.log(err || result);
            });
        });

        producer.on('error', function (err) {
            console.log('error', err);
        });
    }
    catch (e) {
        console.log(e);
    }

}

module.exports = {
    doPost
};
