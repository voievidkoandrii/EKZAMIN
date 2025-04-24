import React from "react";
import { useShapesLine } from "../context/ShapesLineContext";
import Shape from "../components/Shape";
import { useLocation } from "react-router-dom";

const ShapesLinePage = () => {
  const { shapes } = useShapesLine();
  const location = useLocation();

  // Визначаємо напрямок: горизонтальний чи вертикальний
  const isHorizontal = location.pathname === "/horisontal";

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column", // Змінюємо напрямок
          justifyContent: "center", // Центруємо фігури
          alignItems: "center", // Центруємо фігури
          gap: "10px" // Між фігурами буде відстань
        }}
      >
        {shapes.map((shape) => (
          <Shape
            key={shape.id}
            id={shape.id}
            color={shape.color}
            type={shape.type}
            clicks={shape.clicks}
          />
        ))}
      </div>
    </div>
  );
};

export default ShapesLinePage;
