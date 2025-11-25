import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section className="main">
        <Main />
      </section>
      <Footer />
    </>
  );
}

export default App;
