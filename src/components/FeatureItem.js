import React from "react";

function FeatureItem({ title, info, imageUrl }) {
  return (
    <div className="feature-card">
      <img src={imageUrl} alt={title} className="feature-img" />
      <p className="info">{info}</p>
    </div>
  );
}

export default FeatureItem;
