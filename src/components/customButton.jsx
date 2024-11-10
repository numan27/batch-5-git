import React from "react";

const CustomButton = ({
  title = "Click Me",
  bg = "black",
  color = "#fff",
  borderColor = "white",
}) => {
  return (
    <div>
      <button
        //   style={{backgroundColor: bg}}
        className={`bg-${bg}`}
        style={{ color: color, border: `2px solid ${borderColor}` }}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
