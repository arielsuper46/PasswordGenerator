import React from "react";

interface LengthSliderProps {
  length: number;
  onChange: (newLength: number) => void;
}

const LengthSlider: React.FC<LengthSliderProps> = ({ length, onChange }) => {
  return (
    <div className="length">
      <label className="length__title">Longitud: {length}</label>
      <input
        type="range"
        min="4"
        max="32"
        value={length}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default LengthSlider;
