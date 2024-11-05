import React from "react";

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  return (
    <div className="result">
      <div className="result__viewbox">{password}</div>
      <button onClick={onCopy}>Copiar</button>
    </div>
  );
};

export default PasswordDisplay;