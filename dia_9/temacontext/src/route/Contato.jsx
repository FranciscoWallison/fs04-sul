import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contato = () => {
  const { theme, toggleThema } = useContext(ThemeContext);

  return <h1>olá mundo Contato</h1>;
};


export default Contato;