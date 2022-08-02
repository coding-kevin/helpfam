const asyncHandler = require("express-async-handler");
const Ticket = require("../models/TicketModel");
const User = require("../models/UsersModel");

// GET /
// Get all tickets

const getTickets = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (req.user.userType === "Customer") {
    const tickets = await Ticket.find({ submittedBy: req.user.name });
    res.status(200).json(tickets);
  } else if (req.user.userType === "Admin") {
    const tickets = await Ticket.find();

    res.status(200).json(tickets);
  }
});

// POST /
// Create ticket

const setTicket = asyncHandler(async (req, res) => {
  const ticket = await new Ticket({
    title: req.body.title,
    description: req.body.description,
    submittedBy: req.body.submittedBy,
  });
  ticket.save().then((ticket) => {
    res.json(ticket);
  });
});

// DELETE /:id
// Delete a ticket

const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(401);

    throw new Error("Ticket not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (req.user.userType !== "Admin") {
    res.status(403);
    throw new Error("User not authorized - not Admin");
  }

  await ticket.remove();

  return res.status(200).json({ id: req.params.id });
});

// PUT /:id
// Resolve a ticket
const resolveTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(401);
    throw new Error("Ticket not found");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (req.user.userType !== "Admin") {
    res.status(403);
    throw new Error("User not authorized - not Admin");
  }

  await Ticket.update({ _id: req.params.id }, [
    { $set: { resolved: { $not: "$resolved" } } },
  ]);

  return res.status(200).json({ id: req.params.id });
});

// PUT /:id
// Add worknote to ticket

const addWorknote = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(401);
    throw new Error("Ticket not found");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (req.user.userType !== "Admin") {
    res.status(403);
    throw new Error("User not authorized - not Admin");
  }

  // Timestamp generation
  let rawTimeStamp = new Date();
  let datePart = rawTimeStamp.toLocaleDateString();
  let timePart = rawTimeStamp.toLocaleTimeString();
  let timeStamp = `${datePart}` + " at " + `${timePart}`;

  await Ticket.updateOne(
    { _id: req.params.id },
    {
      $push: {
        worknotes: {
          worknotes: req.body.worknotes,
          timestamp: timeStamp,
          author: user.name,
        },
      },
    }
  );
  return res.status(201).json({ id: req.params.id });
});

module.exports = {
  getTickets,
  setTicket,
  addWorknote,
  deleteTicket,
  resolveTicket,
};
