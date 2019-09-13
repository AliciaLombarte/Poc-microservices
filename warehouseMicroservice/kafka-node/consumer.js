const kafka = require('kafka-node');
var argv = require('optimist').argv;
var checkOrder = require('../api/services/checkOrder');
function doGet(_topic) {
    try {
        var Consumer = kafka.Consumer;
        var Offset = kafka.Offset;
        var Client = kafka.KafkaClient;
        var topic = 'orderEvent';

        var client = new Client({ kafkaHost: 'localhost:9092' });
        var topics = [{ topic: topic, partitions: 1 }, { topic: topic, partitions: 0 }];
        var options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };

        var consumer = new Consumer(client, topics, options);
        var offset = new Offset(client);

        consumer.on('message', function (message) {
            if(message.topic == 'orderEvent'){
                checkOrder.checkOrderViability(message.value);
            }
        });

        consumer.on('error', function (err) {
            console.log('error', err);
        });

        /*
        * If consumer get `offsetOutOfRange` event, fetch data from the smallest(oldest) offset
        */
        consumer.on('offsetOutOfRange', function (topic) {
            topic.maxNum = 2;
            offset.fetch([topic], function (err, offsets) {
                if (err) {
                    return console.error(err);
                }
                var min = Math.min.apply(null, offsets[topic.topic][topic.partition]);
                consumer.setOffset(topic.topic, topic.partition, min);
            });
        });
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    doGet
};
