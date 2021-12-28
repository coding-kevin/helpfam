import "../App.css";

const Categories = ({ onFilter, ticket }) => {
  // https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array

  let allCategories = ticket.map((a) => a.family_member);

  let uniqueCategories = [...new Set(allCategories)];

  function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length;
  }

  checkIfDuplicateExists(allCategories);

  //https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array

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
            id="categories"
            name="categoryRadio"
            value="All"
            onClick={(e) => onFilter(e.target.value)}
            label="All"
          >
            All
          </button>
          {uniqueCategories.map((uniqueCategories) => (
            <button
              className="blue ui button"
              id="categories"
              name="categoryRadio"
              title={"`${uniqueCategories}`"}
              value={"`${uniqueCategories}`"}
              onClick={(e) => onFilter(uniqueCategories)}
              label={"`${uniqueCategories}`"}
            >
              {uniqueCategories}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
