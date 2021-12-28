import { addResolution } from "../api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const TicketResolution = ({ ticket }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});
  const submitHandler = handleSubmit((data) => {
    addResolution(data, ticket);
    navigate(0);
  });

  return (
    <>
      <section>
        <div>
          <form className="ui form resolution-form" onSubmit={submitHandler}>
            <div className="field">
              <input
                type="text"
                name="resolution"
                placeholder="Enter resolution text"
                {...register("resolution", { required: true })}
              />
            </div>

            <button className="ui button" type="submit" title="Save resolution">
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
