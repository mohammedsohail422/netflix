import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/training" element={<Training />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
