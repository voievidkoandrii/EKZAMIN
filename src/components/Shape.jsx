import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useShapesLine } from "../context/ShapesLineContext";

const shapeStyle = {
  width: 100,
  height: 100,
  margin: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer"
};

const Shape = ({ id, color, type, clicks }) => {
  const { incrementClick } = useShapesLine();
  const ref = useRef(0);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    ref.current++;
    setAnimate(true);
    incrementClick(id);
  };

  return (
    <motion.div
      className="shape"
      key={ref.current}
      onClick={handleClick}
      initial={{ opacity: 1 }}
      animate={animate ? { opacity: [1, 0.5, 1], scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setAnimate(false)}
      style={{
        ...shapeStyle,
        backgroundColor: color,
        borderRadius: type === "circle" ? "50%" : "10%"
      }}
    >
      {clicks}
    </motion.div>
  );
};

export default Shape;
