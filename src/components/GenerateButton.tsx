interface GenerateButtonProps {
    onClick: () => void;
  }
  
  function GenerateButton({ onClick }: GenerateButtonProps) {
    return (
      <button onClick={onClick} className="generate-button">
        Generar Nueva Contraseña
      </button>
    );
  }
  
  export default GenerateButton;
  