require('dotenv').config({ path: "./config.env"});
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const articles = require("./routes/api/articles");

//Connect database
connectDB();
const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/articles', articles);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send("Api running");
    })
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));