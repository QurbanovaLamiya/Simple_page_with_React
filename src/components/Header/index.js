import React from "react";
import Nav from "../Nav";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="mb-1">
          <Nav isSearchPanel />
        </header>
      </>
    );
  }
}

export default Header;
