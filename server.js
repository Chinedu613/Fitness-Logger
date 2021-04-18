const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3050

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONODB_URI || 'mongodb://localhost/workouts', {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Set Routes

app.use(require('./routes/api.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});