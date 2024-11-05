import React from "react";
import { useRef } from "react";

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  const passwordRef = useRef<HTMLDivElement>(null);
  const minLength = 7;

  const handleCopy = () => {
    if (passwordRef.current) {
      const passwordText = passwordRef.current.innerText;
      navigator.clipboard.writeText(passwordText).then(() => {
        onCopy();
      });
    }
  };

  return (
    <div className="result">
      <div ref={passwordRef} className="result__viewbox">
        {password.length < minLength ? (
          <span style={{ color: "red" }}>Contraseña demasiado corta</span>
        ) : (
          password
        )}
      </div>
      <button onClick={handleCopy}>
        <img height={25} src="img/CB.png" alt="Copiar contraseña" />
      </button>
    </div>
  );
};

export default PasswordDisplay;