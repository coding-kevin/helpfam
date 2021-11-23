import "../App.css";
import DeleteTicket from "./DeleteTicket";

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
              <DeleteTicket ticket={ticket} />
              <i
                className={`right floated ${
                  ticket.resolved === true ? "black" : "blue"
                } pencil icon large`}
              ></i>
              <i
                className={`right floated check circle icon ${
                  ticket.resolved === true ? "black" : "green"
                } large`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketCard;
