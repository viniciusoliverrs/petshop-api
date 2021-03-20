const express = require('express');
const Animal = require('../models/Animal');
const router = express.Router();

/* GET Animals */
router.get('/Animals', (req, res) => {
    Animal.findAll().then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: "ERR" });
    });
});

/* GET Animal */
router.get('/Animal/:id', (req, res) => {
    Animal.findOne({ where: { id: req.params.id } }).then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: "ERR" });
    });
});

/* POST addAnimal */
router.post('/addAnimal', (req, res) => {
    Animal.create({
        size: req.body.size,
        breed: req.body.breed
    }).then(() => {
        return res.json({ status: 'OK' });
    }).catch((err) => {
        return res.json({ status: "ERR" });
    });
});
/* PUT editAnimal */
router.put('/editAnimal', (req, res) => {
    Animal.update({
        size: req.body.size,
        breed: req.body.breed
    }, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        return res.json({ status: 'OK' });
    }).catch((err) => {
        return res.json({ status: "ERR" });
    });
});
/* DELETE delAnimal */
router.delete('/delAnimal', (req, res) => {
    Animal.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        return res.json({ status: 'OK' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

module.exports = router;