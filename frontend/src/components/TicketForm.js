import { useForm } from "react-hook-form";

import "../App.css";

export const TicketForm = ({ ticket, onSubmit }) => {
  const { register, handleSubmit } = useForm({});
  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <section className="create-ticket">
      <div>
        <form className="ui segment centered form" onSubmit={submitHandler}>
          <div className="field">
            <label>Person</label>
            <input
              type="text"
              name="name"
              placeholder="Enter a name"
              {...register("family_member", { required: true })}
            />
          </div>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Create title for ticket"
              {...register("title", { required: true })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Describe the problem"
              {...register("description", { required: true })}
            />
          </div>

          <button className="ui button" type="submit">
            Save
          </button>
        </form>
      </div>
    </section>
  );
};
