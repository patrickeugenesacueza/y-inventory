import { useState } from "react";
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import FooterLogin from "./Components/Footer";
import NavLogin from "./Components/NavLogin";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavLogin/>
        <Login/>
        <FooterLogin/>
      </div>
    </>
  );
}

export default App;
