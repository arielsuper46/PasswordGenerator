import PasswordGenerator from "./components/PasswordGenerator";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css"; // Asegúrate de que este archivo esté correctamente enlazado

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PasswordGenerator defaultLength={16} />
    </div>
  );
}

export default App;
