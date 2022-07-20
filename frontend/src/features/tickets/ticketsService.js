import axios from "axios";
// const API_URL = "https://kevin-tickets-backend.herokuapp.com/api";
const API_URL = "http://localhost:8000/api";
//Create a Ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "/tickets", ticketData, config);

  return response.data;
};

//Get tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/tickets", config);

  return response.data;
};

//Delete ticket
const deleteTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    API_URL + "/tickets/" + ticketData,
    config
  );
  return response.data;
};

//Resolve a Ticket
const resolveTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + "/tickets/" + ticketData,
    ticketData,
    config
  );

  return response.data;
};

//Add a Worknote to a ticket
const addWorknote = async (ticketID, worknotes, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + "/tickets/" + ticketID + "/addWorknote",
    worknotes,
    config
  );
  return response.data;
};

const ticketService = {
  getTickets,
  createTicket,
  resolveTicket,
  addWorknote,
  deleteTicket,
};

export default ticketService;
