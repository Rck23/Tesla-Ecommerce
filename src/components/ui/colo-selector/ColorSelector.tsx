'use client'
import React, { useState } from "react";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "pink",
    "orange",
  ];

  const Circle = ({ color }) => {
    const isSelected = color === selectedColor;

    return (
      <div
        className={`w-10 h-10 rounded-full cursor-pointer border-2 border-black ${isSelected ? 'border-opacity-100' : 'border-opacity-0'}`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      ></div>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Selector de colores</h1>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Circle color={color} key={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
