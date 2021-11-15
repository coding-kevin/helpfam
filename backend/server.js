require('dotenv').config(); // port and mongo URI values
const express = require('express');
const connectDB = require('./db');
const Ticket = require('./Ticket');
const cors = require('cors');

const app = express(); // initialize app with express

connectDB(); // connect to MongoDB as described in db.js

app.use(cors()); // to stop cors errors

app.use(express.json());

app.get('/', (req, res) => {
    Ticket.find((err, tickets) => {
        if (err) {
            console.log(err);
        } 
        else {
            res.json(tickets)
        }
        });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))