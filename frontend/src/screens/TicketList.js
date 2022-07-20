import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketsSlice";
import { TicketForm } from "./CreateTicketForm";
import { useNavigate } from "react-router-dom";
import { filterTickets } from "../features/auth/authSlice";
import TicketCard from "../components/TicketCard";
import FilterByUser from "../components/FilterByUser";

const TicketList = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { ticketList, isError, message } = useSelector(
    (state) => state.tickets
  );

  const onFilter = (selectedCategory) => {
    dispatch(filterTickets(selectedCategory));
  };

  useEffect(() => {
    if (isError) {
      console.log("ERROR displaying tickets");
      throw new Error(message);
    }

    if (user) {
      navigate("/tickets");
      dispatch(getTickets());
    }

    if (!user) {
      navigate("/users/login");
    }
    return () => {
      dispatch(reset);
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <>
      {user ? (
        <>
          {user.userType === "Admin" ? (
            <>
              <TicketForm />
              <div className="ticket-List">
                {ticketList.length > 0 ? (
                  <h3 className="welcome-text">
                    Hello {user.name}. Submitted tickets are below.
                  </h3>
                ) : (
                  <h3 className="welcome-text">
                    Hello {user.name}. There are no submitted tickets to show.
                  </h3>
                )}

                <FilterByUser ticket={ticketList} onFilter={onFilter} />
                <div className="ticket-list">
                  {ticketList
                    .slice(0)
                    .reverse()
                    .map((ticket) => (
                      <TicketCard ticket={ticket} key={ticket._id} />
                    ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <TicketForm />
              <div className="ticket-list">
                {ticketList.length > 0 ? (
                  <h3 className="welcome-text">
                    Hello {user.name}. Your tickets are below.
                  </h3>
                ) : (
                  <h3 className="welcome-text">
                    Hello {user.name}. You haven't submitted any tickets yet.
                    Tickets created above will be listed below.
                  </h3>
                )}
                <div>
                  {ticketList
                    .slice(0)
                    .reverse()
                    .map((ticket) => (
                      <TicketCard ticket={ticket} key={ticket._id} />
                    ))}
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        navigate("/users/login")
      )}
    </>
  );
};

export default TicketList;
