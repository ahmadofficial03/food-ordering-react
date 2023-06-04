import React from "react";
import { features } from "../Data";
import FeatureItem from "./FeatureItem";

function Features() {
  return (
    <section className="features">
      <h3 className="section-heading">Why Choose Us</h3>
      <div className="underline"></div>
      <div className="features-container">
        {features.map((feature) => {
          return <FeatureItem key={feature} {...feature} />;
        })}
      </div>
    </section>
  );
}

export default Features;
