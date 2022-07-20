const path = require("path");
require("dotenv").config(); // port and mongo URI values

const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const Ticket = require("./models/TicketModel");

const app = express();

connectDB();

app.use(
  cors({
    origin: ["https://kevin-tickets-backend.herokuapp.com", "codingkevin.com"],
    credentials: true,
    methods: ["OPTIONS", "HEAD", "GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

//

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("not in production"));
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
