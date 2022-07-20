import "../App.css";

const FilterByUser = ({ onFilter, ticket }) => {
  //This creates the ticket filter section

  let allUsers = ticket.map((ticket) => ticket.submittedBy);

  let uniqueUsers = [...new Set(allUsers)];

  function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length;
  }

  checkIfDuplicateExists(allUsers);

  return (
    <>
      <div>
        <div
          className={`centered ui grid ${
            ticket.length > 0 ? "visible" : "hidden"
          }`}
        >
          <button
            className="blue ui button"
            title="All"
            id="users"
            name="userRadio"
            value="All"
            onClick={(e) => onFilter(e.target.value)}
            label="All"
          >
            All
          </button>
          {uniqueUsers.map((uniqueUsers) => (
            <button
              className="blue ui button"
              id="users"
              name="userRadio"
              title={`${uniqueUsers}`}
              value={`${uniqueUsers}`}
              onClick={(e) => onFilter(uniqueUsers)}
              label={`${uniqueUsers}`}
              key={uniqueUsers}
            >
              {uniqueUsers}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterByUser;
