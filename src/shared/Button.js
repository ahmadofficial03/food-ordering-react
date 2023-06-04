import PropTypes from "prop-types";
import React from "react";

function Button({ children, version, type }) {
  return (
    <button className={`${version}`} type={type}>
      {children}
    </button>
  );
}

Button.defautProps = {
  version: "primary",
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
};

export default Button;
