import React from "react";
import { counterData } from "../Data";

function Counts() {
  return (
    <div className="counts">
      {counterData.map((count) => {
        return (
          <div className="count-box" key={count.id}>
            <h3 className="count-heading">{count.countText}</h3>
            <p className="count-info">{count.foodInfo}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Counts;
