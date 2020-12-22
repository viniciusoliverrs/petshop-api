const express = require('express');
const Service = require('../model/Service');
const router = express.Router();

/* GET Services */
router.get('/Services', (req, res) => {
    Service.findAll().then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* GET Service */
router.get('/Service/:id', (req, res) => {
    Service.findOne({ where: { id: req.params.id } }).then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* POST addService */
router.post('/addService', (req, res) => {
    Service.create({
        name: req.body.name,
        preco: req.body.preco
    }).then(() => {
        return res.json({ status: 'SUCCESS' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});
/* POST editService */
router.post('/editService', (req, res) => {
    Service.update({
        name: req.body.name,
        telephone: req.body.preco

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
/* POST delService */
router.post('/delService', (req, res) => {
    Service.destroy({
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