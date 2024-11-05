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

  // Definir generateRandomPassword usando useCallback
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

    if (chars.length === 0) return "";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return newPassword;
  }, [includeLowercase, includeUppercase, includeNumber, includeSymbol]);

  useEffect(() => {
    setPassword(generateRandomPassword(length));
  }, [length, includeLowercase, includeUppercase, includeNumber, includeSymbol, generateRandomPassword]);

  const handleLengthChange = (newLength: number) => {
    setLength(newLength);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
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

      <GenerateButton onClick={() => setPassword(generateRandomPassword(length))} />
    </div>
  );
}

export default PasswordGenerator;
