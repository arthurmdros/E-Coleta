import express from 'express';

const routes = express.Router();

routes.get('/users', (req,res) => {
    res.send('Hello World from page Users.');
});

export default routes;