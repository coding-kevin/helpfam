import { deleteTicket } from "../api";

const DeleteTicket = ({ ticket }) => {
  const id = ticket._id;

  return (
    <div>
      <button onClick={() => deleteTicket(id)}>ID</button>
    </div>
  );
};

export default DeleteTicket;
