import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ShapesLineContext = createContext();

const API_URL = "https://ekzamin.onrender.com"; // json-server endpoint

export const ShapesLineProvider = ({ children }) => {
  const [shapes, setShapes] = useState([]);
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    fetchShapes();
  }, []);

  const fetchShapes = async () => {
    const res = await axios.get(API_URL);
    setShapes(res.data);
  };

  const incrementClick = async (id) => {
    const updatedShape = shapes.find(shape => shape.id === id);
    if (!updatedShape) return;

    const updated = { ...updatedShape, clicks: updatedShape.clicks + 1 };
    await axios.put(`${API_URL}/${id}`, updated);
    fetchShapes(); // оновлюємо стейт після PUT
  };

  const toggleDirection = () => {
    setDirection(prev => (prev === "horizontal" ? "vertical" : "horizontal"));
  };

  const stats = shapes.map(({ id, color, type, clicks }) => ({
    id,
    color,
    type,
    clicks
  }));

  return (
    <ShapesLineContext.Provider value={{ shapes, incrementClick, direction, toggleDirection, stats }}>
      {children}
    </ShapesLineContext.Provider>
  );
};

export const useShapesLine = () => useContext(ShapesLineContext);
