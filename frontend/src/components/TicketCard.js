import "../App.css";
import DeleteTicket from "./DeleteTicket";

import TicketResolution from "./TicketResolution";
import ResolveTicket from "./ResolveTicket";

const TicketCard = ({ ticket }) => {
  return (
    <section className="ticket-card-list">
      <div className="ui list">
        <div className="centered ui cards">
          <div
            className={`card fluid ${
              ticket.visible === true ? "visible" : "hidden"
            }`}
          >
            <div
              className="content"
              id={`${ticket.urgent === true ? "urgent" : ""}`}
            >
              <div className="header">
                {ticket.title}
                <div className="right floated meta">{ticket.family_member}</div>
              </div>

              <div className="description">{ticket.description}</div>
              <br />
              <div className="description">
                {`${
                  ticket.resolved
                    ? "Resolved: " + ticket.resolution
                    : ticket.resolution
                }`}
              </div>
            </div>
            <div className="extra content">
              <div
                className={`${
                  ticket.resolved === true && ticket.resolution === "" // if the ticket is resolved but no resolution is saved yet, show resolution prompt
                    ? "visible"
                    : "hidden"
                }`}
              >
                <TicketResolution ticket={ticket} />
              </div>
              <ResolveTicket ticket={ticket} />
              <DeleteTicket ticket={ticket} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketCard;
