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
  const resolution = ticket.resolved;
  await fetch(`http://localhost:4000/tickets/${ticket._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resolution: !resolution }),
  });
};
