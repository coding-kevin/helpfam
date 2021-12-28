import { useForm } from "react-hook-form";

import "../App.css";

export const TicketForm = ({ ticket, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <section className="create-ticket">
      <div>
        <form
          className="ui raised segment centered form"
          onSubmit={submitHandler}
        >
          <h1>Create a Ticket</h1>
          <div className="field">
            <label>Person</label>
            <input
              type="text"
              name="name"
              placeholder="Enter a name"
              {...register("family_member", { required: true })}
            />
            {errors.family_member && <span>This field is required</span>}
          </div>
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

          <button className="blue ui button" type="submit">
            Submit New Ticket
          </button>
        </form>
      </div>
    </section>
  );
};
