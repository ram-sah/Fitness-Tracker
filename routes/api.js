const express = require('express')
const router = express.Router()// or
// const router = require("express").Router();
const db = require("../models");
// sends JSON of all work
router.get('/api/workouts', (req, res) => {
    db.Workout.find()
        .then(dbWork => {
            console.log("get all:", dbWork)
            res.json(dbWork);
        })
        .catch(err => {
            res.json(err);
        });
});
//Add new work and seed it
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWork => {
            res.json(dbWork);
        })
        .catch(err => {
            res.json(err);
        });
});
// Add exercise to a workout, then seeds updated workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    // console.log("put:", body, params)
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, {new:true})
        .then((dbWork) => {
            console.log("works:", dbWork)
            res.json(dbWork);
        })
        .catch(err => {
            // console.log("err:", err)
            res.json(err);
        });
});
// Send Array of 7 recent workout
router.get("/api/workouts/range", (req, res) => {
    // console.log("range")
    db.Workout.find({})
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