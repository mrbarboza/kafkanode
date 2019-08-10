import express from 'express';
import { Kafka } from 'kafkajs';

import routes from './routes';

const app = express();

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    retry: {
        initialRetryTime: 300,
        retries: 10,
    },
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'certificate-group-return' });

app.use((req, res, next) => {
    req.producer = producer;

    return next()
});

app.use(routes);

const topic = 'certification-response';

const run = async () => {
    await producer.connect();
    await consumer.connect();

    app.listen(3333);

    await consumer.subscribe({ topic });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => console.log(message.value.toString()),
    });
}

run().catch(console.error);
