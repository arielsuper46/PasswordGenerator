import React from "react";

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  let message = "";
  if (password === "error_no_options") {
    message = "Por favor selecciona al menos una opción para generar una contraseña.";
  } else if (password === "error_too_short") {
    message = "Contraseña demasiado corta.";
  }

  return (
    <div className="result">
      {message ? (
        <div className="result__error">{message}</div>
      ) : (
        <>
          <div className="result__viewbox">{password}</div>
          <button onClick={onCopy}>
            <img height={25} src="img/CB.png" alt="Copiar contraseña" />
          </button>
        </>
      )}
    </div>
  );
};

export default PasswordDisplay;
