import React from "react";

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  const minLength = 8;
  return (
    <div className="result">
      <div className="result__viewbox">
        {password.length < minLength ? "Contraseña demasiado corta" : password}
      </div>
      <button onClick={onCopy}><img height={25} src="img/CB.png" alt="" /></button>
    </div>
  );
};

export default PasswordDisplay;