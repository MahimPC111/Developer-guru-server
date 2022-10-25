const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use = (cors());


app.get('/', (req, res) => {
    res.send('Learn javascript site is working!!')
})

app.listen(port, () => {
    console.log('This site is running on:', port)
})