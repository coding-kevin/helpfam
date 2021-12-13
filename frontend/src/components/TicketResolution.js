import { addResolution } from "../api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const TicketResolution = ({ ticket }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});
  const submitHandler = handleSubmit((data) => {
    addResolution(data, ticket);
    navigate(0);
  });
  const testButton = async () => {
    console.log("TICKET ID", ticket._id);
  };

  return (
    <>
      <section className="create-ticket">
        <div>
          <form className="ui segment centered form" onSubmit={submitHandler}>
            <div className="field">
              <label>Resolution</label>
              <input
                type="text"
                name="resolution"
                placeholder="Enter resolution text"
                {...register("resolution", { required: true })}
              />
            </div>

            <button
              className="ui button"
              type="submit"
              onClick={() => testButton()} // NEED TO REMOVE
            >
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
