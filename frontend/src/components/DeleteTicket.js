import { deleteTicket } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteTicket = ({ ticket }) => {
  // from TicketCard -----^
  const navigate = useNavigate();

  const onSubmit = async () => {
    deleteTicket(ticket);
    navigate(0);
  };

  return (
    <div>
      <button
        className="right floated ui basic icon button"
        type="submit"
        onClick={() => onSubmit()}
      >
        <i className="red trash icon large"></i>
      </button>
    </div>
  );
};

export default DeleteTicket;
