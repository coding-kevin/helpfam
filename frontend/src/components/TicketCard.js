import "../App.css";
import { EditTicketForm } from "./EditTicket";
import { useSelector, useDispatch } from "react-redux";
import { createWorknote } from "../features/tickets/ticketsSlice";

const TicketCard = ({ ticket }) => {
  const { filter } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const { isAddingWorknote } = useSelector((state) => state.tickets);

  const dispatch = useDispatch();
  let worknotes = ticket.worknotes;

  return (
    <>
      {user.userType === "Admin" ? (
        <section className="ticket-card-list">
          <div className="ui list">
            <div
              className={`centered ui cards ${
                ticket.submittedBy === filter || filter === "All"
                  ? "visible"
                  : "hidden"
              }`}
            >
              <div className="card fluid">
                <div className="content">
                  <div className="header">
                    {ticket.title}
                    <p
                      id="resolved-text"
                      className={` meta ${
                        ticket.resolved === true ? "visible" : "hidden"
                      }`}
                    >
                      Resolved
                    </p>
                    <div className="right floated meta">
                      {ticket.submittedBy}
                    </div>
                  </div>

                  <div className="description">{ticket.description}</div>
                  <br />
                  <div>
                    Worknotes
                    <div>
                      <ul>
                        {worknotes
                          .slice(0)
                          .reverse()
                          .map((worknote, index) => {
                            return (
                              <div key={index}>
                                <li>
                                  {worknote.worknotes} <br></br>{" "}
                                  <p className="meta">
                                    submitted on {worknote.timestamp} by{" "}
                                    {worknote.author}{" "}
                                  </p>
                                </li>
                              </div>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  {isAddingWorknote === user._id + ticket._id ? (
                    <>
                      <button
                        className="right floated ui basic icon button"
                        type="submit"
                        title="Add worknote"
                        onClick={() => dispatch(createWorknote())}
                      >
                        <i className="center floated blue pencil icon large"></i>
                      </button>

                      <EditTicketForm ticket={ticket} />
                    </>
                  ) : (
                    <div>
                      <button
                        className="right floated ui basic icon button"
                        type="submit"
                        title="Delete ticket"
                        onClick={() => dispatch(createWorknote(ticket._id))}
                      >
                        <i className="center floated blue pencil icon large"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="ticket-card-list">
          <div className="ui list">
            <div className="centered ui cards">
              <div
                className={`card fluid ${
                  ticket.submittedBy === filter || filter === "All"
                    ? "visible"
                    : "hidden"
                }`}
              >
                <div className="content">
                  <div className="header">
                    {ticket.title}
                    <p
                      id="resolved-text"
                      className={` meta ${
                        ticket.resolved === true ? "visible" : "hidden"
                      }`}
                    >
                      Resolved
                    </p>
                    <div className="right floated meta">
                      {ticket.submittedBy}
                    </div>
                  </div>

                  <div className="description">{ticket.description}</div>
                  <br />
                  <div>
                    Worknotes
                    <div>
                      <ul>
                        {worknotes
                          .slice(0)
                          .reverse()
                          .map((worknote, index) => {
                            return (
                              <div key={index}>
                                <li>
                                  {worknote.worknotes} <br></br>{" "}
                                  <p className="meta">
                                    submitted on {worknote.timestamp} by{" "}
                                    {worknote.author}{" "}
                                  </p>
                                </li>
                              </div>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TicketCard;
