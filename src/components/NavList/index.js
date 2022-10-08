import React from "react";
import PropTypes from "prop-types";

class NavList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ul className="navbar-nav m-auto px-5">
          {this.props.menuData.map((item, index) => (
            <li className="nav-item mr-3" key={`menu-list-${index}`}>
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

NavList.propTypes = {
  menuData: PropTypes.array,
};
export default NavList;
