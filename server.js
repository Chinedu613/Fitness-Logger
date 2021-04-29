const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3050

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'))

// Serving Static Files
app.use(express.static('public'));

// Connects Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
})
.then(() => {
    console.log('Connected to Mongo Database')
})
.catch(err => {
    console.error('Database Error', err.stack)
})

// Set Routes

app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));

// Running Port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});