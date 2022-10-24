import React from "react";

const Button = (prop) => {
  return (
    <div className="btn-container">
      <button
        style={{ color: `${prop.colors}` }}
        className="button-card"
        onClick={prop.changeColor}
      >
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </button>
    </div>
  );
};

export default Button;
