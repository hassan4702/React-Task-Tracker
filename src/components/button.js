import React from "react";
import PropTypes from "prop-types";

// const onClick =(e)=>{
// console.log(e)
// }

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
  text: "Select",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
