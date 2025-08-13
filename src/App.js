import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./compenents/Home";
import { Contact } from "./compenents/Contact";
import { About } from "./compenents/About";
import { Menuu } from "./compenents/Menuu";
import { Navbar } from "./compenents/Navbar";
import { Footer } from "./compenents/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/menuu" exact element={<Menuu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
