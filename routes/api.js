const router = require('express').Router();
const Workout = require('../models/workout.js');
const path = require('path');



// Get all workouts 
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercise.duration'
            },
            totalDistance: {
                $sum: '$exercise.distance'
            }
        }
    }])
        .then(workoutData => {
            console.log('-----HELLO-----', workoutData);
            res.json(workoutData);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Get workouts by ID to Update

router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate({ _id: req.params.id }, {
        $push: {
            exercises: req.body 
        }
    },
    {
        new: true
    })
        .then((workoutData) => {
            console.log('----hey----', workoutData); 
            res.json(workoutData);
        })
        .catch((err) => res.json(err));
});

// Add New Workout to Database

router.post('/api/workouts', (req, res) => {
    console.log('we arrived')
    Workout.create({})
        .then((workoutData) => res.json(workoutData))
        .catch((err) => res.json(err));
});

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
            totalWeight: { $sum: '$exercise.weight'}
        }
    }])
        .sort({day: -1})
        .limit(7)
        .then(workoutData => {
            console.log(`range:${workoutData}`)
            res.json(workoutData);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router