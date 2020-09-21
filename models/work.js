const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }]
});

const work = mongoose.model("work", workSchema);

module.exports = work;
