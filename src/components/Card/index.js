import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let inlineStyle = {
      width: "18rem",
    };
    let { title, image_url, desc } = this.props;

    return (
      <>
        <div className="card mx-auto my-5" style={inlineStyle}>
          <img
            src={image_url}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" className="btn btn-secondary">
              Read more ...
            </a>
          </div>
        </div>
      </>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image_url: PropTypes.string,
};

export default Card;
