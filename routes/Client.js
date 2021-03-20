const express = require('express');
const Client = require('../models/Client');
const router = express.Router();

/* GET Clients */
router.get('/Clients', (req, res) => {
    Client.findAll().then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* GET Client */
router.get('/Client/:id', (req, res) => {
    Client.findOne({ where: { id: req.params.id } }).then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* POST addClient */
router.post('/addClient', (req, res) => {
    Client.create({
        name: req.body.name,
        telephone: req.body.telephone
    }).then(() => {
        return res.json({ status: 'SUCCESS' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});
/* PUT editClient */
router.put('/editClient', (req, res) => {
    const { name, telephone } = req.body;
    Client.update({
        name: name,
        telephone: telephone
    }, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        return res.json({ status: 'SUCCESS' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});
/* DELETE delClient */
router.delete('/delClient', (req, res) => {
    Client.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        return res.json({ status: 'SUCCESS' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

module.exports = router;