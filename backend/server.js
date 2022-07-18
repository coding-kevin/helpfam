require("dotenv").config(); // port and mongo URI values
const cors = require("cors");
const express = require("express");

const connectDB = require("./config/db");
const Ticket = require("./models/TicketModel");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/ticketRoutes"));
app.use("/", require("./routes/usersRoutes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => `Server running on port ${PORT}`);
