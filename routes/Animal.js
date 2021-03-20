const express = require('express');
const Animal = require('../models/Animal');
const router = express.Router();

/* GET Animals */
router.get('/Animals', (req, res) => {
    Animal.findAll().then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* GET Animal */
router.get('/Animal/:id', (req, res) => {
    if (!req.params.id.isInteger()) return res.status(200).json({ status: 'OK', mensagem: "Incorrect parameter type!" })
    Animal.findOne({ where: { id: req.params.id } }).then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* POST addAnimal */
router.post('/addAnimal', (req, res) => {
    Animal.create({
        name: req.body.name,
        telephone: req.body.telephone
    }).then(() => {
        return res.json({ status: 'SUCCESS' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});
/* POST editAnimal */
router.post('/editAnimal', (req, res) => {
    Animal.update({
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
/* POST delAnimal */
router.post('/delAnimal', (req, res) => {
    Animal.destroy({
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