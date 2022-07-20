import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { createTicket } from "../features/tickets/ticketsSlice";

export const TicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (ticketData, token) => {
    dispatch(createTicket(ticketData));
    navigate("/tickets");
  };

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {user ? (
        <section className="create-ticket">
          <div>
            <form
              className="ui raised segment centered form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1>Create a Ticket</h1>
              {user.userType === "Admin" ? (
                <div className="field">
                  <label>User</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter a name"
                    {...register("submittedBy", { required: true })}
                  />
                  {errors.submittedBy && <span>This field is required</span>}
                </div>
              ) : (
                <></>
              )}

              <div className="field">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Create title for ticket"
                  {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}
              </div>
              <div className="field">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Describe the problem"
                  {...register("description", { required: true })}
                />
                {errors.description && <span>This field is required</span>}
              </div>

              <button
                className="blue ui button"
                id="submit-button"
                type="submit"
              >
                Submit New Ticket
              </button>
            </form>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};
