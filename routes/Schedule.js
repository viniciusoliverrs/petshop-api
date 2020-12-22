const express = require('express');
const Schedule = require('../model/Schedule');
const router = express.Router();

/* GET Schedules */
router.get('/Schedules', (req, res) => {
    Schedule.findAll().then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* GET Schedule */
router.get('/Schedule/:id', (req, res) => {
    Schedule.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        return res.json({ item: data });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

/* POST addSchedule */
router.post('/addSchedule', (req, res) => {
    Schedule.create({
        client_id: req.body.client_id,
        animal_id: req.body.animal_id,
        service_id: req.body.service_id,
        datetime: req.body.datetime,
        payment: req.body.payment,
        observation: req.body.observation
    }).then(() => {
        return res.json({ status: 'SUCCESS' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});
/* POST editSchedule */
router.post('/editSchedule', (req, res) => {
    Schedule.update({
        client_id: req.body.client_id,
        animal_id: req.body.animal_id,
        service_id: req.body.service_id,
        datetime: req.body.datetime,
        payment: req.body.payment,
        observation: req.body.observation
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
/* POST delSchedule */
router.post('/delSchedule', (req, res) => {
    Schedule.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return res.json({ status: 'SUCCESS' });
    }).catch((err) => {
        return res.json({ status: err });
    });
});

module.exports = router;