const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// app.use = (cors());
app.use(
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learn javascript site is working!!')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('This site is running on the port:', port)
})