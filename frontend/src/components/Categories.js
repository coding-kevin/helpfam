import "../App.css";

const Categories = ({ onFilter }) => {
  return (
    <div>
      <div className="ui form ">
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

            <button
              className="ui button"
              id="categories"
              name="categoryRadio"
              value="Rivka"
              onClick={(e) => onFilter(e.target.value)}
              label="Rivka"
            >
              Rivka
            </button>

            <button
              className="ui button"
              id="categories"
              name="categoryRadio"
              value="Mom"
              onClick={(e) => onFilter(e.target.value)}
              label="Mom"
            >
              Mom
            </button>

            <button
              className="ui button"
              id="categories"
              name="categoryRadio"
              value="Dad"
              onClick={(e) => onFilter(e.target.value)}
              label="Dad"
            >
              Dad
            </button>

            <button
              className="ui button"
              id="categories"
              name="categoryRadio"
              value="Ed"
              onClick={(e) => onFilter(e.target.value)}
              label="Ed"
            >
              Ed
            </button>

            <button
              className="ui button"
              id="categories"
              name="categoryRadio"
              value="Maddie"
              onClick={(e) => onFilter(e.target.value)}
              label="Maddie"
            >
              Maddie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
