import React from "react";
import Card from "../Card";
import PropTypes from "prop-types";

class BoxList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row mx-auto my-5">
        {this.props.productData.products.map((item) => (
          <Card key={`data-info-${item.id}`} {...item} />
        ))}
      </div>
    );
  }
}

BoxList.propTypes = {
  productData: PropTypes.object,
  products: PropTypes.array,
};

export default BoxList;
