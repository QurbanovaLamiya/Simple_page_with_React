import React from "react";

class CarouselItems extends React.Component {
  render() {
    return (
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://github.com/owaisibrahim099/react-carousel/blob/master/src/assets/images/1.jpg?raw=true"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://github.com/owaisibrahim099/react-carousel/blob/master/src/assets/images/2.jpg?raw=true"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://github.com/owaisibrahim099/react-carousel/blob/master/src/assets/images/3.jpg?raw=true"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselItems;
