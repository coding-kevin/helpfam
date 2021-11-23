require("dotenv").config(); // port and mongo URI values
const express = require("express");
const connectDB = require("./db");
const Ticket = require("./Ticket");
const cors = require("cors");

const app = express(); // initialize app with express

connectDB(); // connect to MongoDB as described in db.js

app.use(cors()); // to stop cors errors

app.use(express.json());

app.get("/tickets", (req, res) => {
  Ticket.find((err, tickets) => {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  });
});

app.get("/tickets/:id", (req, res) => {
  const id = req.params.id;
  Ticket.findById(id, (err, ticket) => {
    res.json(ticket);
  });
  console.log(id);
});

app.post("/tickets", (req, res) => {
  const ticket = new Ticket(req.body);
  ticket
    .save()
    .then((ticket) => {
      res.json(ticket);
    })
    .catch((err) => {
      res.status(500).send(err.message);
      console.log(error);
    });
});

app.delete("/tickets/:id", async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
