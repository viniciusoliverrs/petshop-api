const express = require('express');
const Service = require('../model/Service');
const router = express.Router();

/* GET Services */
router.get('/Services', (req, res) => {
    Service.findAll().then((data) => {
        return res.json({ status: "OK", item: data });
    }).catch((err) => {
        return res.json({ status: "ERR", item: [] });
    });
});

/* GET Service */
router.get('/Service/:id', (req, res) => {
    Service.findOne({ where: { id: req.params.id } }).then((data) => {
        return res.json({ status: "OK", item: data });
    }).catch((err) => {
        return res.json({ status: "ERR", item: [] });
    });
});

/* POST addService */
router.post('/addService', (req, res) => {
    Service.create({
        name: req.body.name,
        preco: req.body.preco
    }).then(() => {
        return res.json({ status: 'OK' });
    }).catch((err) => {
        return res.json({ status: "ERR" });
    });
});
/* PUT editService */
router.put('/editService', (req, res) => {
    Service.update({
        name: req.body.name,
        telephone: req.body.preco

    }, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        return res.status(200).json({ status: "OK" });
    }).catch((err) => {
        return res.status(500).json({ status: "ERR" });
    });
});
/* DELETE delService */
router.delete('/delService', (req, res) => {
    Service.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        return res.status(200).json({ status: "OK" });
    }).catch((err) => {
        return res.status(500).json({ status: "ERR" });
    });
});

module.exports = router;