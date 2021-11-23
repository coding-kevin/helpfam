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

export const deleteTicket = async (id) => {
  await fetch(`http://localhost:4000/tickets/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
