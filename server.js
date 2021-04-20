const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3050

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'))

// Serving Static Files
app.use(express.static('public'));

// Connects Mongoose
mongoose.connect(process.env.MONODB_URI || 'mongodb://localhost/workouts', {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Set Routes

app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));

// Running Port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});