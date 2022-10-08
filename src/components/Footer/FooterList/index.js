import React from "react";

class FooterList extends React.Component {
  render() {
    return (
      <ul className="list-group list-group-flush px-4 ">
        <li className="list-group-item bg-secondary text-light">An item</li>
        <li className="list-group-item bg-secondary text-light">
          A second item
        </li>
        <li className="list-group-item bg-secondary text-light">
          A third item
        </li>
        <li className="list-group-item bg-secondary text-light">
          A fourth item
        </li>
        <li className="list-group-item bg-secondary text-light">
          And a fifth one
        </li>
      </ul>
    );
  }
}

export default FooterList;
