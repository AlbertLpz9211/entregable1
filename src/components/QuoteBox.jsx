import React from "react";

const QuoteBox = (prop) => {
  return (
    <div>
      <div className="quote" style={{ color: `${prop.colors}` }}>
        <h1>
          <i class="fa-solid fa-quote-left"></i> {prop.quote}
        </h1>
      </div>
    </div>
  );
};

export default QuoteBox;
