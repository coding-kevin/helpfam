import { useNavigate } from "react-router-dom";
import { resolveTicket } from "../api";

const ResolveTicket = ({ ticket }) => {
  // from TicketCard -----^
  const navigate = useNavigate();

  // Using async / await below gives errors in Firefox
  // and Safari but not Chrome. Used setTimeout as stopgap
  // until a proper solution can be worked out

  const onSubmit = () => {
    resolveTicket(ticket);
    setTimeout(() => {
      navigate(0);
    }, 500);
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
        title="Undo resolution"
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
