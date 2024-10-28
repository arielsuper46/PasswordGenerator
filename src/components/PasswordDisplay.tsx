import { FC } from "react";

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: FC<PasswordDisplayProps> = ({ password, onCopy }) => (
  <div className="result">
    <div className="result__viewbox" id="result">
      {password}
      <i className="bi bi-copy" onClick={onCopy}></i>
    </div>
  </div>
);

export default PasswordDisplay;
