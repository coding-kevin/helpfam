import "../App.css";

const TicketCard = ( { ticket } ) => {
return (
    <section className="ticket-card-list">
<div className="ui list">
<div className="centered ui cards">
  <div className={`card fluid ${ticket.visible === true? "visible" : "hidden"}`}>
    <div className="content" id={`${ticket.urgent === true ? "urgent" : ""}`}>
      <div className="header">
        {ticket.title}
        <div className="right floated meta">
        {ticket.family_member}
      </div>
      </div>

      <div className="description">
        {ticket.description}
      </div>
      <br/>
      <div className="description">
        {`${ticket.resolved ? "Resolved: " + ticket.resolution : ticket.resolution}`}
      </div>
    </div>
    <div className="extra content">
      <div className="ui three buttons">
        <div className={`ui basic ${ticket.resolved === true ? "black" : "green"} button`}>{`${ticket.resolved=== true ? "Resolved" : "Resolve"}`}</div>
        <div className="ui basic blue button">Edit</div>
        <div className="ui basic red button">Delete</div>
      </div>
    </div>
  </div>
  
</div>
</div>
</section>
);
};

export default TicketCard;