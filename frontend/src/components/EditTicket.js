import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  addWorknote,
  resolveTicket,
  deleteTicket,
} from "../features/tickets/ticketsSlice";

import { useDispatch } from "react-redux";

export const EditTicketForm = ({ ticket }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  let ticketID = ticket._id;

  const onSubmit = (ticketData) => {
    dispatch(addWorknote({ ticketID: ticketID, worknotes: ticketData }));
    return navigate("/tickets");
  };

  return (
    <section className="worknote">
      <div>
        <form className="ui form worknote" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <input
              type="text"
              name="worknotes"
              placeholder="Enter worknote"
              {...register("worknotes", ticketID, {
                required: true,
              })}
            />
            {errors.worknotes && <span>This field is required</span>}
          </div>

          <button className="fluid blue ui button" type="submit">
            Add Worknote
          </button>
        </form>
        <div>
          <button
            className="right floated ui basic icon button"
            type="submit"
            title="Delete ticket"
            onClick={() => dispatch(deleteTicket(ticket._id))}
          >
            Delete
            <i className="red trash icon large delete"></i>
          </button>
          <button
            className="left floated  ui basic icon button"
            type="submit"
            title="Resolve ticket"
            onClick={() => dispatch(resolveTicket(ticket._id))}
          >
            Resolve
            <i className="green check icon large resolve"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
