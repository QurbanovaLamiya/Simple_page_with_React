import React from "react";

class Search extends React.Component {
  render() {
    return (
      <>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
