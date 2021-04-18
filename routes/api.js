const router = require('express').Router();
const Workout = require('../models/workout.js')



// Get all workouts 
router.get('api/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

// Get workouts by ID
router.get('api/workuts/:id', (req, res) => {
    

});

router.post('api/workouts', (req, res) => {

});




module.exports = router