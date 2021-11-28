import { deleteTicket } from "../api";
import { useNavigate } from "react-router-dom";
import { resolveTicket } from "../api";

const ResolveTicket = ({ ticket }) => {
  // from TicketCard -----^
  const navigate = useNavigate();

  const onSubmit = async () => {
    resolveTicket(ticket);
    await navigate(0);
  };

  return (
    <div>
      <button
        className={`${
          ticket.resolved === true && ticket.resolution !== ""
            ? "hidden"
            : "left floated ui basic button icon"
        }`}
        type="submit"
        onClick={() => onSubmit()}
      >
        <i
          className={` ${
            ticket.resolved === false
              ? "check circle icon green"
              : "undo icon red" // show undo icon when resolved but no resolution saved
          } large`}
        ></i>
      </button>
    </div>
  );
};

export default ResolveTicket;
