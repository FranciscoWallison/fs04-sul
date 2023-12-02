import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleThema } = useContext(ThemeContext);

  return <h1>olá mundo</h1>;
};


export default Home;