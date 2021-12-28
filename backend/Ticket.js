//the schema for tickets

const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  family_member: {
    type: String,
    required: true,
  },
  // urgent: {
  //   type: Boolean,
  //   required: false,
  // },
  resolved: {
    type: Boolean,
    required: false,
    default: false,
  },
  resolution: {
    type: String,
    required: false,
    default: "", // to prevent it showing as undefined
  },
  visible: {
    type: Boolean,
    required: false,
    default: true, // to prevent new tickets from being hidden by filter
  },
});

const Ticket = model("ticket", ticketSchema);

module.exports = Ticket;
