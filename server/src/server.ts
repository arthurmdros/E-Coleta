import express from 'express';

const app = express();

app.get('/users', (req,res) => {
    res.send('Hello World from page Users.');
});

app.listen(3333);