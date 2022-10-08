import React from "react";
import FooterList from "./FooterList";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let arr = [1, 2, 3];
    return (
      <footer>
        <div className="jumbotron p-5 jumbotron-fluid bg-secondary text-light m-0 mt-5">
          <div className="container d-flex justify-content-between align-items-center">
            <h1 className="m-0">Footer</h1>
            <div className="d-flex">
              {arr.map((item, index) => (
                <FooterList key={`footer-list-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
