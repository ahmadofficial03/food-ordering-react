import React, { useState } from "react";
import { TestimonialData } from "../Data";

function TestimonialContainer() {
  const [testimonialData, setTestimonialData] = useState(TestimonialData);
  console.log(testimonialData, "line 6....................");
  return (
    <section className="testimonial-container">
      <h3 className="section-heading testmonial-container-heading">
        Testimonials
      </h3>
      <div className="underline"></div>
      <div className="testimonial-box-container">
        {testimonialData.map((testimonial) => {
          return (
            <div className="testimonial" key={testimonial.id}>
              <h3 className="testimonial-title">{testimonial.title}</h3>
              <p className="testimonial-subtitle">{testimonial.subTitle}</p>
              <p className="testimonial-desc">{testimonial.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TestimonialContainer;
