import { deleteTicket } from "../api";
import { useNavigate } from "react-router-dom";
import { resolveTicket } from "../api";

const ResolveTicket = ({ ticket }) => {
  // from TicketCard -----^
  const navigate = useNavigate();

  const onSubmit = async () => {
    resolveTicket(ticket);
    navigate(0);
  };

  return (
    <div>
      <button
        className="right floated ui basic icon button"
        type="submit"
        onClick={() => onSubmit()}
      >
        <i
          className={`right floated check circle icon ${
            ticket.resolved === true ? "black" : "green"
          } large`}
        ></i>
      </button>
    </div>
  );
};

export default ResolveTicket;
