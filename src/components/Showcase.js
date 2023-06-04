import React from "react";
import Button from "../shared/Button";
import imgUrl from "../imgUrl";

function Showcase() {
  return (
    <div className="showcase">
      <div className="content">
        <h1 className="showcase-heading">
          Enjoy <span>home made meals</span> far away from home
        </h1>
        <p className="showcase-info">
          Helping you enjoy comfortable and healthy food anywhere and anytime on
          the go
        </p>
        <Button version="primary" type="button">
          Order Now
        </Button>
      </div>
      <img src={imgUrl} alt="Foods" className="showcase-img" />
    </div>
  );
}

export default Showcase;
