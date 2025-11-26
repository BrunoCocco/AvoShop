import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

import "./App.css";

function App() {
   const [vista, setVista] = useState("productos");
  return (
    <>
      <Header setVista={setVista} />
      <section className="main">
       <Main vista={vista} setVista={setVista} />
      </section>
      <Footer />
    </>
  );
}

export default App;
