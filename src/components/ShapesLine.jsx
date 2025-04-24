import React, { useState } from "react";
import Shape from "./Shape";

const ShapesLine = ({ direction = "row" }) => {
  const [shapes, setShapes] = useState([
    { color: "red", type: "circle", clicks: 0 },
    { color: "blue", type: "square", clicks: 0 },
    { color: "green", type: "circle", clicks: 0 },
  ]);

  const handleShapeClick = (index) => {
    setShapes((prev) =>
      prev.map((shape, i) =>
        i === index ? { ...shape, clicks: shape.clicks + 1 } : shape
      )
    );
  };

  const containerStyle = {
    display: "flex",
    flexDirection: direction,
    gap: "10px",
    margin: "20px 0",
  };

  return (
    <div style={containerStyle}>
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          tfrColor={shape.color}
          tfrType={shape.type}
          clicks={shape.clicks}
          onClick={() => handleShapeClick(index)}
        />
      ))}
    </div>
  );
};

export default ShapesLine;
