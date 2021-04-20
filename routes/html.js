const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});


router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (error) {
        res.status(500).json(err);
    }
    
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router