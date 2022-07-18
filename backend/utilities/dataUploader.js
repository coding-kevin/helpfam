// For testing purposes or reseeding the database
// For bulk uploading users, passwords need to be hashed first

// Connect to database
require("dotenv").config();
const connectDB = require("../config/db");

// Tickets Data
const ticketsData = require("./tickets");
const Ticket = require("../models/TicketModel");

// Bulk uploading users. userData was removed and will need to be recreated with hashed passwords
// const User = require("../models/UsersModel");
// const userData = require("./userData");

connectDB();

const importData = async () => {
  try {
    await TestTicket.deleteMany();
    console.log("Cleared old ticket data");
    await TestTicket.insertMany(ticketsData);
    console.log("Added new ticket data");

    // User data import
    // await User.deleteMany({});
    // await User.insertMany(userData);

    console.log("Data import was successful");
    process.exit();
  } catch (error) {
    console.error("Data couldn't import", error);
    process.exit(1);
  }
};

importData();
