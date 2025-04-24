import React from "react";
import { useShapesLine } from "../context/ShapesLineContext";

const StatsBar = () => {
  const { stats, toggleDirection, direction } = useShapesLine();

  return (
    <div style={{
      padding: "10px 20px",
      background: "#f0f0f0",
      borderBottom: "1px solid #ccc",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <strong>Кліки:</strong>{" "}
        {stats.map(stat => (
          <span key={stat.id} style={{ margin: "0 10px" }}>
            {stat.color} {stat.type} - {stat.clicks}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
