const express = require('express');
const router = express.Router()// or
// const router = require("express").Router();
const db = require("../models/work.js");
// sends JSON of all work

db.find({}).then(data => {
    // console.log("1.)Checking if db is populated");
    if (data.length === 0) {
        // console.log("2.)DB is empty");
        require("../seeders/seed.js");
    } else {
     console.log("3.)DB is populated");
    }
});
// getLastWorkout()
router.get('/api/workouts', (req, res) => {
    db.find()
        .then(dbWork => {
            // console.log("get all:", dbWork)
            res.json(dbWork);
        })
        .catch(err => {
            res.json(err);
        });
});
// Add exercise to a workout, then seeds updated workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    // console.log("put:", body, params)
    db.findByIdAndUpdate(
        params.id,
        {
            $push: { exercises: body }
        },
        {
            new: true,
            runValidators: true
        })
        .then((dbWork) => {
            // console.log("works:", dbWork)
            res.json(dbWork);
        })
        .catch(err => {
            // console.log("err:", err)
            res.json(err);
        });
});
//Add new work and seed it
router.post("/api/workouts", ({ body }, res) => {
    db.create({})
        .then(dbWork => {
            res.json(dbWork);
        })
        .catch(err => {
            res.json(err);
        });
});
// Send Array of 7 recent workout
router.get("/api/workouts/range", (req, res) => {
    // console.log("range")
    db.find({})
        .sort({ _id: -1 })
        .limit(7)
        .then(dbWork => {
            // console.log("dbwork")
            res.json(dbWork);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;