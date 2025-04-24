import React from "react";
import ShapesLine from "../components/ShapesLine.jsx";

export default function ShapesView({ direction }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Shapes Line – {direction}</h2>
      <ShapesLine direction={direction} />
    </div>
  );
}
