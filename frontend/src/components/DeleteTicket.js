import { deleteTicket } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteTicket = ({ ticket }) => {
  // from TicketCard -----^
  const navigate = useNavigate();

  // Using async / await below gives errors in Firefox
  // and Safari but not Chrome. Used setTimeout as stopgap//

  const onSubmit = async () => {
    deleteTicket(ticket);
    setTimeout(() => {
      navigate(0);
    }, 500);
  };

  return (
    <div>
      <button
        className="right floated ui basic icon button"
        type="submit"
        title="Delete ticket"
        onClick={() => onSubmit()}
      >
        <i className="red trash icon large"></i>
      </button>
    </div>
  );
};

export default DeleteTicket;
