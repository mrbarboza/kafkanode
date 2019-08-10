import express from 'express';
import { Kafka } from 'kafkajs';

import routes from './routes';

const app = express();

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['kafka:9092'],
});

app.use(routes);

const producer = kafka.producer();

const run = async () => {
    await producer.connect();

    app.listen(3333);
}

run().catch(console.error);
