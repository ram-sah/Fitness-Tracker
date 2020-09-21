const express = require('express')
const router = express.Router()// or
// const router = require("express").Router();
const db = require("../models");

// sends JSON of all work
router.get('api/workouts', (req, res) => {
    db.Work.find()
        .then(dbWork => {
            res.json(dbWork);
        })
        .catch(err => {
            res.json(err);
        });
});
//Add new work
router.post("/api/workouts", ({ body }, res) => {
    db.Work.create(body)
    .then(dbWork => {
        res.json(dbWork);
    })
    .catch(err => {
        res.json(err);
    });
});


module.exports = router;