const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let features = [];
let maxId = 0;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }
    next();
});

app.get('/features', (req, res) => {
    return res.send(features);
});

app.get('/feature/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send();
    }

    const feature = features.find(item => item.id === id);

    if (!feature) {
        return res.status(404).send();
    }

    return res.send(feature);
});

app.post('/feature', function (req, res) {
    const feature = {
        id: maxId,
        title: req.body.title,
        description: req.body.description,
    };

    features.push(feature);
    maxId++;

    return res.send(feature);
});

app.put('/feature/:id', function (req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send();
    }

    const feature = features.find(item => item.id === id);

    if (!feature) {
        return res.status(404).send();
    }

    feature.title = req.body.title;
    feature.description = req.body.description;

    return res.send(feature);
});

app.delete('/feature/:id', function (req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send();
    }

    const index = features.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).send();
    }

    features = features.filter((item) => item.id !== id);

    return res.status(200).send();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
