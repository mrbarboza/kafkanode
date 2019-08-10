import express from 'express';

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
    // Call Microservice
    return res.json({ ok: true });
});

export default routes;
