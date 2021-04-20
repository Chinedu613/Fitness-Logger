const router = require('express').Router();
const Workout = require('../models/workout.js');
const path = require('path');



router.get('/', async (req, res) => {
    console.log("here")
    try {
        res.sendFile(path.join(`${__dirname}/index.html`));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/exercise'), async (req, res) => {
    console.log('here!')
    try {
        res.sendFile(path.join(`${__dirname}/exercise.html`));
    } catch (err) {
        res.status(500).json(err);
    }
}

// Get all workouts 
router.get('api/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

// Get workouts by ID
router.get('api/workouts/:id', (req, res) => {
    

});

router.post('api/workouts', (req, res) => {

});




module.exports = router