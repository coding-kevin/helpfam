//the schema for tickets

const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  submittedBy: {
    type: String,
    required: true,
  },
  worknotes: [
    {
      type: Object,
      timestamp: "",
      worknotes: "",
      author: "",
    },
  ],
  resolved: {
    type: Boolean,
    required: false,
    default: false,
  },
  visible: {
    type: Boolean,
    required: false,
    default: true, // to prevent new tickets from being hidden by filter
  },
});

const Ticket = mongoose.model("test ticket", TicketSchema);

module.exports = Ticket;
