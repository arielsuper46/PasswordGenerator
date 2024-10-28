import { FC } from "react";

interface LengthSliderProps {
  length: number;
  onChange: (newLength: number) => void;
}

const LengthSlider: FC<LengthSliderProps> = ({ length, onChange }) => {
  return (
    <div className="length range__slider" data-min="5" data-max="32">
      <div className="length__title field-title">Longitud: {length}</div>
      <input
        id="slider"
        type="range"
        min="5"
        max="32"
        value={length}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default LengthSlider;
