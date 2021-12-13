export const getTickets = () =>
  fetch("http://localhost:4000/tickets").then((res) => res.json());

export const createTicket = (ticket) =>
  fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

export const deleteTicket = async (ticket) => {
  await fetch(`http://localhost:4000/tickets/${ticket._id}`, {
    method: "DELETE",
  });
};

export const resolveTicket = async (ticket) => {
  const resolved = ticket.resolved;
  console.log("RESOLVED:", resolved);
  console.log("TICKET.RESOLVED", ticket.resolved);
  await fetch(`http://localhost:4000/tickets/${ticket._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resolved: !resolved }),
  });
};

export const addResolution = async (data, ticket) => {
  console.log("ticket.resolution", data.resolution);
  console.log("TICKET ID", ticket._id);
  console.log("TICKET FAMILY MEMBER", ticket.family_member);
  await fetch(`http://localhost:4000/tickets/resolve/${ticket._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
