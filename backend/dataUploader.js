// For testing purposes or reseeding the database
//https://www.youtube.com/watch?v=0divhP3pEsg


require("dotenv").config();

const ticketsData = require("./tickets");
const connectDB = require("./db");
const Ticket = require("./Ticket");

connectDB();

const importData = async () => {
  try {
    await Ticket.deleteMany({});

    await Ticket.insertMany(ticketsData);

    console.log("Data was imported");

    process.exit();
  } catch (error) {
    console.error("Data couldn't import");
    console.log(error);
    process.exit(1);
  }
};

importData();
