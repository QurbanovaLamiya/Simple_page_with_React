import React from "react";
import NavList from "../NavList";
import Search from "../Search";
import NavLogo from "./NavLogo";
import PropTypes from "prop-types";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let menuList = ["Home", "About", "Contact", "Blog"];
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
          <div className="container-fluid">
            <NavLogo pageTitle="Electron ." />
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <NavList menuData={menuList} />
              {this.props.isSearchPanel && <Search />}
            </div>
          </div>
        </nav>
      </>
    );
  }
}

Nav.propTypes = {
  isSearchPanel: PropTypes.bool,
};

export default Nav;
