import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
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
