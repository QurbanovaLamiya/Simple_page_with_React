import React from "react";
import PropTypes from "prop-types";

class NavLogo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="mx-3">
          <a className="navbar-brand text-white ml-5 h1" href="#">
            {this.props.pageTitle}
          </a>
        </div>
      </>
    );
  }
}

NavLogo.propTypes = {
  pageTitle: PropTypes.string,
};

export default NavLogo;
