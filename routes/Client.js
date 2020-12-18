const express = require('express');
const Client = require('../model/Client');
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
/* POST editClient */
router.post('/editClient', (req, res) => {
    Client.update({
        name: req.body.name,
        telephone: req.body.telephone

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
/* POST delClient */
router.post('/delClient', (req, res) => {
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