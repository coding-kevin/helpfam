//schema for tickets

const{ Schema, model }= require('mongoose'); 

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
        required: true
    },
    urgent: {
        type: Boolean,
        required: true,
    },
    resolved: {
        type: Boolean,
        required: true,
    },
    resolution: {
        type: String,
        required: false,
    },
    visible: {
        type: Boolean,
        required: true,
    },
})

const Ticket = model('ticket', ticketSchema);

module.exports = Ticket;