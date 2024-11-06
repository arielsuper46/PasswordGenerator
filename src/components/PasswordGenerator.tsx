import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import LengthSlider from "./LengthSlider";
import Checkbox from "./Checkbox";
import PasswordDisplay from "./PasswordDisplay";
import GenerateButton from "./GenerateButton";

interface PasswordGeneratorProps {
  defaultLength?: number;
}

function PasswordGenerator({ defaultLength = 16 }: PasswordGeneratorProps) {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(defaultLength);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeNumber, setIncludeNumber] = useState<boolean>(true);
  const [includeSymbol, setIncludeSymbol] = useState<boolean>(false);

  // Memorizar la función usando useCallback para evitar recrearla en cada renderizado
  const generateRandomPassword = useCallback((length: number): string => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";
    let chars = "";

    if (includeLowercase) chars += lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumber) chars += numberChars;
    if (includeSymbol) chars += symbolChars;

    if (chars.length === 0) return ""; // Si no hay opciones seleccionadas

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return newPassword;
  }, [includeLowercase, includeUppercase, includeNumber, includeSymbol]);

  // Función para actualizar la contraseña con las validaciones
  const updatePassword = useCallback(() => {
    if (!includeLowercase && !includeUppercase && !includeNumber && !includeSymbol) {
      setPassword("error_no_options");
    } else if (length < 8) {
      setPassword("error_too_short");
    } else {
      setPassword(generateRandomPassword(length)); // Generación normal de contraseña
    }
  }, [length, includeLowercase, includeUppercase, includeNumber, includeSymbol, generateRandomPassword]);

  // useEffect para actualizar la contraseña cuando cambian los criterios
  useEffect(() => {
    updatePassword(); // Se ejecuta solo cuando cambian las configuraciones o la longitud
  }, [length, includeLowercase, includeUppercase, includeNumber, includeSymbol, updatePassword]);

  const handleLengthChange = (newLength: number) => {
    setLength(newLength); // Actualiza la longitud y actualiza la contraseña
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password); // Copiar contraseña al portapapeles
    toast.success("Contraseña copiada al portapapeles");
  };

  return (
    <div className="container">
      <h2 className="title">Generador de contraseñas</h2>
      <PasswordDisplay password={password} onCopy={copyToClipboard} />

      <LengthSlider length={length} onChange={handleLengthChange} />

      <div className="settings">
        <span className="settings__title field-title">Configuraciones:</span>
        <Checkbox
          label="Incluir Minúsculas"
          checked={includeLowercase}
          onChange={(checked) => setIncludeLowercase(checked)}
        />
        <Checkbox
          label="Incluir Mayúsculas"
          checked={includeUppercase}
          onChange={(checked) => setIncludeUppercase(checked)}
        />
        <Checkbox
          label="Incluir Números"
          checked={includeNumber}
          onChange={(checked) => setIncludeNumber(checked)}
        />
        <Checkbox
          label="Incluir Símbolos"
          checked={includeSymbol}
          onChange={(checked) => setIncludeSymbol(checked)}
        />
      </div>

      {/* Llamamos a updatePassword al hacer clic */}
      <GenerateButton onClick={updatePassword} />
    </div>
  );
}

export default PasswordGenerator;
