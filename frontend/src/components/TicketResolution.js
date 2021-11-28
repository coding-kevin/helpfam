import React from "react";

const TicketResolution = ({ ticket }) => {
  return (
    <>
      <section className="create-ticket">
        <div>
          <form
            className="ui segment centered form"
            //onSubmit={submitHandler}
          >
            <div className="field">
              <label>Resolution</label>
              <input
                type="text"
                name="name"
                placeholder=""
                //{...register("family_member", { required: true })}
              />
            </div>

            <button className="ui button" type="submit">
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TicketResolution;
