import "../App.css";

const Categories = ({ onFilter, ticket }) => {
  return (
    <>
      <div>
        <div className={`ui form ${ticket.length > 0 ? "visible" : "hidden"}`}>
          <div className="inline fields categories ">
            <div className="ui buttons">
              <button
                className="ui button"
                id="categories"
                name="categoryRadio"
                value="All"
                onClick={(e) => onFilter(e.target.value)}
                label="All"
              >
                All
              </button>
              {ticket.map((ticket) => (
                <button
                  className="ui button"
                  id="categories"
                  name="categoryRadio"
                  value={"`${ticket.family_member}`"}
                  onClick={(e) => onFilter(ticket.family_member)}
                  label={"`${ticket.family_member}`"}
                >
                  {ticket.family_member}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
